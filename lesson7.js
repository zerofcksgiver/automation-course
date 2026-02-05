/* let numbers = [1, 2, 3, 4, 5, 6, 7];
let numbers2 = new Array(10, 20, 30, 40, 50);
console.log(numbers2); 

const namesList = ['alex', 'echo', 'gordey', 5, true, false];
console.log(namesList);

console.log(namesList[4]);
console.log(namesList[namesList.length-1]);

const firstName = namesList[1];
console.log(firstName.toUpperCase());
*/

//const fruits = ['Apple', 'Pineapple', 'Orange', 'Banana'];

//for (let i = 0; i < fruits.length; i++) (
   
  //  console.log(`Id: ${i}, value: ${fruits[i]}`)
//)

//method forof  - same as above 
/*for (const kekeke of fruits) {
    console.log(kekeke)
} */
/* let array = [1, 2, 3, 4, 5, 6, 'x', 'y', 'z', 136, 137];
let arrayNumbers = [];

for (const item of array) {
    if (typeof item === 'number'){
        arrayNumbers.push(item)
    }
}
console.log(arrayNumbers);
*/

//let words = ['House', 'wOrds', 'test'];
//let wordsUppercase = [];
//for (let i = 0; i < words.length; i++)  {
//    wordsUppercase.push(words[i].toUpperCase());
//}
//console.log(wordsUppercase);


//Створіть масив чисел
//Використовуючи reduce, обчисліть суму всіх елементів масиву.
//Виведіть отриману суму у консоль.

/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
*/
/* 
Створіть масив чисел
Використовуючи filter, створіть новий масив, що містить лише парні числа.
Виведіть результат у консоль.
 */
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filtered = numbers.filter((num) => num%2 === 0);
console.log(filtered);
*/
/*

Створіть масив чисел:
Використовуючи цикл for, підрахуйте кількість:
Позитивних чисел
Негативних чисел
Нулів
Виведіть результат у консоль у такому форматі:

Positive Numbers: X
Negative Numbers: Y
0 Numbers: Z
*/
const numbers = [3, -1, 0, 5, -7, 0, 2, -4, 8]; //created an array
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroes = 0; //created counters

for (let i = 0; i < numbers.length; i++) {   //default for cycle
    if (numbers[i] > 0) { // if numbers index larger 0 - 
        positiveNumbers++; // add to count
    } else if (numbers[i] < 0) {
        negativeNumbers++;
    }else {
        zeroes++;
    }
}
console.log(`Positive numbers count is ${positiveNumbers}`);
console.log(`Negative numbers count is ${negativeNumbers}`);
console.log(`Zero count is ${zeroes}`);