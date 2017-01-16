/**
  @tags [es5, es6, typescript, ect.]
*/

const list = [{
  tags: ['es5'],
  title: 'What value is returned from the following statement?',
  code: `
    function f() { return this }
    f.bind(6).bind(9)()
  `,
  answers: [
    {answer: '6', isTrue: true},
    {answer: '9'},
    {answer: '15'},
    {answer: 'Error'}
  ]
},
{
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    (function() {
      var a = b = 3;
    })();

    console.log('a defined? ' + (typeof a !== 'undefined'));
    console.log('b defined? ' + (typeof b !== 'undefined'));
  `,
  answers: [
    {answer: 'false\n true', isTrue: true},
    {answer: 'true\n false'},
    {answer: 'true\n true'},
    {answer: 'false\n false'}
  ]
}];

module.exports = list;