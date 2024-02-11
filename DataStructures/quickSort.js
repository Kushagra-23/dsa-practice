// Problem : Given an array of integers, sort the array

function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
};

// Big-O (Worst Case) = O(n^2)
// Big-O (Average Case) = O(nlogn)

const arr = [8, 20, -2, 4, -6];
console.log("Result:", quickSort(arr));