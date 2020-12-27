#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PortfolioInfrastructureStack } from '../lib/portfolio_infrastructure-stack';

const app = new cdk.App();
new PortfolioInfrastructureStack(app, 'PortfolioInfrastructureStack');
