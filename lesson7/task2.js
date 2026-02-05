//Створіть масив чисел
//Використовуючи reduce, обчисліть суму всіх елементів масиву.
//Виведіть отриману суму у консоль.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
