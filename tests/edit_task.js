module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .waitForElementPresent('div.container-todos', browser.globals.development.time_out)
      .setValue('mat-card.big-input input', ['Setup Docker', browser.Keys.ENTER])
  },

  'Edit Task' : function (browser) {
    browser
      .pause(browser.globals.development.time_out)
      .click('mat-list.mat-list app-todo-item:last-of-type button.editButton')
      .waitForElementPresent('mat-list.mat-list app-todo-item:last-of-type .task-area .mat-form-field-infix input', browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.saveButton' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.cancelButton' , browser.globals.development.time_out)
      .pause(browser.globals.development.time_out)
      .click('mat-list.mat-list app-todo-item:last-of-type button.cancelButton')
      .assert.elementNotPresent('mat-list.mat-list app-todo-item:last-of-type .task-area .mat-form-field-infix input')
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.editButton' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.deleteButton' , browser.globals.development.time_out)
      .assert.containsText('mat-list.mat-list app-todo-item:last-of-type .task-area form', 'Setup Docker')
  },

  'Update Task' : function (browser) {
    browser
      .click('mat-list.mat-list app-todo-item:last-of-type button.editButton')
      .clearValue('mat-list.mat-list app-todo-item:last-of-type .task-area .mat-form-field-infix input')
      .setValue('mat-list.mat-list app-todo-item:last-of-type .task-area .mat-form-field-infix input', ['Dockerize the application', browser.Keys.ENTER])
      .pause(browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.editButton' , browser.globals.development.time_out)
      .waitForElementVisible('mat-list.mat-list app-todo-item:last-of-type button.deleteButton' , browser.globals.development.time_out)
      .assert.elementNotPresent('mat-list.mat-list app-todo-item:last-of-type button.saveButton')
      .assert.containsText('mat-list.mat-list app-todo-item:last-of-type .task-area form', 'Dockerize the application')
      .end();
  }
};
