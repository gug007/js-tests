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
