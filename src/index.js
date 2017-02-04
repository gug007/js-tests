

import questions from './questions';

function newElm(tag, props = {}, children = '') {
  let elm = document.createElement(tag);
  elm = Object.assign(elm, props);
  elm.innerHTML = children;
  return elm;
}

const addChild = (target, child) => target.appendChild(child);

function createQuestion(questions, index = 0, userAnswers = [], userAnswer = '') {
  const div = newElm('div', {id: 'container'});
  
  const preTitle = addChild(div, newElm('pre'));
  addChild(preTitle, newElm('h3', {id: 'title'}, questions[index].title));

  const pre = addChild(div, newElm('pre'));
  addChild(pre, newElm('code', undefined, questions[index].code));

  const section = addChild(div, newElm('section'));

  const button = newElm('button', {disabled: true}, 'Next');
  
  const randomAnswers = getRandomArr(questions[index].answers, questions[index].answers.length);
  
  randomAnswers.forEach((v, i) => {
    const input = newElm('input', {id: (v.isTrue) ? v.isTrue : i, type: 'radio', name: 'answer', value: v.answer});
    input.onchange = () => {
      if(userAnswer) { userAnswers.length = userAnswers.length - 1; }
      const correctAnswer = section.querySelector('#true').value;
      userAnswer = section.querySelector('input:checked').value;
      userAnswers.push(userAnswer === correctAnswer);
      button.disabled = false;
    };
    const label = newElm('label', undefined, v.answer);
    label.setAttribute('for', (v.isTrue) ? v.isTrue : i);    
    
    addChild(section, input);
    addChild(section, label);
    addChild(section, newElm('br'));
  });

  addChild(div, button);

  button.onclick = () => {
    root.removeChild(div);
    if(index < questions.length - 1) {
      createQuestion(questions, ++index, userAnswers);
    } else {
      showResult(userAnswers);
    }
  };

  addChild(root, div);
}

function showResult(userAnswers) {
  console.log(userAnswers);
  const numOfCorrAns = userAnswers.filter((v) => v === true).length;
  const percentages = numOfCorrAns / userAnswers.length * 100;
  const scaleFive = 5 * percentages / 100;
  const result = `You have answered correctly ${numOfCorrAns} questions! (${percentages}%) or ${scaleFive} - 5:)`

  const div = newElm('div', {id: 'container'}, result);
  addChild(root, div);
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
    randomData.push(arr[randomIndex]);
  }
  
  return randomData;
}

createQuestion(getRandomArr(questions, 5));


/*const elm = (type, props) => {
  const element = document.createElement(type);
  
  if(Array.isArray(props.body)) {
    props.body.forEach((e) => element.appendChild(e));
  } else if(props.body instanceof HTMLElement) {
    element.appendChild(props.body);
  }
  
  delete props.body;
  Object.assign(element, props);
  return element;
};

const div = elm('div', {
  body: [
    elm('div', {
      body: elm('label', {value: '123'})
    }),
    elm('input', {type: 'radio', name: 'answer'}),
    elm('input', {type: 'radio', name: 'answer'}),
    elm('input', {type: 'radio', name: 'answer'}),
    elm('input', {type: 'radio', name: 'answer'})
  ]
});

root.appendChild(div);
*/