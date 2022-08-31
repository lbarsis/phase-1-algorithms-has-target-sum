// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   let arrSum = array.flatMap((a, i) => array.slice(i+1).map(b => a + b))
//   // let arrSum = array.flatMap((i) => array.slice(i+1))
//   return arrSum.includes(target)
//   // return arrSum
// }

function hasTargetSum(array, target) {
  const seenNumbers ={}

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) {
      return true;
    } else {
      seenNumbers[number] = true
    }
  }
  return false
}

// hasTargetSum([3, 8, 12, 4, 11, 7], 10)

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  make function 'hasTargetSum'

  get all possibilities of the array and assign it to variable
  search each number for the target
  (I know! It's not efficient at all, I can't think of another solution!)
*/

/*
  Add written explanation of your solution here
  arrSum is a new array that is crated from the map function.

  (Used google to figure out how to create an array of every iteration)

  used includes function to return a boolean if the target is within the new array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
