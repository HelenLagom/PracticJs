// console.log("Hello world")
/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// function askQuestion() {

// let message = prompt("Яка офіційна назва JavaScript?");
// if (message === "ECMAScript") {
//     alert("Вірно!");
// }
// else {
//     alert("Не знаєте? ECMAScript!");

//     }
// }
// askQuestion()
// // console.log(message)
// tutor27 goit 11:46
/**

Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
// function time(time) {

//   let hour = String(Math.floor(time / 60)).padStart(2, "0");
//   let minute = String(time - hour * 60).padStart(2, "0");

//   console.log(`${hour} : ${minute}`);
// }
// time(85)
// time(120)
// // console.log(minute);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i-- ) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами
 перетворити масив у рядок.
Рещультат має бути JS is the best

масив arr не має змінитися
 */

// const arr = ["BEST", "the", "foo", "is", "JS"];
// let newArr = arr.slice();
// newArr.reverse()
// const index = newArr.indexOf("foo");
// newArr.splice(index, 1);
// const string = newArr.join(" ");
// console.log(string);
// console.log(arr);

// arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1))
//   .reverse()
//   .join(" ");