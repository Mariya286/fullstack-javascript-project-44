import randomNumber from '../helper.js'

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.'

  const getRoundData = () => {
    const a = randomNumber()
    const b = randomNumber()
    return {
      question: `${a} ${b}`,
      answer: String(gcd(a, b)),
    }
  }

  return { description, getRoundData }
}

export default gcdGame
