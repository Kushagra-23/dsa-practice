// Problem : Given two finite non-empty sets, find the cartesian product

function cartesianProduct(arr1, arr2) {
  const result = [];
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++){
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result
}

// m and n are lengths of arrays which can be same or different
// Big-O = O(mn)

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log("Result: ", cartesianProduct(arr1, arr2));