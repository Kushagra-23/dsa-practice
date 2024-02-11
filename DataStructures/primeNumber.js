// Problem: Give a natural number 'n', determine if the number is prime or not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
  // for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Big-O = O(n) for commented if statement
// Big-O = O(sqrt(n))

console.log("Result:", isPrime(1));
console.log("Result:", isPrime(5));
console.log("Result:", isPrime(4));