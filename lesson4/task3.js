/* Оголосіть змінну dayNumber, яка містить випадкове значення від 1 до 7 (наприклад, 1 - понеділок, 2 - вівторок і т.д.).
Використайте switch/case, щоб вивести відповідний день тижня в консоль.
Якщо dayNumber не від 1 до 7, виведіть "Incorrect value".
*/

let dayNumber = Math.floor(Math.random()*8);
switch (dayNumber) {
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday my dudes");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log('Incorrect value');
}