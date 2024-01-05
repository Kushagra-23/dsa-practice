// Problem: Give an integer 'n', find the factorial of the integer

function findFactorial(n){
  let factorial = 1;
  for(let i = 2; i <= n; i++){
    factorial = factorial * i;
  }
  return factorial;
};

// Big-O = O(n)

console.log("Result: ",findFactorial(0))
console.log("Result: ",findFactorial(4))
console.log("Result: ",findFactorial(5))