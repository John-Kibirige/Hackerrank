// In this exercise we look at using the Number.isInteger(num) method for checking whether
// a number is an integer or not

// Problem

/*
    Given the numbers below, find the total count of all the non integer values.
    arr = [11.2, 2, 1, 3.45, 5.3, 56, 67.7, 34, 34,55, 45.45]
    
    Example 1 
    given the array below [1,2,3,4,5] 
    expected answer: 0 

    Example 2 
    given the array below [1, 2.4]
    expected answer: 1

    Define a method that will help you do this 
*/

// solution

const non_int = (n) => {
  let counter = 0;
  for (let i = 0; i < n.length; i += 1) {
    if (!Number.isInteger(n[i])) {
      counter += 1;
    }
  }
  return counter;
};

console.log(non_int([1, 2, 3, 4, 5]));
console.log(non_int([1, 2.4]));
console.log(non_int([11.2, 2, 1, 3.45, 5.3, 56, 67.7, 34, 34, 55, 45.45]));
