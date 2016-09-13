import environment from './environment';
import 'bootstrap';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-dialog', (settings) => {
        settings.lock = false;
        settings.centerHorizontalOnly = true;
        settings.centerVerticalOnly = true;
        settings.startingZIndex = 5;
    });
    
  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
