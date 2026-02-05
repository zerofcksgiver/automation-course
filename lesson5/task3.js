/* Створіть функцію generatePassword, яка:
Приймає один параметр length (довжина пароля).
Генерує випадковий пароль, що складається з:
Великих та малих літер (A-Z, a-z)
Цифр (0-9)
Повертає цей пароль у вигляді рядка.
Викличте функцію з аргументом 8, виведіть згенерований пароль у консоль. */

function generatePassword(length) {
    const options = ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    let password = (" ");
        for (let i = 0; i < length; i++){
            const randomOption = Math.floor(Math.random() * options.length);
            password += options[randomOption];
        }
return password;
}
let newPassword = generatePassword(24);
console.log(newPassword);