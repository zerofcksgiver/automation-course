// Створіть масив чисел:
// Використовуючи цикл for, підрахуйте кількість:
// Позитивних чисел
// Негативних чисел
// Нулів
// Виведіть результат у консоль у такому форматі:

// Positive Numbers: X
// Negative Numbers: Y
// 0 Numbers: Z

const numbers = [3, -1, 0, 5, -7, 0, 2, -4, 8];
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroes = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positiveNumbers++;
//     } else if (numbers[i] < 0) {
//         negativeNumbers++;
//     }else {
//         zeroes++;
//     }
// }

for (const num of numbers) {
    if (num > 0){
        positiveNumbers++;
    } else if (num < 0){
        negativeNumbers++;
    } else {
        zeroes++;
    }
    
}

console.log(`Positive numbers count is ${positiveNumbers}`);
console.log(`Negative numbers count is ${negativeNumbers}`);
console.log(`Zero count is ${zeroes}`);