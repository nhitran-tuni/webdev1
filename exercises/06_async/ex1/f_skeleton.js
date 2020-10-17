/**
 * TODO: implement a function 'f' that returns the value of a parameter inside a Promise
 * @param {number} value
 * @throws an error, if the parameter 'value' is not a number. The error message must
 * be of format 'Parameter is not a number!'
 */
const f = (value) => new Promise((resolve, reject) => !isNaN(value)
    ? resolve(value)
    : reject("Parameter is not a number!")
  );

/**
 * TODO: Implement a function 'g' that calls the previously made function 'f'.
 * It waits for the result of f and returns the natural logarithm (Math.log) of f's value.
 * Handle exceptions gracefully by returning the thrown error message.
 * @param {number} value
 */
const g = (value) => f(value).then(val => Math.log(val)).catch(e => e);

/**
 * TODO: Implement a function 'checkIfFunction'.
 * The function checks the type of a parameter.
 * However, since we are now practicing
 * Promises, the value is returned as a "promisified" value
 * @param {*} param the value is checked to be a function
 * @returns resolved Promise with value true if parameter is a function or 
 * a rejected Promise with message "Not a function!" otherwise
 */
const checkIfFunction = (param) =>
  new Promise((resolve, reject) =>
    typeof param === "function"
      ? resolve(true)
      : reject("Not a function!")
);

/**
 * TODO: Implement a function 'p' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with message "Too long time!".
 * If time is not a number the Promise must be rejected with message "Not a number!".
 * @param {number} time
 * @returns {an empty Promise after a given time}, if time is acceptable
 */
const p = (time) => new Promise((resolve, reject) => {
  if (isNaN(time)) {
    reject("Not a number!");
  }
  if (time > 2000) {
    reject("Too long time!");
  }
  resolve(time);
});

//TODO: Verify that all functions are exported for tests
exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;

// TODO: Install testing packages with npm install
// TODO: Run the tests with npm test
