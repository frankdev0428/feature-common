
const customReduce = (nums, fn , init ) =>  {
   let result = init;

   for( let i= 0; i < nums.length; i++) {
    result = fn(result , nums[i]);
   }

   return result;
}

//Example usage: 
const nums  = [ 1,2,3,4] ;
const sumReducer = function (accum , curr)  {
    return accum + curr;
};

const initSum =  0;
console.log(customReduce(nums , sumReducer, initSum)); //Output: 10

const squareSumReducer = function (accum, curr)  {
    return accum + curr* curr ;
}

const initSquareSum = 100;
console.log(customReduce(nums , squareSumReducer, initSquareSum)); //Output :130;

const emptyArray = [];
const zeroReducer = function (accum, curr) {
    return 0;
};
const initZero = 25;
console.log(customReduce(emptyArray, zeroReducer, initZero));