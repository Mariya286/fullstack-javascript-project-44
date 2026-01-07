const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const evenGame = () => {
 const description = 'Answer "yes" if the number is even, otherwise answer "no".';

 const getRoundData = () => {
 const number = randomNumber();
 const answer = number % 2 === 0 ? 'yes' : 'no';
 return {
  question: String(number),
  answer
};
};

return { description, getRoundData };
};

export default evenGame;
