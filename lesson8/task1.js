// Створіть об'єкт calculator, який містить:
// Властивості:
// lastResult – останній обчислений результат (початкове значення null).
// operationsCount – лічильник виконаних операцій (початкове значення 0).
// Методи:
// add(a, b): повертає суму a + b та оновлює lastResult і operationsCount.
// subtract(a, b): повертає різницю a - b та оновлює lastResult і operationsCount.
// multiply(a, b): повертає добуток a * b та оновлює lastResult і operationsCount.
// divide(a, b): повертає результат a / b, якщо b !== 0, інакше "Помилка: ділення на нуль!". Також оновлює lastResult і operationsCount.
// reset(): скидає lastResult до null і operationsCount до 0.
// Використовуйте ці методи для виконання арифметичних операцій, виведіть результати у консоль та перевірте значення lastResult і operationsCount.

const calculator = {
    lastResult: null,
    operationsCount: 0,
    add (a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return `Result: ${this.lastResult}`;
    },
    substract (a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        console.log(`Result: ${this.lastResult}`);
    },
    multiply (a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        console.log(`Result: ${this.lastResult}`);
    },
    divide (a, b) {
        if (b !== 0) {
            this.lastResult = a / b;
            this.operationsCount++;
            console.log(`Result: ${this.lastResult}`);
        } else {
            console.log('Error: Nelzya delit na nol');
        }
    },
    reset() {
        this.lastResult = null;
        this.operationsCount = 0;
        console.log('Calculator reset');
    }
}

console.log(calculator.add(1, 3));
calculator.multiply(4, 5);
calculator.substract(10, 2);
calculator.divide(20, 4);
calculator.divide(10, 0);

console.log(calculator.lastResult);
console.log(calculator.operationsCount);

calculator.reset();
console.log(calculator.lastResult);
console.log(calculator.operationsCount);

calculator.substract(10, 2);
calculator.divide(20, 4);

console.log(calculator.lastResult);
console.log(calculator.operationsCount);