import Gadget from './gadget.js';
import Smartphone from './smartphone.js';

const PC = new Gadget('Asus', 'ROG Strix', 2021);
const laptop = new Gadget('Apple', 'MacBook Air', 2024);
const tablet = new Gadget('Samsung', 'Galaxy Tab S8', 2023);
const myPhone = new Smartphone('Apple', 'iPhone 16 Pro', 2025, 'iOS');
const herPhone = new Smartphone('Apple', 'iPhone 14', 2022, 'iOS');

PC.year = 2020;
myPhone.year = 2025;
myPhone.operatingSystem = 'Windows';
console.log(PC.year);

// Створіть кілька екземплярів обох класів і викличте getInfo() для кожного.
console.log(PC.getInfo());
console.log(laptop.getInfo());
console.log(tablet.getInfo());
console.log(myPhone.getInfo());
console.log(herPhone.getInfo());

const gadgets = [PC, laptop, tablet, myPhone, herPhone];
const oldestGadget = Gadget.getOldestGadget(gadgets);

console.log(`The oldest thing is ${oldestGadget.getInfo()}`);
