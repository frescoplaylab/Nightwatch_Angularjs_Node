module.exports = {
  'Load HomePage' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('mat-card.big-input input', browser.globals.development.time_out)
      .waitForElementVisible('mat-card.big-input button', browser.globals.development.time_out)
      .waitForElementPresent('div.container-todos', browser.globals.development.time_out)
  },

  'Test Add Task On Enter' : function (browser) {
    browser
      .waitForElementVisible('mat-list.mat-list', browser.globals.development.time_out)
      .setValue('mat-card.big-input input', ['Clean up code of React App', browser.Keys.ENTER])
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type mat-checkbox' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type .task-area' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.editButton' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.deleteButton' , browser.globals.development.time_out)
      .assert.containsText('mat-list.mat-list app-todo-item:last-of-type .task-area form', 'Clean up code of React App')
      .assert.value('mat-card.big-input input', "")
  },

  'Test Add Task Via Button' : function (browser) {
    browser
      .setValue('mat-card.big-input input', 'Fix code of Django App')
      .click('mat-card.big-input button')
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type mat-checkbox' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type .task-area' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.editButton' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.deleteButton' , browser.globals.development.time_out)
      .assert.containsText('mat-list.mat-list app-todo-item:last-of-type .task-area form', 'Fix code of Django App')
      .assert.value('mat-card.big-input input', "")
      .saveScreenshot('./reports/saved_screenshot.png')
      .end();
  }
};
