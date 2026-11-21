// 1. Bir funksiya yazirsiz o sizde array ve index qebul edir. Siz cavab olaraq arraydaki hemin indexde olan elementi geri qaytarin
// Example: myFunction([1,2,3,4,5],3) ------------------ cavab 4 qayidacaq
const myFunctionIndex = (arr, i) => arr[i];
console.log(myFunctionIndex([1, 2, 3, 4, 5], 3));
//////////////////////////////////////////////////////////
// 2. Bir funksiya yazirsiz sizde array qebul edir ve hemin arraydaki ilk 3 elementi silib geri qaytarirsiz.
// Example: myFunction([1,2,3,4,5,6]) ------------------ cavab qayidacaq [4,5,6]
const myFunctionSlice = (arr) => arr.slice(3);
console.log(myFunctionSlice([1, 2, 3, 4, 5, 6]));
//////////////////////////////////////////////////////////
// 3. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array.
// Return the filtered array.
// myFunction([1,2,3], 2) ------> [1,3]
const myFunctionFilter = (arr, i) => arr.filter((item) => item !== i);
console.log(myFunctionFilter([1, 2, 3], 2));
//////////////////////////////////////////////////////////
// 4. Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
// myFunction([1,-2,2,-4]) -----------------> [-2,-4]
const myFunctionFilter1 = (arr) => arr.filter((item) => item < 0);
console.log(myFunctionFilter1([1, -2, 2, -4]));
//////////////////////////////////////////////////////////
// 5. Write a function that takes an array of numbers as argument. It should return the average of the numbers.
// myFunction([10,100,40]) -----------------> 50
const myFunctionAverage = (arr) => {
  if (arr.length === 0) return 0;
  let sum = arr.reduce((acc, char) => acc + char, 0);
  return sum / arr.length;
};
console.log(myFunctionAverage([10, 100, 40]));
