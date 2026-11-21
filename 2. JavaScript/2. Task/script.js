// Arrayin methodlarını praktika etmək üçün aşağıdakı algoritmləri yerinə yetirməliyik. Uğurlar !

// 1. Ədədi array-in sonuna əlavə et (push)
// // addToEnd([1,2,3], 4) → [1,2,3,4]
const addToEnd = (arr, four) => {
  arr.push(four);
  return arr;
};
console.log(addToEnd([1, 2, 3], 4));

//  2. Ədədi array-in əvvəlinə əlavə et (unshift)
// // addToStart([2,3], 1) → [1,2,3]
const addToStart = (arr, four) => {
  arr.unshift(four);
  return arr;
};
console.log(addToStart([1, 2, 3], 4));
//  3. Sonuncu elementi sil (pop)
// // removeLastElement([1,2,3]) → [1,2]
const removeLastElement = (arr) => {
  arr.pop();
  return arr;
};
console.log(removeLastElement([1, 2, 3]));
// 4. İlk elementi sil (shift)
// // removeFirstElement([1,2,3]) → [2,3]
const removeFirstElement = (arr) => {
  arr.shift();
  return arr;
};
console.log(removeFirstElement([1, 2, 3]));
//  5. Array-in müəyyən hissəsini kəs (slice)
// // getMiddleElements([1,2,3,4,5], 1, 4) → [2,3,4]
const getMiddleElements = (arr, start, end) => {
  return arr.slice(start, end);
};
console.log(getMiddleElements([1, 2, 3, 4, 5], 1, 4));
//  6. Verilən ədəd array-də varmı? (includes)
// // containsNumber([1,2,3], 2) → true
const containsNumber = (arr, num) => {
  return arr.includes(num);
};
console.log(containsNumber([1, 2, 3, 4, 5], 2));
//  7. Verilmiş ədədin index-i nədir? (indexOf)
// // findIndex([1,2,3], 3) → 2
const findIndex = (arr, num) => {
  return arr.indexOf(num);
};
console.log(findIndex([1, 2, 3, 4, 5], 2));
//  8. Eyni elementdən neçə ədəd var?
// // countOccurrences([1,2,2,3,2], 2) → 3
const countOccurrences = (arr, num) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count += 1;
    }
  }
  return count;
};
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
//  9. 2 array-i birləşdir (concat)
// // mergeArrays([1,2], [3,4]) → [1,2,3,4]
const mergeArrays = (arr, arr2) => {
  return arr.concat(arr2);
};
console.log(mergeArrays([1, 2], [3, 4]));
//  10. String-ləri birləşdir (join)
// // joinWithDash(["a", "b", "c"]) → "a-b-c"
const joinWithDash = (arr) => {
  return arr.join("-");
};
console.log(joinWithDash(["a", "b", "c"]));
// 11. Elementləri tərsinə çevir (reverse)
// // reverseArray([1,2,3]) → [3,2,1]
const reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray([1, 2, 3]));
// 12. Array-dəki ədədləri ikiqatla, sonda nəticə də array də qayıtmalıdır.
// // doubleElements([1,2,3]) → [2,4,6]
const doubleElements = (arr) => {
  return arr.map((item) => item * 2);
};
console.log(doubleElements([1, 2, 3]));
// 13. Cüt ədədləri seç, sonda nəticə də array də qayıtmalıdır.
//  getEvenNumbers([1,2,3,4]) → [2,4]
const getEvenNumbers = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};
console.log(getEvenNumbers([1, 2, 3, 4]));
// 14. Object-in property-sini dəyiş
// // updateUserAge({name: "Ali", age: 20}, 25) → {name: "Ali", age: 25}
const updateUserAge = (obj, age) => {
  obj.age = age;
  return obj;
};
console.log(updateUserAge({ name: "Ali", age: 20 }, 25));
// 15. Object-ə yeni property əlavə et
// // addUserEmail({name: "Aysel"}, "aysel@mail.com") → {name: "Aysel", email: "aysel@mail.com"}
const addUserEmail = (obj, email) => {
  obj.email = email;
  return obj;
};
console.log(addUserEmail({ name: "Aysel" }, "aysel@mail.com"));
