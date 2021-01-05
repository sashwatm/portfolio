import * as acm from '@aws-cdk/aws-certificatemanager';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as iam from '@aws-cdk/aws-iam';
import * as route53 from '@aws-cdk/aws-route53';
import * as route53Targets from '@aws-cdk/aws-route53-targets';
import * as s3 from '@aws-cdk/aws-s3';
import * as ses from '@aws-cdk/aws-ses';
import * as sesActions from '@aws-cdk/aws-ses-actions';
import * as sns from '@aws-cdk/aws-sns';
import * as snsSubscriptions from '@aws-cdk/aws-sns-subscriptions';
import * as cdk from '@aws-cdk/core';
import * as customResources from '@aws-cdk/custom-resources';


export class PortfolioInfrastructureStack extends cdk.Stack {
  readonly PORTFOLIO_SLD: string = "sashwatmishra";
  readonly PORTFOLIO_FORWARDING_EMAIL: string = `${this.PORTFOLIO_SLD}@gmail.com`;
  readonly PORTFOLIO_DOMAIN: string = `${this.PORTFOLIO_SLD}.com`;
  readonly PORTFOLIO_DOMAIN_ALIASES: string[] = [this.PORTFOLIO_DOMAIN, `www.${this.PORTFOLIO_DOMAIN}`];

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'portfolio-bucket', {
          bucketName: `sashwatmishra-portfolio-app-${cdk.Aws.ACCOUNT_ID}`,
          websiteIndexDocument: 'index.html',
          removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {domainName: this.PORTFOLIO_DOMAIN});

    // Certificate must be created in us-east-1 to avoid this error:
    // https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-invalid-viewer-certificate/
    const certificate = new acm.DnsValidatedCertificate(this, 'Certificate', {
          domainName: this.PORTFOLIO_DOMAIN,
          subjectAlternativeNames: this.PORTFOLIO_DOMAIN_ALIASES,
          hostedZone,
          region: 'us-east-1'
    });

    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'PortfolioOAI');

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'PortfolioDistribution', {
          originConfigs: [
            {
              s3OriginSource: {
                s3BucketSource: bucket,
                originAccessIdentity: cloudFrontOAI,
              },
              behaviors: [{ isDefaultBehavior: true }]
            }
          ],
          viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
              certificate,
              {
                aliases: this.PORTFOLIO_DOMAIN_ALIASES,
                securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1,
                sslMethod: cloudfront.SSLMethod.SNI
              }
          )
    });

    new route53.ARecord(this, 'Alias', {
          zone: hostedZone,
          target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(distribution))
    });

    bucket.grantRead(cloudFrontOAI.grantPrincipal);

    const verifyDomainIdentity = new customResources.AwsCustomResource(this, 'VerifyDomainIdentity', {
      onCreate: {
        service: 'SES',
        action: 'verifyDomainIdentity',
        parameters: {
          Domain: this.PORTFOLIO_DOMAIN
        },
        physicalResourceId: customResources.PhysicalResourceId.fromResponse('VerificationToken') // Use the token returned by the call as physical id
      },
      policy: customResources.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ["ses:VerifyDomainIdentity"],
          effect: iam.Effect.ALLOW,
          resources: ['*']
        })
      ]),
    });

    new route53.TxtRecord(this, 'SESVerificationRecord', {
      recordName: `_amazonses.${this.PORTFOLIO_DOMAIN}`,
      zone: hostedZone,
      values: [ verifyDomainIdentity.getResponseField('VerificationToken').toString() ]
    });

    // Add SES rule set to forward message to SNS topic that our personal email id subscribes to
    const mailReceiverTopic = new sns.Topic(this, 'MailReceiverTopic', {
      topicName: 'HeyPortfolioMailReceiver'
    });

    mailReceiverTopic.addSubscription(new snsSubscriptions.EmailSubscription(this.PORTFOLIO_FORWARDING_EMAIL));

    new ses.ReceiptRuleSet(this, 'MailForwardingRuleSet', {
      dropSpam: true,
      rules: [
        {
          enabled: true,
          receiptRuleName: 'HeyPortfolioMailForwardingRuleSet',
          recipients: [`hey@${this.PORTFOLIO_DOMAIN}`],
          actions: [ new sesActions.Sns({ encoding: sesActions.EmailEncoding.UTF8, topic: mailReceiverTopic }) ]
        }
      ]
    });

    const verifyEmailIdentity = new customResources.AwsCustomResource(this, 'VerifyEmailIdentity', {
      onCreate: {
        service: 'SES',
        action: 'verifyEmailIdentity',
        parameters: {
          EmailAddress: `hey@${this.PORTFOLIO_DOMAIN}`
        },
        physicalResourceId: customResources.PhysicalResourceId.of('VerifyEmailIdentity')
      },
      policy: customResources.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ["ses:VerifyEmailIdentity"],
          effect: iam.Effect.ALLOW,
          resources: ['*']
        })
      ]),
    });
  }
}
