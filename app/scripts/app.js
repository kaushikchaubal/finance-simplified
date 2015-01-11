'use strict';

angular
  .module('finance-simplified', [
    'ngRoute',
    'main',
    'categories'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // ----------- Landing Page -----------
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      // ----------- Categories page -----------
      .when('/categories', {
        templateUrl: 'app/views/categories.html',
        controller: 'CategoriesCtrl'
      })

      // ----------- Overview section -----------
      .when('/overview', {
        templateUrl: 'app/views/overview/overview.html'
      })
      .when('/overview/purpose-and-functioning-of-the-global-financial-markets', {
        templateUrl: 'app/views/overview/purpose-and-functioning-of-the-global-financial-markets.html'
      })
      .when('/overview/primary-vs-secondary-markets', {
        templateUrl: 'app/views/overview/primary-vs-secondary-markets.html'
      })
      .when('/overview/review-of-the-different-financial-markets', {
        templateUrl: 'app/views/overview/review-of-the-different-financial-markets.html'
      })
      .when('/overview/major-participants-in-the-market', {
        templateUrl: 'app/views/overview/major-participants-in-the-market.html'
      })
      .when('/overview/role-of-regulatory-authorities', {
        templateUrl: 'app/views/overview/role-of-regulatory-authorities.html'
      })
      .when('/overview/post-2008-developments', {
        templateUrl: 'app/views/overview/post-2008-developments.html'
      })

      // ----------- Financial Statements section -----------
      .when('/financial-statements', {
        templateUrl: 'app/views/financial-statements/financial-statements.html'
      })
      .when('/financial-statements/intial-thoughts', {
        templateUrl: 'app/views/financial-statements/intial-thoughts.html'
      })
      .when('/financial-statements/review-of-the-key-financial-statments', {
        templateUrl: 'app/views/financial-statements/review-of-the-key-financial-statments.html'
      })
      .when('/financial-statements/key-financial-quantities', {
        templateUrl: 'app/views/financial-statements/key-financial-quantities.html'
      })
      .when('/financial-statements/ratio-analysis', {
        templateUrl: 'app/views/financial-statements/ratio-analysis.html'
      })

      // ----------- Equities section -----------
      .when('/equities', {
              templateUrl: 'app/views/equities/equities.html'
      })
      .when('/equities/review-of-the-global-equity-markets', {
              templateUrl: 'app/views/equities/review-of-the-global-equity-markets.html'
      })
      .when('/equities/review-of-equity-products', {
              templateUrl: 'app/views/equities/review-of-equity-products.html'
      })
      .when('/equities/why-own-shares', {
              templateUrl: 'app/views/equities/why-own-shares.html'
      })
      .when('/equities/introduction-to-etfs', {
              templateUrl: 'app/views/equities/introduction-to-etfs.html'
      })
      .when('/equities/equity-valuation-and-pricing', {
              templateUrl: 'app/views/equities/equity-valuation-and-pricing.html'
      })
      .when('/equities/risk-management-of-equity-products', {
              templateUrl: 'app/views/equities/risk-management-of-equity-products.html'
      })
      .when('/equities/trading-strategies', {
              templateUrl: 'app/views/equities/trading-strategies.html'
      })

      // ----------- Fixed Income section -----------
      .when('/fixed-income', {
              templateUrl: 'app/views/fixed-income/fixed-income.html'
      })
      .when('/fixed-income/introduction-to-bonds', {
              templateUrl: 'app/views/fixed-income/introduction-to-bonds.html'
      })
      .when('/fixed-income/bond-pricing', {
              templateUrl: 'app/views/fixed-income/bond-pricing.html'
      })
      .when('/fixed-income/review-of-the-bond-markets', {
              templateUrl: 'app/views/fixed-income/review-of-the-bond-markets.html'
      })
      .when('/fixed-income/duration-and-convexity', {
              templateUrl: 'app/views/fixed-income/duration-and-convexity.html'
      })

      // ----------- Macroeconomics section -----------
      .when('/macroeconomics', {
              templateUrl: 'app/views/macroeconomics/macroeconomics.html'
      })
      .when('/macroeconomics/review-of-macroeconomic-principles', {
              templateUrl: 'app/views/macroeconomics/review-of-macroeconomic-principles.html'
      })
      .when('/macroeconomics/key-macroeconomic-measures', {
              templateUrl: 'app/views/macroeconomics/key-macroeconomic-measures.html'
      })
      .when('/macroeconomics/supply-and-demand', {
              templateUrl: 'app/views/macroeconomics/supply-and-demand.html'
      })
      .when('/macroeconomics/economic-growth-and-economic-cycles', {
              templateUrl: 'app/views/macroeconomics/economic-growth-and-economic-cycles.html'
      })
      .when('/macroeconomics/inflation', {
              templateUrl: 'app/views/macroeconomics/inflation.html'
      })
      .when('/macroeconomics/monetary-policy', {
              templateUrl: 'app/views/macroeconomics/monetary-policy.html'
      })
      .when('/macroeconomics/fiscal-policy', {
              templateUrl: 'app/views/macroeconomics/fiscal-policy.html'
      })

      // ----------- Portfolio Management section -----------
      .when('/portfolio-management', {
              templateUrl: 'app/views/portfolio-management/portfolio-management.html'
      })
      .when('/portfolio-management/what-is-a-portfolio', {
              templateUrl: 'app/views/portfolio-management/what-is-a-portfolio.html'
      })
      .when('/portfolio-management/what-is-a-portfolio-management', {
              templateUrl: 'app/views/portfolio-management/what-is-a-portfolio-management.html'
      })
      .when('/portfolio-management/portfolio-design-and-management-strategies', {
              templateUrl: 'app/views/portfolio-management/portfolio-design-and-management-strategies.html'
      })
      .when('/portfolio-management/modern-portfolio-theory-concepts', {
              templateUrl: 'app/views/portfolio-management/modern-portfolio-theory-concepts.html'
      })
      .when('/portfolio-management/measuring-portfolio-performance', {
              templateUrl: 'app/views/portfolio-management/measuring-portfolio-performance.html'
      })

      // ----------- Default section -----------
      .otherwise({
        redirectTo: '/'
      });
  });
