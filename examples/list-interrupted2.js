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
}).then(function(answers) {
  console.log(answers);
}).catch(function() {
  console.log('catching \"interrupted\" event');
});

setTimeout(function() {
  // interrupt after 1 second
  inquirer.interruptPrompt(() => { console.log('interrupted callback!!!'); });

  // make sure we don't have side effects when interrupted for the second time
  // setTimeout(function() {
  //   inquirer.interruptPrompt();
  // }, 1000);
}, 1000);

setTimeout(function() {

  inquirer.prompt({
    type: 'list',
    choices: ['aa', 'bb', 'cc'],
    name: 'test',
    message: 'Your choice? (another list)'
  }).then(function(answers) {
    console.log(answers);
  }).catch(function() {
    console.log('catching \"interrupted\" event');
  });

  setTimeout(function() {
    inquirer.interruptPrompt();
  }, 1000);
}, 2000);


setTimeout(function() {

  inquirer.prompt({
    type: 'list',
    choices: ['aa', 'bb', 'cc'],
    name: 'test',
    message: 'Your choice? (third list)'
  }).then(function(answers) {
    console.log(answers);
  });

}, 4000);
