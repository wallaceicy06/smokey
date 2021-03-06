/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'connect-src': "'self' https://netid.rice.edu",
      'script-src': "'self' https://netid.rice.edu"
    },
    modulePrefix: 'smokey',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token'
    },
    'simple-auth-token': {
      serverTokenEndpoint: '/auth/',
      identificationField: 'ticket',
      tokenPropertyName: 'token',
      authorizationPrefix: 'Bearer ',
      authorizationHeaderName: 'Authorization',
      headers: {}
    },
    ipAddress: "localhost:4200",

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
