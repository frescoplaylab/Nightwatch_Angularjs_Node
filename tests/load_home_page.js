// YOU SHALL NOT PASS TILL
// These assertions/tests have been writen in this test_suite.
// 1. Check for title to be 'Todo'
// 2. Check for heading to contain "My Todo App"
// 3. Check background to be purple in color
// 4. Check for the input box to enter text
// 5. Check for button to add new tasks


module.exports = {
  'Test Loading HomePage' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      // write your
      // code here
      .end();
  }
};
