// numIndices is an empty object that will be used to store numbers as keys and their indices as values.

// We loop through the array of numbers using a for loop, and i represents the current index.

// For each number in the array, we calculate the complement, which is the number needed to reach the target sum. complement = target - nums[i].

// We check if the complement exists in the numIndices object. If it does, that means we have found two numbers whose sum equals the target. In that case, we return the indices of those two numbers as an array.

// If the complement doesn't exist in the numIndices object, we store the current number and its index in the object.

// We continue this process for all numbers in the array until a solution is found or the loop completes.

// If the loop completes without finding a solution, we return an empty array or handle it as needed.

// This algorithm has a time complexity of O(n) because it only requires a single pass through the array, where "n" is the length of the nums array. It's an efficient and commonly used solution for this type of problem.

//create hash table to keep tracking the number in the array 
//loop over existing array 
//find remain number to hit target 
//check if remain number existing in the object ?
//if existing in the object return its indice and current number index
//if not existing add it to Hash table 
//if no solution found return empty array at the end 

const twoSum = (nums,target) => {
    const sumHash = {};
  for( let i = 0; i < nums.length; i++) {
    const remainNum = target - nums[i];
    if ( sumHash[remainNum] !== undefined){
        return [sumHash[remainNum],i]
    }
      sumHash[nums[i]]  = i;
  }
  return [];
}