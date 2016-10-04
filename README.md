# Code Speed Tester - ES6
Calculate the average time it takes to run a code.

## Usage

1 - Create a code block for test:

```javascript
let myCode = function() {
  // Whatever you want to measure
}
```

2 - Execute the SpeedTest, passing your code as parameter

SpeedTest takes two parameters: `implementation` and `loops`.

**Implementation** is the code you want to test the speed. Needs to be a function.
**Loops (optional)** is the amount of repetitions you want your tests run.

```javascript
let myTest = new SpeedTest(myCode, loops);
myTest.run();
```
