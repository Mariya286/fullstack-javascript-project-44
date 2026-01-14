import randomNumber from '../helper.js'

function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
};

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const getRoundData = () => {
    const number = randomNumber()
    const answer = isPrime(number) ? 'yes' : 'no'
    return {
      question: String(number),
      answer,
    }
  }

  return { description, getRoundData }
}

export default primeGame
