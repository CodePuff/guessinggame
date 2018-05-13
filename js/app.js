'use strict';

var userPoints = 0;

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);

alert('Hey ' + user + ', Let\'s play a game to help you get to know me.');

var answer1 = prompt(user + ', please answer yes or no. Is my favorite Football team the Dallas Cowboys?').toLowerCase();

console.log(' The user answered question1' + answer1);

if(answer1 === 'yes' || answer1 === 'y') {
  userPoints++;
} else {
  alert ('Sorry its Cowboys for life!');
}

alert (user + ' you have ' + userPoints + ' points!');

var answer2 = prompt(user + ', Have I ever worked for Google?').toLowerCase();

console.log(' The user answered question2' + answer2);

if(answer2 === 'no' || answer2 === 'n') {
  userPoints++;
} else {
  alert ('Nope! I have never worked for Google but I did work for Apple!');
}

alert (user + ' you have ' + userPoints + ' points');

var answer3 = prompt(user + ', Did I grow up in Washington?').toLowerCase();

console.log(' The user answered questions3' + answer3);

if(answer3 === 'no' || answer3 === 'n') {
  userPoints++;
} else { 
  alert ('Actually I am a Cali girl!');
}

alert (user + ' you have ' + userPoints + ' points');

var answer4 = prompt(user + ', Am I a vegan?').toLowerCase();

console.log(' The user answered question4' + answer4);

if (answer4 === 'no' || answer4 === 'n') {
  userPoints++;
} else {
  alert ('That is kind of a trick question because I am trying to transition to vegan!');
}

alert (user + ' you have ' + userPoints + ' points ');

var answer5 = prompt(user + ', Is my favorite game The Sims').toLowerCase();

console.log(' The user answered question5' + answer5);

if(answer5 === 'yes' || answer5 === 'y') {
  userPoints++;
} else {
  alert (' Actually, I can spend all weekend playing The Sims.');
}

alert (user + ' you have ' + userPoints + ' points ');

var day = 2;

for(var i=0; i < 4; i++) {

  var dayAnswer = prompt('What day of the month was I born? Enter a number between 1 - 31');
  if(dayAnswer === '2'){
    userPoints++;
    alert('That is correct, I was born on October 2. ' + user + ' you now have ' + userPoints + ' points!');
    break;
  } else if(dayAnswer > 2){
    alert('Nope, that is too high');
  } else if (dayAnswer < 2){
    alert('Too low, lets try again.');
  }
}

var states = ['california', 'washington', 'nevada', 'oregon'];
var counter = 0;
var rightAnswer;

while (counter < 7) {
  var stateAnswer = prompt(' I have only visited four states in the United States. Can you guess one of the states?').toLowerCase();
  for(var i = 0; i < states.length; i++){
    if(stateAnswer === states[i]){
      rightAnswer = true;
    }
  }
  if(!rightAnswer){
    alert('Nope, nice guess!');
    counter++;
  } else {
    alert('Great guess!');
    userPoints++;
    counter+7;
  }
}

alert(user + ' You finished with a total of ' + userPoints + ' points! Thanks for playing. Now feel free to read more about me.')

