#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PortfolioInfrastructureStack } from '../lib/portfolio_infrastructure-stack';

const app = new cdk.App();
const props = {
  env: {
    account: '108035832044',
    region: 'us-west-2'
  }
}
new PortfolioInfrastructureStack(app, 'PortfolioInfrastructureStack', props);
