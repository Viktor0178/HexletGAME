const getNumber = () => Math.round(Math.random() * 100);
// const isEven = (number) => !(number % 2);
// return number % 2 === 0 ? true : false; first variant
// if (number % 2 === 0) { second variant
//   return true;
// } else {
//     return false;
// }

const playRound = () => {
  let firtsNum = getNumber();
  let secondNum = getNumber();
  const correctAnswer = firtsNum + secondNum;
  const userAnswer = Number(prompt(`Чему равняется сумма ${firtsNum} и ${secondNum} Пожалуйста, ответьте`));


  let usAnsw = Number(userAnswer);

  console.log((firtsNum + secondNum), correctAnswer);
  console.log(usAnsw);

  if (usAnsw === correctAnswer) {
    alert('Ответ верный!');
    return true;
  } else {
    alert('Ответ неверный!');
    alert('Вы проиграли!');
    return false;
  }

};

const playGame = () => {

  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  alert('Вы выиграли!');
}


//const button = document.querySelector('game');
//button.addEventListener('game', playGame);


