

const styleOfCode = {
  'string': {pattern: /('.*?'|".*?")/g, span: `<span class="string">$1</span>`},
  'object': {pattern: /((?!\d+)[a-z0-9\$\_]+(?=\.)(?!\d+))/gi, span: `<span class="object">$1</span>`},
  'conditionsLoops': {pattern: /(if|else|switch|case|break|continue|return|forEach|for|\sof\s|while|do\s?\{)/g, span: `<span class="conditionsLoops">$1</span>`},
  'funcs': {pattern: /((?!\d+)[a-z0-9\$\_]+(?=\(|\s\=\s\((?!function)))/gmi, span: `<span class="funcs">$1</span>`},
  'props': {pattern: /([a-z0-9\$\_]+(?=\:))/gim, span: `<span class="props">$1</span>`}, 
  'keyWords': {pattern: /(var|let|const|delete|typeof|arguments|new|null|undefined|function|true|false|this|class(?=\s\{|\s\w+\s\{))/g, span: `<span class="keyWords">$1</span>`},
};

function setStyleForCode(questions, styles = styleOfCode) {
  const keys = Object.keys(styles);
  return questions.map((question) => {
    for(let prop of keys) {
      if(question.code) {
        question.code = question.code.replace(styles[prop].pattern, styles[prop].span);
      } else {
        break;
      }
    }
    //console.log(question.code);
    return question;
  });
}

export default setStyleForCode;
