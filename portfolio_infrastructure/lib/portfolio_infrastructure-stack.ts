import * as acm from '@aws-cdk/aws-certificatemanager';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as iam from '@aws-cdk/aws-iam';
import * as route53 from '@aws-cdk/aws-route53';
import * as route53Targets from '@aws-cdk/aws-route53-targets';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

import * as contactFormApi from './contactFormApi/contact_form_api';
import * as emailSetup from './emailSetup/email_setup';

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

    new emailSetup.EmailSetup(this, 'PortfolioEmail', {
      portfolioDomain: this.PORTFOLIO_DOMAIN,
      portfolioFwdEmail: this.PORTFOLIO_FORWARDING_EMAIL,
      users: ['admin', 'hey']
    });

    // Create a contact form send handler
    new contactFormApi.ContactFormApi(this, 'ContactForm', {
      portfolioDomain: this.PORTFOLIO_DOMAIN
    });
  }
}
