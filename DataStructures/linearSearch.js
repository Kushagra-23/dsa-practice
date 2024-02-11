// Problem : Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}

// Big-O = O(n)

console.log("Result :",linearSearch([-5, 2, 10, 4, 6], 10))
console.log("Result :",linearSearch([-5, 2, 10, 4, 6], 6))
console.log("Result :",linearSearch([-5, 2, 10, 4, 6], 20))