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
  title: 'What will the code below output to the console?',
  code: `
    console.log(typeof NaN === 'number');
    console.log(NaN === NaN);
    console.log('abc' / 3);
    console.log('A' - 'B' + '2');
  `,
  answers: [
    {answer: 'true\n false\n NaN\n "NaN2"', isTrue: true},
    {answer: 'false\n true\n NaN\n NaN'},
    {answer: 'true\n true\n 1\n NaN'},
    {answer: 'false\n false\n NaN\n "NaN2"'}
  ]
}];

module.exports = list;