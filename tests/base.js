module.exports = {
  test: function( browser ) {
    var screenshotsPath = 'screenshots/';
    var siteUrl = 'http://pdwapi.herokuapp.com/kpop';

    //connect site
    browser
      .url( siteUrl )
      .waitForElementVisible('iframe', 3000);

    browser.expect.element( 'iframe' ).to.be.present;

    browser.expect.element( 'iframe' ).to.have.attribute( 'src' );

    browser.expect.element( 'iframe' ).to.have.attribute( 'src' ).which.matches( /youtube/ );

    browser.expect.element( 'ol li' ).to.be.present;

    browser.expect.element( 'ol li:nth-child(100)' ).to.be.present;

    browser.resizeWindow( 1280, 800 );

    browser.saveScreenshot( screenshotsPath + '/1280.png' );

    browser.resizeWindow( 320, 800 );

    browser.saveScreenshot( screenshotsPath + '/300.png' );

    browser
      .click( 'ol li:nth-child(1)' )
      .waitForElementVisible('ol li:nth-child(1) iframe', 3000)
      .saveScreenshot( screenshotsPath + '/select.png' );

      browser
        .click( 'ol li:nth-child(1) iframe' )
        .saveScreenshot( screenshotsPath + '/run.png' );

    browser.end()
  }
}
