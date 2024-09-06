// Example of Closure where the inner function is returned from the outer function

var createHelloWorld = function() {
    return function(...args) {
        return 'Hello World';
    }
}

const f = createHelloWorld();
console.log(f());  // Output: Hello World
