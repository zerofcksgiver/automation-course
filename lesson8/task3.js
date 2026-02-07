// Створіть об'єкт person з такими властивостями:
// firstName
// lastName
// age
// Додайте до об'єкта властивість email.
// Видаліть властивість age.
// Виведіть оновлений об'єкт у консоль.

const person = {
    firstName: 'echo',
    lastName: 'Doe',
    age: 25,
}
person.email = 'echo@email.com';
delete person.age;
console.log(person); 