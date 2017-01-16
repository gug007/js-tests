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

    console.log(a, b);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: '3\n 3'},
    {answer: 'undefined\n 3'},
    {answer: '3\n undefined'}
  ]
}];

module.exports = list;