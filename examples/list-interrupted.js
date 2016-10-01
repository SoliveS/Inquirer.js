/**
 * Interrupted list example
 */

'use strict';
var inquirer = require('..');

inquirer.prompt({
  type: 'list',
  choices: ['aa', 'bb', 'cc'],
  name: 'test',
  message: 'Your choice?'
});

setTimeout(function() {
  // interrupt after 1 second
  inquirer.interruptPrompt();

  // make sure we don't have side effects when interrupted for the second time
  setTimeout(function() {
    inquirer.interruptPrompt();
  }, 1000);
}, 1000);
