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
  title: 'What will the following code output to the console?',
  code: `
    var spy = {
      _name: 'James Bond',
      getSecretName: function() {
        return this._name;
      }
    };

    var stoleSecretName = spy.getSecretName;

    console.log(stoleSecretName(), spy.getSecretName());
  `,
  answers: [
    {answer: 'undefined\n "James Bond"', isTrue: true},
    {answer: '"James Bond"\n "James Bond"'},
    {answer: 'undefined\n undefined'},
    {answer: '"James Bond"\n undefined'}
  ]
}];

module.exports = list;