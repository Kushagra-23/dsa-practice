// Problem : Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

function climbingStaircase(n) {
  const noOfWays = [1, 2]
  for(let i = 2; i <= n; i++){
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i -2]
  }
  return noOfWays[n - 1]
}

// Big-O = O(n)

console.log("Result:", climbingStaircase(1));
console.log("Result:", climbingStaircase(2));
console.log("Result:", climbingStaircase(3));
console.log("Result:", climbingStaircase(4));
console.log("Result:", climbingStaircase(5));
console.log("Result:", climbingStaircase(6));
console.log("Result:", climbingStaircase(7));