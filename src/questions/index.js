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
    {answer: 'Object {bar: "hello"}, undefined', isTrue: true},
    {answer: 'Object {bar: "hello"}, Object {bar: "hello"}'},
    {answer: 'undefined, Object {bar: "hello"}'},
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
    {answer: '"122", "32", "02", "112"', isTrue: true},
    {answer: '5, 32, 2, 4'},
    {answer: '"122", "122", "112", "112"'},
    {answer: '"32", "32", "02", "112"'}
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
    {answer: 13, isTrue: true},
    {answer: undefined},
    {answer: 7},
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
    {answer: 'Object {a: 13}', isTrue: true},
    {answer: 'Object {b: 7}'},
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
    {answer: '7, Object {a: 13}', isTrue: true},
    {answer: '13, Object {a: 13}'},
    {answer: '7, Object {a: 7}'},
    {answer: '13, Object {a: 7}'}
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
    {answer: '"object", "object", "object", "undefined"', isTrue: true},
    {answer: '"object", "object", "array", "undefined"'},
    {answer: '"null", "object", "object", "undefined"'},
    {answer: '"object", "object", "object", "string"'}
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
    {answer: undefined, isTrue: true},
    {answer: 'Error'},
    {answer: 'Mike'},
    {answer: null}
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
    {answer: undefined, isTrue: true},
    {answer: 27},
    {answer: null},
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
    {answer: 6, isTrue: true},
    {answer: 7},
    {answer: 5},
    {answer: 10},
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
}];

module.exports = list;