import readlineSync from 'readline-sync';

const playGame = (game, name) => {

 console.log(game.description);

 for (let i = 0; i < 3; i++) {
 const round = game.getRoundData();
 console.log(`Question: ${round.question}`);
 const userAnswer = readlineSync.question('Your answer: ');

 if (userAnswer === round.answer) {
 console.log('Correct!');
 } else {
 console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.answer}'.`);
 console.log(`Let's try again, ${name}!`);
 return;
}
}
 console.log(`Congratulations, ${name}!`);
}

export default playGame;

