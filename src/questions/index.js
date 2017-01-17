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
  title: 'What will be the output of the following code?',
  code: `
    for(var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000);
    }
  `,
  answers: [
    {answer: '5\n 5\n 5\n 5\n 5', isTrue: true},
    {answer: '0\n 1\n 2\n 3\n 4'},
    {answer: '0\n 5\n 5\n 5\n 5'},
    {answer: '4\n 3\n 2\n 1\n 0'}
  ]
}];

module.exports = list;