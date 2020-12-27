import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'sashwatmishra-portfolio-bucket', {
          bucketName: `sashwatmishra-portfolio-app-${cdk.Aws.ACCOUNT_ID}`,
          websiteIndexDocument: 'index.html'
    });

    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'SashwatMishraPortfolioOAI');

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'SashwatMishraPortfolioDistribution', {
          originConfigs: [
            {
              s3OriginSource: {
                s3BucketSource: bucket,
                originAccessIdentity: cloudFrontOAI,
              },
              behaviors: [{ isDefaultBehavior: true }]
            }
          ]
    })

    bucket.grantRead(cloudFrontOAI.grantPrincipal);
  }
}
