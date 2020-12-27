import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PortfolioInfrastructure from '../lib/portfolio_infrastructure-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PortfolioInfrastructure.PortfolioInfrastructureStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
