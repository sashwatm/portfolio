import * as iam from '@aws-cdk/aws-iam';
import * as route53 from '@aws-cdk/aws-route53';
import * as ses from '@aws-cdk/aws-ses';
import * as sesActions from '@aws-cdk/aws-ses-actions';
import * as sns from '@aws-cdk/aws-sns';
import * as snsSubscriptions from '@aws-cdk/aws-sns-subscriptions';
import * as cdk from '@aws-cdk/core';
import * as customResources from '@aws-cdk/custom-resources';

export class EmailSetup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: any) {
    super(scope, id);

    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {domainName: props.portfolioDomain});

    const verifyDomainIdentity = new customResources.AwsCustomResource(this, 'VerifyDomainIdentity', {
      onCreate: {
        service: 'SES',
        action: 'verifyDomainIdentity',
        parameters: {
          Domain: props.portfolioDomain
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
      recordName: `_amazonses.${props.portfolioDomain}`,
      zone: hostedZone,
      values: [ verifyDomainIdentity.getResponseField('VerificationToken').toString() ]
    });

    new route53.MxRecord(this, 'SESReceivingRecord', {
      recordName: props.portfolioDomain,
      zone: hostedZone,
      values: [
        {
          hostName:'inbound-smtp.us-west-2.amazonaws.com.',
          priority: 0
        }
      ]
    });

    // Add SES rule set to forward message to SNS topic that our personal email id subscribes to
    const mailReceiverTopic = new sns.Topic(this, 'ReceiverTopic', {
      topicName: `${id}Receiver`
    });

    mailReceiverTopic.addSubscription(new snsSubscriptions.EmailSubscription(props.portfolioFwdEmail));

    const mailFwdRuleSet = new ses.ReceiptRuleSet(this, 'FwdRuleSet', {
      dropSpam: true,
      rules: [
        {
          enabled: true,
          receiptRuleName: `${id}FwdRuleSet`,
          recipients: props.users.map((user: any) => `${user}@${props.portfolioDomain}`),
          actions: [ new sesActions.Sns({ encoding: sesActions.EmailEncoding.UTF8, topic: mailReceiverTopic }) ]
        }
      ]
    });

    const activateRuleSet = new customResources.AwsCustomResource(this, 'ActivateFwdRuleSet', {
      onCreate: {
        service: 'SES',
        action: 'setActiveReceiptRuleSet',
        parameters: {
          RuleSetName: mailFwdRuleSet.receiptRuleSetName
        },
        physicalResourceId: customResources.PhysicalResourceId.of('ActivateFwdRuleSet')
      },
      policy: customResources.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ["ses:SetActiveReceiptRuleSet"],
          effect: iam.Effect.ALLOW,
          resources: ['*']
        })
      ]),
    });

    for (let thisUser of props.users) {
      new customResources.AwsCustomResource(this, `VerifyEmailIdentity_${thisUser}`, {
        onCreate: {
          service: 'SES',
          action: 'verifyEmailIdentity',
          parameters: {
            EmailAddress: `${thisUser}@${props.portfolioDomain}`
          },
          physicalResourceId: customResources.PhysicalResourceId.of(`VerifyEmailIdentity_${thisUser}`)
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
}