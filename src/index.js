import readlineSync from 'readline-sync'
import { greeting } from '../src/cli.js'

export const askName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const playGame = (game) => {
  greeting()
  const name = askName()
  console.log(game.description)

  const roundCount = 3
  for (let roundStep = 0; roundStep < roundCount; roundStep++) {
    const round = game.getRoundData()
    console.log(`Question: ${round.question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === round.answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default playGame
