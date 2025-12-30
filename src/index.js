import readlineSync from 'readline-sync'
import firstGame from '../src/cli.js'

function playGame(gameFunction) {
 console.log('Welcome to the Brain Games!');
 const name = readlineSync.question('May I have your name? ');
 console.log(`Hello, ${name}!`);

 for (let i = 0; i < 3; i++) {
 const { question, answer } = gameFunction();
 console.log('Question:', question);
 const userAnswer = readlineSync.question('Your answer: ');

 if (userAnswer === answer) {
 console.log('Correct!');
 } else {
 console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
 console.log(`Let's try again, ${name}!`);
 return;
}
}
 console.log(`Congratulations, ${name}!`);
}

export default playGame;

