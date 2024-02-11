// Problem : Give an interger 'n', find the factorial of that integer

function recursiveFactorial(n) {
  if(n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1);
}

// Big-O = O(n)

console.log("Result:", recursiveFactorial(0));
console.log("Result:", recursiveFactorial(1));
console.log("Result:", recursiveFactorial(5));