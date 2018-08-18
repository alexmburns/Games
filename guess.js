var readlineSync = require('readline-sync');

const name = readlineSync.question('Hello! What is your name?\n');
console.log('Well, ' + name + ', I am thinking of  number between 1 and 20.')

const number = Math.floor(Math.random() * 20)

let guessesTaken = 0

while (guessesTaken++ < 6) {

  const guess = readlineSync.question('Take a guess\n');

  if (guess < number) {
    console.log('Too low!')
  } else if (guess > number) {
    console.log('Too high!')
  } else {
    console.log('Good job, ' + name + '! You guessed my number in ' + guessesTaken)
    return
  }

}

console.log('Nope. I was thinking of ' + number)