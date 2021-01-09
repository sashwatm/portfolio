import * as apigw from '@aws-cdk/aws-apigateway';
import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class ContactFormApi extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: any) {
    super(scope, id);

    const contactFormMailer = new lambda.Function(this, 'Handler', {
      functionName: `${id}MailerLambda`,
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'contact_form_handler.handler',
      timeout: cdk.Duration.seconds(10),
    });

    contactFormMailer.addToRolePolicy(new iam.PolicyStatement({
      actions: ['ses:SendEmail'],
      resources: ['*'],
      effect: iam.Effect.ALLOW,
    }));

    const contactFormMailerGateway = new apigw.LambdaRestApi(this, 'MailerGateway', {
      restApiName: `${id}MailerGateway`,
      proxy: false,
      handler: contactFormMailer,
      endpointExportName: `${id}MailerGatewayEndpoint`
    });

    const gatewayEmailResource = contactFormMailerGateway.root.addResource('emails');
    gatewayEmailResource.addMethod('POST');
  }
}