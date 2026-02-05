/* Створіть функцію handleNum, яка приймає три параметри:
num (число)
handleEven (функція, яка викликається, якщо число парне)
handleOdd (функція, яка викликається, якщо число непарне)
Створіть дві функції:
handleEven → Виводить "Number is even" у консоль.
handleOdd → Виводить "Number is odd" у консоль.
Викличте handleNum з довільним числом та передайте дві створені функції.
*/

function handleNum(num, handleEven, handleOdd){
    if (num % 2 === 0){
        handleEven();
    }
    else{
        handleOdd();
    }
}

function handleEven(){
    console.log('Number is even');
}
function handleOdd(){
    console.log('Number is Odd');
}
handleNum(9, handleEven, handleOdd);

