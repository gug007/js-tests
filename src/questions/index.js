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
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    (function() {
      var a = b = 3;
    })();

    console.log(typeof a, typeof b);
  `,
  answers: [
    {answer: 'undefined\n number', isTrue: true},
    {answer: 'number\n number'},
    {answer: 'number\n undefined'},
    {answer: 'undefined\n undefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What would the following lines of code output to the console?',
  code: `
    console.log(0 || 1);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1 && 2);
  `,
  answers: [
    {answer: '1\n 1\n 0\n 2', isTrue: true},
    {answer: '0\n 2\n 1\n 1'},
    {answer: '1\n 1\n 0\n true'},
    {answer: '1\n 2\n true\n 1'}
  ]
}];

module.exports = list;