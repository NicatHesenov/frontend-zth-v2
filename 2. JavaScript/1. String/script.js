// Hər bir algoritmi yazarkən functiondan istifadə etmək mütləqdir.

// 1. **Stringin uzunluğunu tap**
// Məsələn: `"hello"` → `5`
const strLength = (str) => str.length;

console.log(strLength("hello"));
// 2. **Stringi böyük hərflərə çevir**
// Məsələn: `"hello"` → `"HELLO"`
const strUpperCase = (str) => str.toUpperCase();
console.log(strUpperCase("hello"));

// 3. **Stringi kiçik hərflərə çevir**
// Məsələn: `"HeLLo"` → `"hello"`
const strLowerCase = (str) => str.toLowerCase();
console.log(strLowerCase("hello"));
// 4. **İlk hərfi böyük yaz**
// Məsələn: `"python"` → `"Python"`
const strCapital = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;
console.log(strCapital("hello"));
// 5. **Stringin hərflərini alt-alta yaz**
// Məsələn: `"salam"` →

// ```
// s
// a
// l
// a
// m
// ```
const strLower = (str) => str.split("").join("\n");
console.log(strLower("salam"));
// 6. **Hərf sözdə neçəci indexdədir?**
// Məsələn: `"banana"`, `"a"` → `1` (ilk tapılan index)
const strFirstİndex = (str, char) => str.indexOf(char);
console.log(strFirstİndex("banana", "a"));
// 7. **Bütün boşluqları “-” ilə əvəzlə**
// Məsələn: `"hello world"` → `"hello-world"`
const strReplace = (str) => str.replaceAll(" ", "-");
console.log(strReplace("hello world"));
// 8. **Stringin ilk və son hərfini tap**
// Məsələn: `"javascript"` → `"j - t"`
const strFirstLastStr = (str) => `${str[0]}-${str.at(-1)}`;
console.log(strFirstLastStr("javascript"));
// 9. **Stringin son 2 hərfini qaytar**
// Məsələn: `"hello"` → `"lo"`
const strLastTwo = (str) => str.slice(-2);
console.log(strLastTwo("hello"));
// 10. **Stringin “hello” ilə başlayıb-başlamadığını yoxla**
// Məsələn: `"hello world"` → `true`
const strstartsWith = (str) => str.startsWith("hello");
console.log(strstartsWith("hello world"));
// 11. **Stringdə “js” sözünün olub-olmadığını yoxla**
// Məsələn: `"i love js"` → `true`
const strIncludeTwo = (str) => str.includes("js");
console.log(strIncludeTwo("I love js"));
// 12. **Stringin ilk 4 hərfini götür**
// Məsələn: `"javascript"` → `"java"`
const strSlice = (str) => str.slice(0, 4);
console.log(strSlice("javascript"));
// 13. **İki stringi birləşdir**
// Məsələn: `"hello"`, `"world"` → `"hello world"`
const strJoin = (str1, str2) => str1.concat(" ", str2);
console.log(strJoin("hello", "world"));
// 14. **Stringi tərsinə yaz**
// Məsələn: `"salam"` → `"malas"`
const strConcat = (str1) => str1.split("").reverse().join("");
console.log(strConcat("salam"));
// 15. **Verilən hərf sözdə neçə dəfə təkrarlanıb**
// Məsələn: `"alma"`, `"a"` → `2`
const strRepeat = (str) =>
  Math.max(...[...new Set(str)].map((char) => str.split(char).length - 1));
console.log(strRepeat("alma"));
// Bonus - String palindrom olub-olmadığını yoxla -
// Bir söz tərsinə oxunanda da eyni qalırsa → palindromdur → nəticə true.
// Əgər tərsinə oxunanda dəyişirsə → palindrom deyil → nəticə false.
const strPalindrom = (str) => {
  let reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
};
console.log(strPalindrom("ana"));
console.log(strPalindrom("banan"));
