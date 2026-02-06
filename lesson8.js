// const person1 = new Object();
// person1.name = 'User';
// person1.age = 20;
// console.log(person1);


// console.log(person);
// const userName = person.name;
// console.log(person.name.toUpperCase());
// console.log(person.age);
// console.log(person['age']);

// let name = 'Joe';
// const person = {
//     name:'User',
//     age: 22,
//     sayHello() {
//         console.log(`Hello, my name is: ${this.name}`);
//     },
//     sayGoodbye(anotherName) {
//         console.log(`Goodbye, ${anotherName}`);
//     }
// }

// console.log(person);
// person.name = 'AnonUser';
// console.log(person);
// person.phone = '333-333-33';
// console.log(person);
// delete person.age;
// console.log(person);
// person.sayHello();
// person.sayGoodbye('Echo');

// const name = 'Joe';
// const age = 22;

// const user = {
//     name,
//     age,
// }
// console.log(user);

// const person = {
//     name: 'Dave',
//     age: 55,
//     address: {
//         street: 'Main St.',
//         house: 100,
//         phones:{
//             mobile: '333-333-33',
//             home: '444-444-44',
//         },
//         living: {
//             humans: 4,
//             pets: 2,
//         }
//     }
// }

// console.log(person.address.living.humans);
// let propertyName = 'city';

// const person ={
//     name: 'Dave',
//     age: 55,
//     [propertyName]: 'New-York'
// }
// console.log(person[propertyName]);

// const person = {
//     "user name": 'Dave',
//     'user-address': 'Ukraine',
// }
// console.log(person['user name']);

// const person ={
//     name: 'Dave',
//     age: 55,
// }

// console.log(person.address?.street);

// const person ={
//     name: 'Dave',
//     age: 55,
//     city: 'Kharkiv',
//     street: 'Naukova',
//     house: 55,
// }
// for (const key in person) {

//     console.log(`Key: ${key}, value: ${person[key]}`);
// }   

// console.log(person.hasOwnProperty('age11'));

// let animalPrototype = {
//     type: 'animal',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let animalCat = Object.create(animalPrototype);

// console.log(animalCat.type);
// animalCat.name = 'Cat Meow';
// console.log(animalCat);
// animalCat.greet();


// let animalDog = Object.create(animalPrototype);
// animalDog.name = 'Dog dog';
// animalDog.greet();

// console.log(animalCat.__proto__);

// const person ={
//     name: 'Dave',
//     age: 55,
//     city: 'Kharkiv',
//     street: 'Naukova',
//     house: 55,
// }

// console.log(Object.keys(person).forEach(key => console.log(key.toUpperCase())));
// console.log(Object.values(person));

// const products = [
//     {name: 'Milk', price: 22},
//     {name: 'Bread', price: 15},
//     {name: 'Eggs', price: 35},
// ]

// // products.push({name: 'Cola', price: 18});
// // console.log(products);

// for (const product of products) {
//     console.log(product.name);  
    
// }

// const user = {
//     name: "Олександр",
//     age: 32,
//     gender: "Чоловік",
//     country: "USA",
// };
// const { name: userName, age, gender, country = "Україна" } = user;
// console.log(userName); // "Олександр"
// console.log(country);

// function printData({userName, userAge, userAddress }) {
//     console.log(`Name: ${userName}, Age: ${userAge}, Address: ${userAddress}`);
// }
// const person ={
//     userAge: 22,
//     userName: 'test',
//     userAddress: 'address',
// }
// printData({userAddress: 'testAddress', userAge: 44, userName: 'test'});

// const products = [
//     {name: 'Milk', price: 22, count: 2},
//     {name: 'Bread', price: 15, count: 1},
//     {name: 'Eggs', price: 35, count: 3},
// ]
//  for (const {name, price} of products) {
//     console.log(name);
//  }

//call, apply, bind

// function greet() {
//     console.log(`Hello, ${this.name}`);
// }
// const person1 = {name: 'User1'};
// const person2 = {name: 'User2'};
// // greet.call(person1);
// // greet.call(person2);
// // greet.apply(person1);
// // greet.apply(person2);
// const greetPerson1 = greet.bind(person1);
// greetPerson1();

//task1

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

