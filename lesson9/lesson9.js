// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
//     }
//     }

// const user1 = new Person('Echo', 25);
// user1.introduce();

// const user2 = new Person('Luna', 30);
// user2.introduce();


// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// const car = new Car('Toyota', 'Yaris', 2024);
// console.log(car.make);
// console.log(car.model);
// console.log(car.year);

// class BankAccount {
//     #balance = 0; //private field?

//         deposit(amount) {
//             if (amount > 0){
//                 this.#balance += amount;
//             }
//         }
// getBalance() {
//     return this.#balance;
//     }
// }
// const account1 = new BankAccount();
// account1.deposit(1000);
// console.log(account1.getBalance());

// class Temperature {
//     constructor(celsius) {
//         this._celsius = celsius;
//     }
//     get fahrenheit() {
//         return this._celsius * 9/5 + 32;
//         }
//     set celsius(value) {
//         if (value < -273.15) {
//             console.log('Температура не может быть ниже абсолютного нуля!');
//             return;
//         }
//         this._celsius = value;
//     }
// }

// const temp = new Temperature(25);
// console.log(temp.fahrenheit);

// class MathHelper {
//     static square(number) {
//         return number * number;
//     }
// }
// console.log(MathHelper.square(5)); //25

// class Config {
//     static defaultLanguage = 'uk';
// }
// console.log(Config.defaultLanguage); //uk

// class Logger {
//     static log(message) {
//         console.log(`[LOG]:  ${message}`);
//     }
// }
// Logger.log('This is a log message123.');

// class TimeHelper {
//     static async delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }
// }
// TimeHelper.delay(4000).then(() => console.log('4 seconds have passed!'));

// class Car {

//     // color = 'red';


//     #vinNumber;
//     constructor(color, brand, model, vinNumber) {
//         this._color = color;
//         this.brand = brand;
//         this.model = model;
//         this.petrol = 0;
//         this.#vinNumber = vinNumber;
//     }

//     set color(newColor) {
//         if(newColor === 'black') {
//             console.log('Wrong color');
//         } else {
//             this._color = newColor;
//         }
//     }

//     get color() {
//         return this._color;
//     }

//     turnOn(){
//         console.log(`car ${this.brand} ${this.model} is turned on`);
//     }

//     turnOff(){
//         console.log(`The car is turned off`);
//     }

//     fillPetrol(liters){
//         if((liters + this.petrol) <= 100){
//           console.log(`${liters} of fuel has been loaded`);
//            this.petrol += liters;
//           console.log(`Now there is ${this.petrol} inside`);
         
//         }  else{
//             console.log('Number of liters in the car should be less then 100');
//         }

//     }
// }


// const audi = new Car('white', 'audi', 'TT');
// const bmw = new Car('red', 'BMW', 'X5');
// // audi.turnOn();
// // audi.fillPetrol(20);
// // audi.fillPetrol(20);
// // audi.fillPetrol(20);
// // audi.fillPetrol(25);
// // audi.fillPetrol(20);
// // audi.turnOff();
// // bmw.fillPetrol(40);


// // console.log(audi.color);
// // console.log(audi);
// audi.color = 'black';

// console.log(audi.color);


// class Calculator {

//     static PI = 3.14159;

//     static add(num1, num2) {
//         return num1 + num2;
//     }

//     static divide(num1, num2) {
//         return num1 / num2;
//     }
// }

// console.log(Calculator.add(5, 10));
// console.log(Calculator.PI);














// const circle1 = new Circle('red', 2);
// console.log(circle1.getArea());
// const rectangle1 = new Rectangle('blue', 10, 20);
// console.log(rectangle1.getArea());



