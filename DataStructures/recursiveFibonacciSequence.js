// Problem : Give a number 'n', find the nth element of the fibonacci sequence

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// Big-O = O(2^n)

console.log("Result: ", recursiveFibonacci(0));
console.log("Result: ", recursiveFibonacci(1));
console.log("Result: ", recursiveFibonacci(6));