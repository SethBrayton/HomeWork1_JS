// Задание No_1


// function checkString(arg){
//     return arg[0]}

// console.log(checkString('Смех'));

// let checkString = (arg) => arg[0] 
// console.log(checkString('Смех'));


// Задание No_2

// let checkMiddleValue = (num1, num2) => (num1 + num2) / 2 
// console.log(checkMiddleValue(10, 20));

// let checkMiddleValue = (num1, num2) => {
//     let avg = (num1 + num2) / 2;
//     return avg.toFixed(2); 
// }

// console.log(checkMiddleValue(17, 20));


// Задание No_3

// let changeValue = (arg1, arg2) => {
//   if (arg1 === true) {
//     return arg2 ** 2
//   } else {
//     return Math.sqrt(arg2)
//   } 
// }

// let result = changeValue(false, 25);
// console.log(result)


// Задание No_4

// const countString = (str) => {
//     const ivalidLetters = ["а", "о", "у", "с"];
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!ivalidLetters.includes(str[i].toLowerCase())) {
//         counter++;
//       }
//     }
//     return counter;
//   };
  
//   console.log(countString("АНчОуС"));


// Задание No_5


// const createQuence = (num) => {
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         result += '*'.repeat(i) + '\n';
//     }
//     console.log(result);
// };

// createQuence(5)