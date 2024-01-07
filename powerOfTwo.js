// Problem: Give a positive integer 'n', determine if the number is a power of 2 or not

function powerOfTwo(n) {
  if(n < 1){
    return false;
  }
  while(n > 1){
    if(n % 2 !== 0){
      return false;
    }
    n = n/2
  }
  return true;
}

// Big-O = O(logn)

console.log("Result:",powerOfTwo(1));
console.log("Result:",powerOfTwo(2));
console.log("Result:",powerOfTwo(5));

// Alternative
function isPowerOfTwoBitWise(n) {
  if(n < 1){
    return false;
  }
  return (n & (n-1)) === 0;
}

// Big-O = O(1)

console.log("Result:",isPowerOfTwoBitWise(1));
console.log("Result:",isPowerOfTwoBitWise(2));
console.log("Result:",isPowerOfTwoBitWise(5));