import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfQuestions = 3;

const playGame = (generateStepFunc) => {
  const playStep = (counter) => {
    if (counter >= numberOfQuestions) {
      return true;
    }

    const questionAndAnswer = generateStepFunc();

    const question = car(questionAndAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(questionAndAnswer);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');

    return playStep(counter + 1);
  };

  return playStep(0);
};

export default (description, generateStepFunc) => {
  console.log('Welcome to the Brain Games!');

  console.log(description);

  const name = readlineSync.question('\nWhat is your name? ');

  console.log(`Hello, ${name}!`);

  const gameResult = playGame(generateStepFunc);

  if (gameResult) {
    console.log(`\nCongratulations, ${name}!`);
  } else {
    console.log(`\nLet's try again, ${name}!`);
  }
};
