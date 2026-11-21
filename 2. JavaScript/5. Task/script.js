// # JavaScript Praktiki Tapşırıqlar

// ## Mündəricat
// 1. Dəyişənlər və Tip Çevirmələri
// 2. String Metodları
// 3. Array (Massiv) Metodları
// 4. Funksiyalar
// 5. Obyektlər
// 6. Şərtlər və Dövrlər
// 7. DOM Manipulyasiyası
// 8. Event Handling
// 9. Praktiki Layihələr

// ## 1. Dəyişənlər və Tip Çevirmələri

// ### Tapşırıq 1.1: Tip Çevirmələri

// // Verilmiş dəyişənləri müvafiq tiplərə çevirin və nəticəni yoxlayın
// let numString = "42";
// let boolString = "true";
// let mixedArray = ["123", "456", "789"];
// let nullValue = null;
// // Tələb olunan çevirmələr:
// // 1. numString -> number
// // 2. boolString -> boolean
// // 3. mixedArray elementlərini number tipinə çevirin
// // 4. nullValue-nu boolean-a çevirin və nəticəni izah edin
let numString = console.log(typeof +"42");
let boolString = console.log(typeof Boolean("true"));
let mixedArray = console.log(typeof Number(["123", "456", "789"]));
let nullValue = console.log(Boolean(null)); // boolean olaraq dəyəri falsedir

//////////////////////////////////////////////////////////
// ### Tapşırıq 1.2: Tip Yoxlaması
// // Verilmiş dəyişənlərin tiplərini müəyyən edin
// let sample1 = NaN;
// let sample2 = [1, 2, 3];
// let sample3 = "";
// let sample4 = 0;
// let sample5 = {name: "John"};

// // Hər bir dəyişən üçün:
// // 1. typeof operatorundan istifadə edin
// // 2. instanceof ilə yoxlayın (array və obyektlər üçün)
// // 3. Array.isArray() metodundan istifadə edin (array-lər üçün)
let sample1 = console.log(typeof NaN);
let sample2 = console.log(Array.isArray([1, 2, 3]));
let sample3 = console.log(typeof "");
let sample4 = console.log(typeof 0);
let sample5 = console.log({ name: "John" } instanceof Object);

//////////////////////////////////////////////////////////
// ## 2. String Metodları

// ### Tapşırıq 2.1: Mətn Manipulyasiyası
// let text = "   JavaScript is awesome   ";

// // Tələb olunan əməliyyatlar:
// // 1. Mətndəki boşluqları silin
// // 2. Mətni böyük hərflərə çevirin
// // 3. "is" sözünü "was" ilə əvəz edin
// // 4. Mətni sözlərə ayırın və array kimi saxlayın
// // 5. Mətnin uzunluğunu tapın
let text = "   JavaScript is awesome   ";
console.log(text.trim().toUpperCase().replace("IS", "WAS").split(" ").length);

//////////////////////////////////////////////////////////
// ### Tapşırıq 2.2: Şablon Yaratma
// // Verilmiş məlumatlardan istifadə edərək şablon yaradın
// let user = {
//     firstName: "Ali",
//     lastName: "Məmmədov",
//     age: 25,
//     email: "ali@example.com"
// };

// // Template literal-dan istifadə edərək:
// // 1. "Hörmətli {tam_ad}, sizin {yaş} yaşınız var." formatında mətn yaradın
let user = {
  firstName: "Ali",
  lastName: "Məmmədov",
  age: 25,
  email: "ali@example.com",
  createText() {
    return `Hörmətli ${user.firstName}, sizin ${user.age} yaşınız var.`;
  },
};
console.log(user.createText());
// // 2. İstifadəçi haqqında məlumatları cədvəl formasında göstərin
const tableBody = document.getElementById("userTableBody");
const row = `
<tr>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.age}</td>
<td>${user.email}</td>
</tr>
`;
tableBody.innerHTML += row;
// // 3. Email ünvanını @ simvoluna görə ayırın
console.log(user.email.split("@").join(""));

//////////////////////////////////////////////////////////
// ## 3. Array Metodları

// ### Tapşırıq 3.1: Array Əməliyyatları
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];
// // Tələb olunan əməliyyatlar:
// // 1. Cüt ədədləri filter() ilə tapın
console.log(numbers.filter((item) => item % 2 === 0));
// // 2. Hər ədədin kubunu map() ilə hesablayın
console.log(numbers.map((item) => item ** 3));
// // 3. Ədədlərin cəmini reduce() ilə tapın
console.log(numbers.reduce((acc, char) => acc + char, 0));
// // 4. Meyvələri əlifba sırası ilə düzün
console.log(fruits.sort());
// // 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)
console.log(fruits.push("Qarpız"));
console.log(fruits.pop());
console.log(fruits.shift());
console.log(fruits.unshift("Qarpız"));

//////////////////////////////////////////////////////////
// ### Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar
let students = [
  { id: 1, name: "Aygün", grades: [85, 90, 92] },
  { id: 2, name: "Elçin", grades: [75, 85, 88] },
  { id: 3, name: "Nigar", grades: [95, 88, 91] },
  { id: 4, name: "Orxan", grades: [70, 65, 72] },
];

// // Tələb olunan əməliyyatlar:
// // 1. Hər tələbənin orta qiymətini hesablayın
const studentsWithAvarge = students.map((student) => {
  const total = student.grades.reduce((sum, grade) => sum + grade, 0);
  const avarage = total / student.grades.length;
  return {
    id: student.id,
    name: student.name,
    avarage: Number(avarage.toFixed(1)),
  };
});
console.log(studentsWithAvarge);

// // 2. 85-dən yuxarı orta qiyməti olan tələbələri tapın
const tatalResult = studentsWithAvarge.filter((item) => item.avarage > 85);
console.log(tatalResult);

// // 3. Tələbələri orta qiymətə görə çoxdan aza düzün
const sortMethdod = studentsWithAvarge.sort((a, b) => b.avarage - a.avarage);
console.log(sortMethdod);
// // 4. Bütün tələbələrin ümumi orta qiymətini tapın
const totalAverage = students.flatMap((student) => student.grades);
const total = totalAverage.reduce((a, b) => a + b, 0);
const avarage = total / totalAverage.length;
console.log(avarage);

//////////////////////////////////////////////////////////
// ## 4. Funksiyalar

// ### Tapşırıq 4.1: Funksiya Növləri
// // Aşağıdakı funksiyaları yazın:
// // 1. Adi funksiya - faktorial hesablayan
function calculateFactorial(n) {
  // Kodunuzu buraya yazın
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}
console.log(calculateFactorial(5));

// // 2. Arrow function - ədədin kvadratını qaytaran
const square = (r) => r ** 2;
console.log(square(5));

// // 3. Higher-order function - array-i filter edən funksiya qəbul edən və tətbiq edən
const filterFn = (item) => item.filter((item) => item % 2 === 0);
function filterArray(arr, filter) {
  // Kodunuzu buraya yazın
  return filter(arr);
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], filterFn));
//////////////////////////////////////////////////////////
// ## 4. Obyektlər
// ### Tapşırıq 4.1: Obyekt Yaratma və Metodlar

// // Bank hesabı obyekti yaradın
let bankAccount = {
  // Properties:
  // - hesab nömrəsi
  accountNöm: 123456789,
  // - sahibinin adı
  accountName: "Nijat Hasanov",
  // - balans
  accountBalance: 550000,
  // - əməliyyatlar array-i
  bankOperations: [],
  // Metodlar:
  // - pul əlavə etmə
  addTo: function (amount) {
    if (amount > 0) {
      this.accountBalance += amount;
      console.log(
        `${amount} AZN balansınıza əlavə olundu. Yeni balans: ${this.accountBalance} AZN`,
      );
    } else {
      console.log("Zəhmət olmasa düzgün məbləğ daxil edin.");
    }
    this.bankOperations.push({
      Növ: "Mədaxil",
      Məbləğ: this.accountBalance,
      Tarix: new Date().toLocaleDateString(),
    });
  },
  // - pul çıxarma
  removeTo: function (amount) {
    if (amount > this.accountBalance) {
      console.log("Balansınızda kifayət qədər vəsait yoxdur!");
    } else if (amount <= 0) {
      console.log("Zəhmət olmasa düzgün məbləğ daxil edin.");
    } else if ((this.accountBalance -= amount)) {
      console.log(
        `${amount} AZN balansınızdan silindi. Yeni balans: ${this.accountBalance} AZN`,
      );
    }
    this.bankOperations.push({
      Növ: "Məxaric",
      Məbləğ: this.accountBalance,
      Tarix: new Date().toLocaleString(),
    });
  },
  // - balans yoxlama
  checkTo: function () {
    console.log(`Cari balans: ${this.accountBalance} AZN`);
    return this.accountBalance;
  },
  // - əməliyyat tarixçəsi
  accountHistory: function () {
    if (this.bankOperations.length === 0) {
      console.log("Heç bir əməliyyat aparılmayıb.");
      return;
    }
    this.bankOperations.forEach((e, i) => {
      console.log(`${i + 1}. ${e.Tarix} - ${e.Növ}:${e.Məbləğ} AZN`);
    });
  },
};
bankAccount.addTo(200);
bankAccount.removeTo(5);
bankAccount.checkTo();
bankAccount.accountHistory();

//////////////////////////////////////////////////////////
// ## 5. Şərtlər və Dövrlər

// ### Tapşırıq 5.1: Şərtli Operatorlar
// // 1. Rəqəmin tək və ya cüt olduğunu yoxlayan funksiya
const checkNum = (arr) => {
  const single = arr.filter((item) => item % 2 !== 0);
  const pair = arr.filter((item) => item % 2 === 0);
  return `Tək: ${single} Cüt: ${pair}`;
};
console.log(checkNum([1, 2, 3, 4, 5, 6]));

// // 2. Üç ədəddən ən böyüyünü tapan funksiya
const findNum = (arr) => {
  return Math.max(...arr);
};
console.log(findNum([1, 2, 3]));
// // 3. İlin fəslini təyin edən funksiya (ay nömrəsinə görə)
const findSession = (moon) => {
  const sessions = [
    "Qış",
    "Qış",
    "Yaz",
    "Yaz",
    "Yaz",
    "Yay",
    "Yay",
    "Yay",
    "Payız",
    "Payız",
    "Payız",
    "Qış",
  ];
  return moon >= 1 && moon <= 12 ? sessions[moon - 1] : "Səhv";
};
console.log(findSession(5));

// // 4. Sadə kalkulyator (switch-case ilə)
const caculator = (num1, num2, operator) => {
  let resutl;
  switch (operator) {
    case "+":
      resutl = num1 + num2;
      break;
    case "-":
      resutl = num1 - num2;
      break;
    case "*":
      resutl = num1 * num2;
      break;
    case "/":
      resutl = num2 !== 0 ? num1 / num2 : "Sıfıra bölmək olmaz";
      break;
    default:
      resutl = "Səhv operator";
  }
  return resutl;
};

console.log(caculator(10, 5, "+"));
console.log(caculator(10, 5, "-"));
console.log(caculator(10, 5, "*"));
console.log(caculator(10, 5, "/"));
console.log(caculator(10, 0, "/"));
console.log(caculator(10, 0, "1"));

// ### Tapşırıq 5.2: Dövrlər
// // 1. Fibonaççi ardıcıllığını çap edən proqram (for)
let n = 10;
let fib = [0, 1];
for (let i = 2; i < n; i++) {
  console.log((fib[i] = fib[i - 1] + fib[i - 2]));
}
console.log(fib.join(","));
// // 2. Array elementlərini tərsinə çap edən proqram (while)
let arr = [0, 1, 2, 3, 4, 5, 6];
let i = arr.length - 1;
while (i > 0) {
  console.log(i);
  i--;
}
// // 3. Sadə ədədləri tapan proqram
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(11));
console.log(isPrime(9));

// // 4. Pattern çap edən proqram (ulduzlarla üçbucaq)
const rowCount = 5;
for (let i = 1; i <= rowCount; i++) {
  console.log("*".repeat(i));
}
// ## Tapşırıqların Həlli üçün Tövsiyələr

// 1. Hər tapşırığı kiçik hissələrə bölün
// 2. console.log() ilə nəticələri yoxlayın
// 3. Try-catch blokları əlavə edin
// 4. Kodunuzu kommentlərlə izah edin
// 5. ES6+ xüsusiyyətlərindən istifadə edin
// 6. DRY (Don't Repeat Yourself) prinsipinə əməl edin
// 7. Kodun oxunaqlığına diqqət yetirin

// ## Əlavə Resurslar

// 1. MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript
// 2. JavaScript.info: https://javascript.info/
// 3. W3Schools JavaScript: https://www.w3schools.com/js/
// 4. Eloquent JavaScript: https://eloquentjavascript.net/

// Bu tapşırıqlar JavaScript-i öyrənmək üçün praktiki təcrübə təmin edir. Tapşırıqları ardıcıl şəkildə yerinə yetirməklə biliklərinizi möhkəmləndirə bilərsiniz. Uğurlar!
