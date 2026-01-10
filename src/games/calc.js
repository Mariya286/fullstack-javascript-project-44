const randomNumber = () => Math.floor(Math.random() * 100) + 1
const operators = ['+', '-', '*']

const calcGame = () => {
  const description = 'What is the result of the expression?'

  const getRoundData = () => {
    const a = randomNumber()
    const b = randomNumber()
    const oper = operators[Math.floor(Math.random() * operators.length)]

    let answer
    switch (oper) {
      case '+': answer = a + b; break
      case '-': answer = a - b; break
      case '*': answer = a * b; break
    }

    return {
      question: `${a} ${oper} ${b}`,
      answer: String(answer),
    }
  }

  return { description, getRoundData }
}

export default calcGame
