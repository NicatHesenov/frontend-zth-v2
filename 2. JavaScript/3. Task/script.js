// 20 ədəd algoritm verilib. Hər biri algoritmi həll edərkən funksiyadan istifadə etməliyik.

// 1. Array-dakı bütün ədədləri 2-yə vur və yeni array qaytar.
// [1, 2, 3, 4] → [2, 4, 6, 8]
const taskOne = (arr) => arr.map((item) => item * 2);
console.log(taskOne([1, 2, 3, 4]));
/////////////////////////////////////////////////////
// 2. Array-dan yalnız cüt ədədləri seç.
// [1, 2, 3, 4, 5, 6] → [2, 4, 6]
const taskTwo = (arr) => arr.filter((item) => item % 2 === 0);
console.log(taskTwo([1, 2, 3, 4, 5, 6]));
/////////////////////////////////////////////////////
// 3. Array-da mənfi ədəd olub-olmadığını yoxla.
// [1, 3, -2, 5] → true
const taskThree = (arr) => arr.some((item) => item < 0);
console.log(taskThree([1, 3, -2, 5]));
/////////////////////////////////////////////////////
// 4. Bütün ədədlərin müsbət olub-olmadığını yoxla.
// [2, 4, 6] → true
const taskFour = (arr) => arr.every((item) => item > 0);
console.log(taskFour([2, 4, 6]));
/////////////////////////////////////////////////////
// 5. Array-dakı ilk 10-dan böyük ədədi tap.
// [3, 7, 15, 20] → 15
const taskFive = (arr) => arr.find((item) => item > 10);
console.log(taskFive([3, 7, 15, 20]));
/////////////////////////////////////////////////////
// 6. Array-da verilmiş sözü axtar.
// ["js", "html", "css"], "html" → true
const taskSix = (arr) => arr.includes("html");
console.log(taskSix(["js", "html", "css"]));
/////////////////////////////////////////////////////
// 7. Array-ı tərsinə çevir.
// [1, 2, 3, 4] → [4, 3, 2, 1]
const taskSeven = (arr) => arr.reverse();
console.log(taskSeven([1, 2, 3, 4]));
/////////////////////////////////////////////////////
// 8. Ədədləri artan sıraya düz.
// [5, 1, 8, 3] → [1, 3, 5, 8]
const taskEight = (arr) => arr.sort((a, b) => a - b);
console.log(taskEight([5, 1, 8, 3]));
/////////////////////////////////////////////////////
// 9. Array-dakı bütün sözləri böyük hərflərə çevir.
// ["js", "html"] → ["JS", "HTML"]
const taskNine = (arr) => arr.map((item) => item.toUpperCase());
console.log(taskNine(["js", "html"]));
/////////////////////////////////////////////////////
// 10. Array-dakı yalnız 5 hərfdən uzun sözləri seç.
// ["apple", "banana", "js"] → ["banana"]
const taskTen = (arr) => arr.filter((item) => item.length > 5);
console.log(taskTen(["apple", "banana", "js"]));
/////////////////////////////////////////////////////
// 11. Array-da “JavaScript” sözünün olub-olmadığını yoxla.
// ["Python", "JavaScript", "C++"] → true
const taskEleven = (arr) => arr.includes("JavaScript");
console.log(taskEleven(["Python", "JavaScript", "C++"]));
/////////////////////////////////////////////////////
// 12. Array-dakı bütün sözlərin yalnız stringdən ibarət olub-olmadığını yoxla.
// ["hello", "world"] → true
const taskTwelve = (arr) => arr.every((item) => typeof item === "string");
console.log(taskTwelve(["hello", "world"]));
/////////////////////////////////////////////////////
// 13. Array-dakı ilk tək ədədi tap.
// [2, 4, 7, 8] → 7
const taskThirteen = (arr) => arr.find((item) => item % 2 !== 0);
console.log(taskThirteen([2, 4, 7, 8]));
/////////////////////////////////////////////////////
// 14. Array-dakı bütün ədədləri string-ə çevir.
// [1, 2, 3] → ["1", "2", "3"]
const taskFourteen = (arr) => arr.map((item) => item.toString());
console.log(taskFourteen([1, 2, 3]));
/////////////////////////////////////////////////////
// 15. Array-dan null və undefined dəyərləri sil.
// [1, null, 2, undefined, 3] → [1, 2, 3]
const taskFifteen = (arr) =>
  arr.filter((item) => item !== null && item !== undefined);
console.log(taskFifteen([1, null, 2, undefined, 3]));
/////////////////////////////////////////////////////
// 16. Array-dakı obyektlərdən yaşı 18-dən böyük olan insanların adlarını çıxar.
// [{name:"Amil",age:17},{name:"Ramil",age:20},{name:"Aysel",age:25}] → ["Ramil","Aysel"]
const taskSixteen = (arr) =>
  arr.filter((item) => item.age >= 18).map((item) => item.name);
console.log(
  taskSixteen([
    { name: "Amil", age: 17 },
    { name: "Ramil", age: 20 },
    { name: "Aysel", age: 25 },
  ]),
);
/////////////////////////////////////////////////////
// 17. Array-dan ən böyük 3 ədədi tap.
// [10, 3, 45, 6, 22, 100] → [100, 45, 22]
const taskSeventeen = (arr) => arr.sort((a, b) => b - a).slice(0, 3);
console.log(taskSeventeen([10, 3, 45, 6, 22, 100]));
//////////////////////////////////////////////////////////////////////////////////
// 18. Array-dakı bütün sözləri böyük hərfə çevir və yalnız 5 hərfdən uzun olanları saxla.
// ["apple","hi","banana"] → ["BANANA"]
const taskEighteen = (arr) =>
  arr.filter((item) => item.length > 5).map((item) => item.toUpperCase());
console.log(taskEighteen(["apple", "hi", "banana"]));
//////////////////////////////////////////////////////////////////////////////////
// 19. Array-dakı ədədləri artan sırayla düz, yalnız cütləri saxla.
// [5,2,8,1,4] → [2,4,8]
const taskNinteen = (arr) =>
  arr.filter((item) => item % 2 === 0).sort((a, b) => a - b);
console.log(taskNinteen([5, 2, 8, 1, 4]));
//////////////////////////////////////////////////////////////////////////////////
// 20. Array-dakı obyektlərdən active:true olanları seç və adlarını çıxar.
// [{name:"A",active:true},{name:"B",active:false},{name:"C",active:true}]  → ["A","C"]
const taskTwenty = (arr) =>
  arr.filter((item) => item.active).map((item) => item.name);
console.log(
  taskTwenty([
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true },
  ]),
);
