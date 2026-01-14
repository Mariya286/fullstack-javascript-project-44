import randomNumber from '../helper.js'

const getRandomLength = () => Math.floor(Math.random() * 6) + 5
const getRandomIndex = length => Math.floor(Math.random() * length)

const progressGame = () => {
  const description = `What number is missing in the progression?`

  const generateRound = () => {
    let start = randomNumber()
    let step = randomNumber()
    let length = getRandomLength()
    let hiddenIndex = getRandomIndex(length)

    let arr = []
    let answer

    for (let i = 0; i < length; i++) {
      let currentEl = start + i * step

      if (i === hiddenIndex) {
        answer = String(currentEl)
        arr.push('..')
      }
      else {
        arr.push(currentEl)
      }
    }
    const question = arr.join(' ')
    return { question, answer }
  }

  return { description, getRoundData: generateRound }
}

export default progressGame
