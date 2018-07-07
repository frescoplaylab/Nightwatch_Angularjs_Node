module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .waitForElementPresent('div.container-todos', browser.globals.development.time_out)
      .setValue('mat-card.big-input input', ['I solemnly promise i shall not cheat!', browser.Keys.ENTER])
      .setValue('mat-card.big-input input', ['Or may be ... just may be fork a little', browser.Keys.ENTER])
  },

  'Delete Task' : function (browser) {
    browser
      .pause(browser.globals.development.time_out)
      .click('mat-list.mat-list app-todo-item:last-of-type button.deleteButton')
      .pause(browser.globals.development.time_out)
      .assert.containsText('mat-list.mat-list app-todo-item:last-of-type .task-area form', 'I solemnly promise i shall not cheat!')
      .end();
  }
};
