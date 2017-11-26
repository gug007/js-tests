/**
 @tags [es5, es6, ect.]
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
    {answer: 'undefined, number', isTrue: true},
    {answer: 'number, number'},
    {answer: 'number, undefined'},
    {answer: 'undefined, undefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var myObject = {
      foo: 'bar',
      func: function() {
        var self = this;
        (function() {
          console.log(this.foo, self.foo);
        }());
      }
    };

    myObject.func();
  `,
  answers: [
    {answer: 'undefined, bar', isTrue: true},
    {answer: 'bar, bar'},
    {answer: 'bar, undefined'},
    {answer: 'undefined, undefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    function foo1() {
      return {
        bar: 'hello'
      };
    }

    function foo2() {
      return
      {
        bar: 'hello'
      };
    }
    
    console.log(foo1(), foo2());
  `,
  answers: [
    {answer: '{bar: "hello"}, undefined', isTrue: true},
    {answer: '{bar: "hello"}, {bar: "hello"}'},
    {answer: 'undefined, {bar: "hello"}'},
    {answer: 'undefined, undefined'}
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
    {answer: 'true, false, NaN, "NaN2"', isTrue: true},
    {answer: 'false, true, NaN, NaN'},
    {answer: 'true, true, 1, NaN'},
    {answer: 'false, false, NaN, "NaN2"'}
  ]
}, {
  tags: ['es5'],
  title: 'In what order will the numbers 1-4 be logged to the console when the code below is executed?',
  code: `
    (function() {
      console.log(1);
      setTimeout(function() {console.log(2)}, 1000);
      setTimeout(function() {console.log(3)}, 0);
      console.log(4);
    }());
  `,
  answers: [
    {answer: '1, 4, 3, 2', isTrue: true},
    {answer: '1, 2, 3, 4'},
    {answer: '1, 3, 4, 2'},
    {answer: '1, 4, 2, 3'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var arr1 = 'john'.split('');
    var arr2 = arr1.reverse();
    var arr3 = 'jones'.split('');
    arr2.push(arr3);

    console.log(arr1.slice(-1), arr2.slice(-1));
  `,
  answers: [
    {answer: '[["j","o","n","e","s"]], [["j","o","n","e","s"]]', isTrue: true},
    {answer: '["s"], ["s"]'},
    {answer: '["j"], [["j","o","n","e","s"]]'},
    {answer: '["j"], ["s"]'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    console.log(1 + '2' + '2');
    console.log(1 + +'2' + '2');
    console.log(1 + -'1' + '2');
    console.log(+'1' + '1' + '2');
  `,
  answers: [
    {answer: '122, 32, 02, 112', isTrue: true},
    {answer: '5, 32, 2, 4'},
    {answer: '122, 122, 112, 112'},
    {answer: '32, 32, 02, 112'}
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
    {answer: '5, 5, 5, 5, 5', isTrue: true},
    {answer: '0, 1, 2, 3, 4'},
    {answer: '0, 5, 5, 5, 5'},
    {answer: '4, 3, 2, 1, 0'}
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
    {answer: 'undefined, "James Bond"', isTrue: true},
    {answer: '"James Bond", "James Bond"'},
    {answer: 'undefined, undefined'},
    {answer: '"James Bond", undefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var a = {},
        b = {key: 'b'},
        c = {key: 'c'};

    a[b] = 7;
    a[c] = 13;

    console.log(a[b]);
  `,
  answers: [
    {answer: '13', isTrue: true},
    {answer: 'undefined'},
    {answer: '7'},
    {answer: 'Error'}
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
    {answer: '1, 1, 0, 2', isTrue: true},
    {answer: '0, 2, 1, 1'},
    {answer: '1, 1, 0, true'},
    {answer: '1, 2, true, 1'}
  ]
}, {
  tags: ['es5'],
  title: 'What will be the output of the following code?',
  code: `
    var b = {a: 13};
    
    (function foo(b) {
      b = {a: 7};
    })(b);

    console.log(b);
  `,
  answers: [
    {answer: '{a: 13}', isTrue: true},
    {answer: '{b: 7}'},
    {answer: 'undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will be the output of the following code?',
  code: `
    var a = 7;
    var b = {a: 7};

    (function foo(a, b) {
      a = 13;
      b.a = 13;
    })(a, b);

    console.log(a, b);
  `,
  answers: [
    {answer: '7, {a: 13}', isTrue: true},
    {answer: '13, {a: 13}'},
    {answer: '7, {a: 7}'},
    {answer: '13, {a: 7}'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    function test() {
      console.log(a, foo());

      var a = 7;
      function foo() {
        return 13;
      }
    }

    test();
  `,
  answers: [
    {answer: 'undefined, 13', isTrue: true},
    {answer: '7, 13'},
    {answer: 'undefined, undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof undefined);
  `,
  answers: [
    {answer: 'object, object, object, undefined', isTrue: true},
    {answer: 'object, object, array, undefined'},
    {answer: 'null, object, object, undefined'},
    {answer: 'object, object, object, string'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    function Person(name) {
      this.name = name;
    }

    Person.prototype.printName = () => {
      console.log(this.name);
    }

    let person = new Person('Mike');
    person.printName();
  `,
  answers: [
    {answer: 'undefined', isTrue: true},
    {answer: 'Error'},
    {answer: 'Mike'},
    {answer: 'null'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
  var person = {
    age: 27,
  
    printAge: function() {
      console.log(this.age);
    }
  }

  setTimeout(person.printAge, 1000);
  `,
  answers: [
    {answer: 'undefined', isTrue: true},
    {answer: '27'},
    {answer: 'null'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var arr = [77, 13, 33, 15, 7, 3];
    arr.sort();

    console.log(arr);
  `,
  answers: [
    {answer: '[13, 15, 3, 33, 7, 77]', isTrue: true},
    {answer: '[3, 7, 13, 15, 33, 77]'},
    {answer: '[77, 33, 15, 13, 7, 3]'},
    {answer: '[77, 13, 33, 15, 7, 3]'}
  ]
}, {
  tags: ['es5'],
  title: 'Consider the following code. What will be printed on the console if a user clicks the first and the fourth button in the list?',
  code: `
    var nodes = document.getElementsByTagName('button');
    
    for(var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
      });
    }
  `,
  answers: [
    {answer: '4, 4', isTrue: true},
    {answer: '0, 3'},
    {answer: 'undefined, undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'How many data types are there in JS-ES5?',
  code: ``,
  answers: [
    {answer: '6', isTrue: true},
    {answer: '7'},
    {answer: '5'},
    {answer: '10'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const person = {
      age: 27
    }

    function editAge(age) {
      person = {
        age: age
      };
    }

    editAge(30);
    console.log(person.age);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: '30'},
    {answer: '27'},
    {answer: 'undefined'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    console.log(typeof foo);
    console.log(typeof bar);
    
    var foo = 7;
    let bar = 13;
  `,
  answers: [
    {answer: 'undefined, Error', isTrue: true},
    {answer: 'number, number'},
    {answer: 'undefined, undefined'},
    {answer: 'Error, Error'}
  ]
}, {
  tags: ['es6'],
  title: 'Consider the following code. What will be printed on the console?',
  code: `
    const funcs = [];

    for (var i = 0; i < 2; i++) {
      funcs.push(() => console.log(i));
    }

    const start = i;

    for (let i = start; i < 6; i++) {
      funcs.push(() => console.log(i));
    }

    funcs.forEach((func) => func());
  `,
  answers: [
    {answer: '2, 2, 2, 3, 4, 5', isTrue: true},
    {answer: '2, 2, 2, 2, 2, 2'},
    {answer: '0, 1, 2, 3, 4, 5'},
    {answer: '5, 4, 3, 2, 2, 2'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    let RegExp = '7';
    console.log(typeof window.RegExp);
    var Date = '13';    
    console.log(typeof window.Date);
    const Array = '77';
    console.log(typeof window.Array);
  `,
  answers: [
    {answer: 'function, string, function', isTrue: true},
    {answer: 'function, function, function'},
    {answer: 'string, string, string'},
    {answer: 'string, function, string'}
  ]
}, {
  tags: ['es6'],
  title: 'Consider the following code. What will be printed on the console?',
  code: `
    function mixArgs(first, second = "b") {
      console.log(first === arguments[0]);
      first = "c";
      console.log(first === arguments[0]);
    }

    mixArgs("a");

    function args(first) {
      console.log(first === arguments[0]);
      first = "c";
      console.log(first === arguments[0]);
    }

    args("a");
  `,
  answers: [
    {answer: 'true, false, true, true', isTrue: true},
    {answer: 'true, true, true, true'},
    {answer: 'true, true, true, false'},
    {answer: 'true, false, true, false'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    function add(first, second = first) {
      return first + second;
    }

    console.log(add(1));

    function multiply(first = second, second) {
      return first * second;
    }

    console.log(multiply(undefined, 1));
  `,
  answers: [
    {answer: '2, Error', isTrue: true},
    {answer: '2, 0'},
    {answer: 'Error, Error'},
    {answer: 'Error, 0'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    let foo = (a, ...rest) => {
      console.log(a, rest.length);
    }

    foo(7, 13, 33, 77);

    let bar = (a, ...rest, b) => {
      console.log(a, rest.length, b);
    }

    bar(7, 13, 33, 77);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: '7, 3, 7, 3, undefined'},
    {answer: '7, 3, 7, 2, 77'},
    {answer: '7, 3, Error'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const person = {
      name: 'Mike',
      age: 27,
  
      printName: function() {
        console.log(this.name);
      },
  
      printAge: () => {
        console.log(this.age);
      }
    };

    person.printName();
    person.printAge();
  `,
  answers: [
    {answer: 'Mike, undefined', isTrue: true},
    {answer: 'Mike, 27'},
    {answer: 'undefined, undefined'},
    {answer: 'Mike, Error'}
  ]
}, {
  tags: ['es5'],
  title: `
    Which statement(s) is/are true?

    1. Pure functions have side effects.
    2. Pure functions are usual functions.
    3. Pure functions will always produce the same output given the same inputs.
    4. Pure functions have no side effects.
    5. Pure functions will never produce the same output given the same inputs.
  `,
  code: ``,
  answers: [
    {answer: '3, 4', isTrue: true},
    {answer: '1'},
    {answer: '1, 5'},
    {answer: '2'}
  ]
}, {
  tags: ['es5'],
  title: 'Consider the following code. Which function(s) is/are higher-order?',
  code: `
    function add(x, y) {
      return x + y;
    }

    function bind(func, context) {
      return function() {
        func.apply(context, arguments);
      }
    }

    setTimeout(function() {console.log('Hello there!');}, 1000);
  `,
  answers: [
    {answer: 'Second, Third (bind, setTimeout)', isTrue: true},
    {answer: 'All three (add, bind, setTimeout)'},
    {answer: 'First, Third (add, setTimeout)'},
    {answer: 'Neither'}
  ]
}, {
  tags: ['es5'],
  title: `
    Which statement(s) is/are true?

    1. Higher-order functions are usual functions.
    2. Higher-order functions either take functions as parameters, return functions or both.
    3. Higher-order functions either take objects as parameters, return objects or both.
    4. Higher-order function is just an another term of usual function.
  `,
  code: ``,
  answers: [
    {answer: '2', isTrue: true},
    {answer: '1, 4'},
    {answer: '3'},
    {answer: 'Neither'}  
  ]
}, {
  tags: ['es5'],
  title: `
    Which statement is true?

    1. A curried function is a function that takes any number of parameters.
    2. A curried function is a function that only takes a single parameter at a time.
    3. A curried function is a function that does not take any parameters.
    4. A curried function is a function that only takes two parameters at a time.
  `,
  code: ``,
  answers: [
    {answer: '2', isTrue: true},
    {answer: '1'},
    {answer: '3'},
    {answer: '4'}
  ]
}, {
  tags: ['es5'],
  title: 'Consider the following code. Which function(s) is/are pure?',
  code: `
    var x = 7;

    function add(y) {
      return x + y;
    }

    var z = 3;

    function multiply(x, y) {
      return x * y;
    }

    function divide() {
      x = x / 2;
    }
  `,
  answers: [
    {answer: 'Second (multiply)', isTrue: true},
    {answer: 'First (add)'},
    {answer: 'Third (divide), '},
    {answer: 'Neither'}
  ]
}, {
  tags: ['es5'],
  title: 'Consider the following code. Which function(s) is/are pure?',
  code: `
    var x = 7;

    function add(y) {
      return x + y;
    }

    var z = 3;

    function multiply(x, y) {
      return x * y;
    }

    function divide() {
      x = x / 2;
    }
  `,
  answers: [
    {answer: 'Second (multiply)', isTrue: true},
    {answer: 'First (add)'},
    {answer: 'Third (divide), '},
    {answer: 'Neither'}
  ]
}, {
  tags: ['es6'],
  title: 'Consider the following code. Which function(s) is/are optimized?',
  code: `
    function factorial_1(n, p = 1) {
      if (n <= 1) {
        return 1 * p;
      } else {
        return factorial_1(n - 1, n * p);
      }
    }

    function factorial_2(n) {
      if(n <= 1) {
        return 1;
      } else {
        return n * factorial_2(n - 1);
      }
    }
  `,
  answers: [
    {answer: 'First (factorial_1)', isTrue: true},
    {answer: 'Second (factorial_2)'},
    {answer: 'Both'},
    {answer: 'Neither'}
  ]
}, {
  tags: ['es6'],
  title: 'Consider the following code. Which function(s) is/are curried?',
  code: `
    const multiply = (x) => x * 2;
    const add = (x) => (y) => x + y;
    const divide = (x) => (y) => y * y;
  `,
  answers: [
    {answer: 'Second (add)', isTrue: true},
    {answer: 'First (multiply)'},
    {answer: 'Second, Third (multiply, add)'},
    {answer: 'Third (divide)'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const person = {
      name: 'Mike',
      age: 30
    };

    let name = 'Oleg';
    let age = 27;

    {name, age} = person;

    console.log(name, age);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'Mike, 30'},
    {answer: 'Oleg, 27'},
    {answer: 'undefined, undefined'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the code below output to the console?',
  code: `
    function printPerson({name = 'Mike', age = 27}) {
      console.log(name, age);
    }

    printPerson();
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'Mike, 27'},
    {answer: 'undefined, undefined'},
    {answer: 'null, null'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code return?',
  code: `
    (function(x, f = () => x) {
      var x;
      var y = x;
      x = 2;
      return [x, y, f()];
    })(1)
  `,
  answers: [
    {answer: '[2, 1, 1]', isTrue: true},
    {answer: '[1, 1, 1]'},
    {answer: '[2, undefined, 1]'},
    {answer: '[2, 1, undefined]'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const person = (name) => {name: name}

    const p = person('Mike');
    console.log(p.name);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'Mike'},
    {answer: 'undefined'},
    {answer: 'null'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    let arr = [];
    for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) { 
      arr.push(x, y);
    }

    console.log(arr);
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: '[{x: 1}, 2, { y }, undefined]'},
    {answer: '[1, undefined, 2, undefined, 2, undefined]'},
    {answer: '[1, undefined, undefined, undefined, 2, undefined]'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    console.log(typeof \`\${{Object}}\`.prototype);
  `,
  answers: [
    {answer: 'undefined', isTrue: true},
    {answer: 'object'},
    {answer: 'function'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code return?',
  code: `
    (function() {
      let f = this ? class g { } : class h { };
      return [
        typeof f,
        typeof h
      ];
    })();
  `,
  answers: [
    {answer: '["function", "undefined"]', isTrue: true},
    {answer: '["object", "undefined"]'},
    {answer: '["undefined", "object"]'},
    {answer: '["undefined", "function"]'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code return?',
  code: `
    (function() {
      if(false) {
        let f = { g() => 1 };
      }
      return typeof f;
    })()
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'undefined'},
    {answer: 'function'},
    {answer: 'object'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code return?',
  code: `
    (function() {
      return [
        (() => this.x).bind({ x: 'inner' })(),
        (() => this.x)()
      ]
    }).call({ x: 'outer' });
  `,
  answers: [
    {answer: '["outer", "outer"]', isTrue: true},
    {answer: '["inner", "outer"'},
    {answer: '[undefined, "outer"]'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var output = (function(x) {
      delete x;
      return x;
    })(0);
  
    console.log(output);
  `,
  answers: [
    {answer: '0', isTrue: true},
    {answer: 'undefined'},
    {answer: 'null'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var Person = {
      name: 'Jack'
    }

    var person = Object.create(Person);

    delete person.name;

    console.log(person.name);
  `,
  answers: [
    {answer: 'Jack', isTrue: true},
    {answer: 'undefined'},
    {answer: 'null'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var foo = function bar() { return 12; };

    console.log(typeof bar()); 
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'function'},
    {answer: 'number'},
    {answer: 'undefined'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `  
    var salary = "1000$";

    (function () {
      console.log(salary);
      var salary = "5000$";
      console.log(salary);
    })();
  `,
  answers: [
    {answer: 'undefined, 5000$', isTrue: true},
    {answer: '1000$, 5000$'},
    {answer: '5000$, 5000$'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: `
    Which statement(s) is/are true?

    1. The closure has access to variables declared in their own scope.
    2. The closure has access to variables declared in a parent function scope.
    3. The closure has access to variables declared in the global namespace.
  `,
  code: ``,
  answers: [
    {answer: '1, 2, 3', isTrue: true},
    {answer: '1, 2'},
    {answer: '2'},
    {answer: '1, 3'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var y = 1;

    if(function f() { }) {
      y += typeof f;
    }

    console.log(y);
  `,
  answers: [
    {answer: '1undefined', isTrue: true},
    {answer: '1'},
    {answer: '1function'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    console.log(0.1 + 0.2 == 0.3);
  `,
  answers: [
    {answer: 'false', isTrue: true},
    {answer: 'true'},
    {answer: 'undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var state = {
      arr: [1, 2, 3]
    };

    function isEqual(arr) {
      console.log(arr === state.arr);
    }

    var newArr = state.arr;
    newArr.push(4);

    isEqual(newArr);
  `,
  answers: [
    {answer: 'true', isTrue: true},
    {answer: 'false'},
    {answer: 'undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var state = {
      arr: [1, 2, 3]
    };

    function isEqual(arr) {
      console.log(arr === state.arr);
    }

    var newArr = state.arr.concat(4);

    isEqual(newArr);
  `,
  answers: [
    {answer: 'false', isTrue: true},
    {answer: 'true'},
    {answer: 'undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    const arr = Array(1, 2, 3)
    arr.concat = () => 'Error'
    delete arr.concat

    console.log(arr.concat(5))
  `,
  answers: [
    {answer: '[1, 2, 3, 5]', isTrue: true},
    {answer: 'Error'},
    {answer: 'undefined'},
    {answer: '[1, 2, 3]'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    Array.__proto__.concat = () => 'Error';
    const arr1 = Array(1, 2, 3);

    console.log(arr1.concat(5));

    Array.prototype.concat = () => 'Error';
    const arr2 = Array(1, 2, 3);

    console.log(arr2.concat(5));
  `,
  answers: [
    {answer: '[1, 2, 3, 5], Error', isTrue: true},
    {answer: 'Error, [1, 2, 3, 5]'},
    {answer: '[1, 2, 3, 5], [1, 2, 3, 5]'},
    {answer: '[1, 2, 3], [1, 2, 3, 5]'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const partial = (f, ...args) =>
      (...moreArgs) => f(...args, ...moreArgs);

    const add3 = (a, b, c) => a + b + c;

    const plus = partial(add3, 2)

    console.log(plus(2));
  `,
  answers: [
    {answer: 'NaN', isTrue: true},
    {answer: '4'},
    {answer: '4undefined'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output to the console?',
  code: `
    const liftA2 = (f) => 
      (a, b) => a.map(f).map((func) => func(b));

    const func = a => b => a * b;

    const liftedMult = liftA2(func);

    console.log(liftedMult([1, 2], 3));
  `,
  answers: [
    {answer: '[3, 6]', isTrue: true},
    {answer: '[1, 2, 3]'},
    {answer: '[4, 5]'},
    {answer: '[3, 6, 3]'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    var salary = "1000$";

    (function () {
      console.log("Original salary was " + salary);

      var salary = "5000$";

      console.log("My New Salary " + salary);
   })();
  `,
  answers: [
    {answer: 'undefined, 5000$', isTrue: true},
    {answer: '1000$, 5000$'},
    {answer: '1000$, undefined'},
    {answer: 'undefined, undefined'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output?',
  code: `
    const x = {
      val: 2
    };

    const x1 = () => x.val += 1;
    const x2 = () => x.val *= 2;

    x1();
    x2();

    console.log(x.val);
  `,
  answers: [
    {answer: '6', isTrue: true},
    {answer: '5'},
    {answer: '14'},
    {answer: '4'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output?',
  code: `
    const output = ((x) => {
      delete x;
      return x;
    })(7);

    console.log(output);
  `,
  answers: [
    {answer: '7', isTrue: true},
    {answer: 'undefined'},
    {answer: '0'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    var f = function g(){ return 23; };
    typeof g();
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'number'},
    {answer: 'undefined'},
    {answer: 'function'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    (function(foo) {
      return typeof foo.bar;
    })({ foo: { bar: 1 } });
  `,
  answers: [
    {answer: 'undefined', isTrue: true},
    {answer: 'object'},
    {answer: 'number'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    var foo = {
      bar: function(){ return this.baz; },
      baz: 1
    }
    typeof (f = foo.bar)();
  `,
  answers: [
    {answer: 'undefined', isTrue: true},
    {answer: 'object'},
    {answer: 'number'},
    {answer: 'function'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output?',
  code: `
    [...[...'...']].length
  `,
  answers: [
    {answer: '3', isTrue: true},
    {answer: '9'},
    {answer: '0'},
    {answer: '6'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    (function f(f) {
      return typeof f();
    })(function(){ return 1; });
  `,
  answers: [
    {answer: 'number', isTrue: true},
    {answer: 'undefined'},
    {answer: 'function'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    (function(x) {
      return (function(y) {
        console.log(x);
      })(2)
    })(1);
  `,
  answers: [
    {answer: '1', isTrue: true},
    {answer: 'undefined'},
    {answer: '2'},
    {answer: 'Error'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    var foo = function bar(){ return 12; };
    typeof bar();
  `,
  answers: [
    {answer: 'Error', isTrue: true},
    {answer: 'undefined'},
    {answer: 'function'},
    {answer: 'object'}
  ]
}, {
  tags: ['es5'],
  title: 'What will the following code output?',
  code: `
    x = 1;
    console.log('x = ' + x);
    var x;
  `,
  answers: [
    {answer: 'x = 1', isTrue: true},
    {answer: 'error: x is undefined'},
    {answer: 'x = undefined'},
    {answer: 'x = null;'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output?',
  code: `
    let c = 4;

    if (true) {
      var c = 5;
    }

    console.log(c)
  `,
  answers: [
    {answer: 'error', isTrue: true},
    {answer: '4'},
    {answer: '5'},
    {answer: 'undefined'}
  ]
}, {
  tags: ['es6'],
  title: 'What will the following code output?',
  code: `
  let arr = [1, 2, 3];
  arr.a = 5;

  alert(arr.a);
  `,
  answers: [
    {answer: '5', isTrue: true},
    {answer: 'null'},
    {answer: 'error'},
    {answer: 'undefined'}
  ]
}];

module.exports = list;