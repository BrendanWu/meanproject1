require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello('brendan');
var answer = question.ask("What is meaning of life");
console.log(answer);
goodbye();