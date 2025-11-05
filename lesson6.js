//callback

/* function mainFunction(callback,name) {
    console.log('Inside main');
    callback(name);
}

function insertedFunction1(name) {
    console.log(`Hi, ${name}!`);
}
function insertedFunction2(name) {
    console.log(`Bye, ${name}!`);
}
mainFunction(insertedFunction1, 'echo');
mainFunction(insertedFunction2, 'echo');
*/
/*
function processPayment(onSuccessCB, onFailureCB, paymentId) {
    const isPaymentSuccess = true;

    if(isPaymentSuccess) {
        onSuccessCB(paymentId);
    } 
    else {
        onFailureCB(paymentId);
    }

}

function onPaymentSuccess(id) {
    console.log(`Payment ${id} is successful`);
}

function onPaymentFailure(id) {
    console.log(`Payment ${id} is failed`);
}
let id = String(Math.random()).slice(2,9);

processPayment(onPaymentSuccess, onPaymentFailure, id);
*/
/*
function counter(){
    let count =1;
    return function(){
        return count++;
    }
}   
let counter1 = counter();
let counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter1());
*/

/*
function multiplier(factor){
    return function(number){
        return (factor * number);
    }
}
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(3));
*/
/*
function countToTen(startValue) {
    for (let i = startValue; i <= 10; i++) {
        console.log(i);
    }
}
countToTen(2);
*/
/*
function countToTenRecursive(startValue) {

    if (startValue <= 10) {
        console.log(startValue);
        startValue++;
        countToTenRecursive(startValue);
    }

}
countToTenRecursive(6);
*/
/*
function countToTenRecursive(startValue) {

    if (startValue <= 10) {
        console.log(startValue);
        countToTenRecursive(++startValue);
    }

}
countToTenRecursive(6);
*/
