export default function getQuestionAndAnswerCalculate() {
 let firstNum = Math.floor(Math.random() * 100);
 let secondNum = Math.floor(Math.random() * 100);

 const operations = ['+', '-', '*'];
 const randomIndex = Math.floor(Math.random() * operations.length);
 const operation = operations[randomIndex];

 let answer;

 switch(operation) {
   case '+':
   answer = firstNum + secondNum;
   break;
   case '-':
   answer = firstNum - secondNum;
   break;
   case '*':
   answer = firstNum * secondNum;
   break;
}
 const question = `What is the result of expression?\nQuestion: ${firstNum} ${operation} ${secondNum}`;
 return { question, answer: String(answer) };
}
