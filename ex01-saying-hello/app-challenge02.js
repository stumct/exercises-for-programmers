var name = window.prompt('What is your name?');

var randomNumber = Math.floor(Math.random() * 5) + 1
var greeting;
switch (randomNumber) {
  case 1:
    greeting = "Hello, " + name + ", nice to meet you!"
    break;
  case 2:
    greeting = "Howdy, " + name + ", pleasure to see you!"
    break;
  case 3:
    greeting = "Hi, " + name + ", how are you?"
    break;
  case 4:
    greeting = "Hey, " + name + ", how are you doing today?"
    break;
  case 5:
    greeting = "Greetings, " + name + "!"
    break;
}

window.alert(greeting);
