
//  @pram {number[]} 
// @return {boolean}

function containsDuplicate(nums) {
   const setNum = new Set();
   
   for (const num of nums ) {
     if (setNum.has(num)) {
        return true; // Found a duplicate
     }
     setNum.add(num); // Add the number to the set
   }

   return false; //No Duplicate found 
};
//test case
console.log(containsDuplicate([1,2,3,6,12,2,3]));
console.log(containsDuplicate([123,2,3,6,12,2,3]))
console.log(containsDuplicate([22,2,3,6,12,2,3]))

//BruteForce

function subContainsDublicate(nums) {
   const n = nums.length;
   for (let i = 0; i < n ; i++){
      for (let j = i + 1 ; j < n;j++){
        if (nums[i] === nums[j]){
         return true; // found dublicate
        }
      }
   }
   return false; // not found dublicate
}