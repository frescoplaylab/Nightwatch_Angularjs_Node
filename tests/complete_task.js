module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .waitForElementPresent('div.container-todos', browser.globals.development.time_out)
      .setValue('mat-card.big-input input', 'Make a fresh pot of coffee')
      .click('mat-card.big-input button')
  },

  'Complete Task' : function (browser) {
    browser
      .pause(browser.globals.development.time_out)
      .click('mat-list.mat-list app-todo-item:last-of-type mat-checkbox')
      .pause(browser.globals.development.time_out)
      .assert.cssClassPresent("mat-list.mat-list app-todo-item:last-of-type mat-checkbox", "mat-checkbox-checked")
      .assert.cssProperty('mat-list.mat-list app-todo-item:last-of-type .task-area del', 'text-decoration', 'line-through solid rgba(0, 0, 0, 0.87)')
      .assert.attributeEquals('mat-list.mat-list app-todo-item:last-of-type button.editButton' , "disabled", "true")
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.deleteButton' , browser.globals.development.time_out)
      .end();
  }
};
