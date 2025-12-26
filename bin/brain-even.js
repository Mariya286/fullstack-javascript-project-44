#!/usr/bin/env node

import readlineSync from 'readline-sync'
import firstGame from '../src/cli.js'

const name = firstGame()
let winner = true

console.log('Answer "yes" if  the number is even, otherwise answer "no".')
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100)
  console.log('Question: ' + number)

  const answer = readlineSync.question('Your anser: ')
  const isEven = number % 2 === 0
  const correctAnswer = isEven ? 'yes' : 'no'

  if (answer === correctAnswer) {
    console.log('Correct')
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${name}`)
    winner = false
    break
  }
}

if (winner) {
  console.log(`Congratulations, ${name}!`)
}
