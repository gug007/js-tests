

import questions from './questions';
import setStyleForCode from './styles-for-code/codeStyle';

const NUM_OF_QUESTIONS = 10;
const TIMER = 60;

function newElm(tag, props = {}, children = '') {
  let elm = document.createElement(tag);
  Object.assign(elm, props);
  elm.innerHTML = children;
  return elm;
}

const addChild = (target, child) => target.appendChild(child);

function createQuestion(questions, timer = TIMER, index = 0, history = [], timeSum = 0) {
  const div = newElm('div', {id: 'container'});
  
  addChild(div, newElm('h3', {id: 'title'}, questions[index].title));

  const pre = newElm('pre', {}, questions[index].code);
  pre.style = (questions[index].code.includes('span')) ? `background-color: #424242; color: #FFFFFF` : '';
  addChild(div, pre);
  
  const section = addChild(div, newElm('section'));
  
  const button = newElm('button', {}, 'Next');
  
  const randomAnswers = getRandomArr(questions[index].answers, questions[index].answers.length);

  randomAnswers.forEach((v, i) => {
    const input = newElm('input', {id: (v.isTrue) ? v.isTrue : i, type: 'radio', name: 'answer', value: v.answer, checked: true});
    const label = newElm('label', undefined, v.answer);
    label.setAttribute('for', (v.isTrue) ? v.isTrue : i);
    
    addChild(section, input);
    addChild(section, label);
    addChild(section, newElm('br'));
  });

  const clock = newElm('div', {id: 'clock'}, '');

  let timerId = 0;

  button.onclick = () => {
    clearInterval(timerId);
    timeSum += TIMER - timer;
    history = history.concat([div]);    
    root.removeChild(clock);
    root.removeChild(div);
    if(index < questions.length - 1) {
      createQuestion(questions, timer = TIMER, ++index, history, timeSum);
    } else {
      timeSum += TIMER - timer;
      showResult(history, timeSum);
    }
  };
  
  addChild(div, button);
  addChild(root, clock);
  addChild(root, div);

  clock.innerHTML = timer;
  timerId = setInterval(() => {
    --timer;
    clock.innerHTML = timer;
    if(timer <= 0) {
      button.click();
    }
  }, 1000);
}

function showResult(history, timeSum) {
  const results = newElm('div', {id: 'results'});
  results.style = `z-index: -1`;
  let numOfCorrAns = 0; 
  
  history.forEach((elm) => {
    const section = elm.querySelector('section');
    const correctAnswer = section.querySelector('#true');
    const correctAnswerLabel = section.querySelector('label[for = "true"]');
    
    const userAnswer = section.querySelector('input:checked');
    const userAnswerLabel = section.querySelector(`label[for = "${userAnswer.id}"]`);

    if(correctAnswer.value === userAnswer.value) {
      ++numOfCorrAns;
      userAnswerLabel.style = `background-color: green`;
    } else {
      correctAnswerLabel.style = `background-color: green`;
      userAnswerLabel.style = `background-color: red`;
    }
    addChild(results, elm);
  });

  const percentages = numOfCorrAns / history.length * 100;
  const scaleFive = 5 * percentages / 100;
  const result = `
    You\'ve spent ${timeSum} sec. or ${timeSpent(timeSum)} min.
    You\'ve answered correctly ${numOfCorrAns} question(s) from ${history.length}! 
    (${percentages.toFixed(2)}%) or ${scaleFive.toFixed(2)} - 5:)

  `;
  
  const h3 = newElm('h3', {id: 'result'}, result);
  const div = newElm('div', {id: 'container'}, '');
  addChild(div, h3);

  const showResults = newElm('button', {}, 'Show results');
  showResults.onclick = () => {
    if(showResults.innerHTML === 'Show results') {
      addChild(root, results);
      showResults.innerHTML = 'Hide results';
    } else {
      root.removeChild(results);
      showResults.innerHTML = 'Show results';
    }
  }
  
  const fightAgain = newElm('button', {}, 'Fight again');
  fightAgain.onclick = () => {
    root.removeChild(div);
    root.removeChild(fightAgain);
    root.removeChild(showResults);
    if(root.querySelector('#results')) {root.removeChild(results);}
    setQuestions(NUM_OF_QUESTIONS);
  }

  addChild(root, div);
  addChild(root, fightAgain);
  addChild(root, showResults);
}

function timeSpent(timeSum = NUM_OF_QUESTIONS * TIMER) {
  const spent = ((timeSum / 60) + '').split('.');
  const minutes = spent[0];
  let seconds = (spent[1] && (Number.parseFloat(('0.' + spent[1])) * 60).toFixed() || '0');
  return minutes + '.' + ((seconds < 10) ? 0 + seconds : seconds);
}

function getRandomArr(arr, num) {
  const randomData = [];
  const history = {};
  while(randomData.length < num) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if(history[randomIndex] === randomIndex) {
      continue;
    }
    history[randomIndex] = randomIndex;
    randomData.push(Object.assign({}, arr[randomIndex]));
  }
  return randomData;
}

function setQuestions(numOfQuestions, setStyleForCode) { 
  createQuestion(
    setStyleForCode ? setStyleForCode(getRandomArr(questions, numOfQuestions)) 
                    : getRandomArr(questions, numOfQuestions)
  );
}

function init() {
  const info = newElm('h3', {}, `Total time of the test ${timeSpent()} min.`);
  const start = newElm('button', {}, 'Start test');
  start.onclick = () => {
    root.removeChild(info);
    root.removeChild(start);
    setQuestions(NUM_OF_QUESTIONS, setStyleForCode);
  }
  addChild(root, info);
  addChild(root, start);
}

window.onload = init;
