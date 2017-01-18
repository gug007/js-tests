#JavaScript Questions
1) What value is returned from the following statement?
```javascript 
    function f() { return this }
    f.bind(6).bind(9)()
   ``` 
2) What will the code below output to the console?
```javascript 
    (function() {
      var a = b = 3;
    })();

    console.log(typeof a, typeof b);
   ``` 
3) What will the code below output to the console?
```javascript 
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
   ``` 
4) What will the code below output to the console?
```javascript 
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
   ``` 
5) What will the code below output to the console?
```javascript 
    console.log(typeof NaN === 'number');
    console.log(NaN === NaN);
    console.log('abc' / 3);
    console.log('A' - 'B' + '2');
   ``` 
6) In what order will the numbers 1-4 be logged to the console when the code below is executed?
```javascript 
    (function() {
      console.log(1);
      setTimeout(function() {console.log(2)}, 1000);
      setTimeout(function() {console.log(3)}, 0);
      console.log(4);
    }());
   ``` 
7) What will the code below output to the console?
```javascript 
    var arr1 = 'john'.split('');
    var arr2 = arr1.reverse();
    var arr3 = 'jones'.split('');
    arr2.push(arr3);

    console.log(arr1.slice(-1), arr2.slice(-1));
   ``` 
8) What will the code below output to the console?
```javascript 
    console.log(1 + '2' + '2');
    console.log(1 + +'2' + '2');
    console.log(1 + -'1' + '2');
    console.log(+'1' + '1' + '2');
   ``` 
9) What will be the output of the following code?
```javascript 
    for(var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000);
    }
   ``` 
10) What will the following code output to the console?
```javascript 
    var spy = {
      _name: 'James Bond',
      getSecretName: function() {
        return this._name;
      }
    };
    var stoleSecretName = spy.getSecretName;
    console.log(stoleSecretName(), spy.getSecretName());
   ``` 
11) What will the following code output to the console?
```javascript 
    var a = {},
        b = {key: 'b'},
        c = {key: 'c'};

    a[b] = 7;
    a[c] = 13;

    console.log(a[b]);
   ``` 
12) What would the following lines of code output to the console?
```javascript 
    console.log(0 || 1);
    console.log(1 || 2);
    console.log(0 && 1);
    console.log(1 && 2);
   ``` 
13) What will be the output of the following code?
```javascript 
    var b = {a: 13};
    
    (function foo(b) {
      b = {a: 7};
    })(b);

    console.log(b);
   ``` 
14) What will be the output of the following code?
```javascript 
    var a = 7;
    var b = {a: 7};

    (function foo(a, b) {
      a = 13;
      b.a = 13;
    })(a, b);

    console.log(a, b);
   ``` 
15) What will the following code output to the console?
```javascript 
    function test() {
      console.log(a, foo());

      var a = 7;
      function foo() {
        return 13;
      }
    }

    test();
   ``` 
16) What will the following code output to the console?
```javascript 
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof undefined);
   ``` 
17) What will the following code output to the console?
```javascript 
    function Person(name) {
      this.name = name;
    }

    Person.prototype.printName = () => {
      console.log(this.name);
    }

    let person = new Person('Mike');
    person.printName();
   ``` 
18) What will the following code output to the console?
```javascript 
  var person = {
    age: 27,
  
    printAge: function() {
      console.log(this.age);
    }
  }

  setTimeout(person.printAge, 1000);
   ``` 
19) What will the following code output to the console?
```javascript 
    var arr = [77, 13, 33, 15, 7, 3];
    arr.sort();

    console.log(arr);
   ``` 
20) Consider the following code. What will be printed on the console if a user clicks the first and the fourth button in the list?
```javascript 
    var nodes = document.getElementsByTagName('button');
    
    for(var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
      });
    }
   ``` 
21) How many data types are there in JS-ES5?
