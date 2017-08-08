/* eslint-env node */
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',  # This will differ depending on what you named YOUR app.
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: 'AIzaSyA3K3qkSejZSNkwa5d-21Cp5hASmHL0YCA',
      authDomain: 'super-rentals-92487.firebaseapp.com',
      databaseURL: 'https://super-rentals-92487.firebaseio.com',
      storageBucket: 'super-rentals-92487.appspot.com'
    },

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
