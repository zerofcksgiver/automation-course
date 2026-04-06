//sync code example
// console.log('Start');

// console.log('1...');
// let result = 2 + 2;
// console.log('2...');
// console.log(result);
// console.log('3...');
// let result2 = 2 * 2;
// console.log('4...');
// console.log(result2);

// console.log('Finish');

//async code example

// console.log('Start');

// setTimeout(function(){
//     console.log('Async operation completed');
// }, 3000);
// console.log('Finish');

//will get undefined
// function getData() {
//     console.log('Request to DB sent...');
//     setTimeout(function () {
//         return 'Data from DB';
//     }, 2000);
// }

// const data = getData();
// console.log('Data:' + data);

//old way - callback functions
// function getData(callback) {
//     console.log('Request to DB sent...');
//     setTimeout(function () {
//         const data = 'Data from DB';
//         callback(data);
//     }, 2000);
// }

// function printData(data) {
//     console.log('Data:' + data);
// }
// getData(printData);

//promise 
// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10);
//     }, 5000);
// })

// newPromise.then(value => value *5)
//     .then(value=> value += 10)
//     .then(value=> console.log(value));

// const getRandomNumber = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject(new Error('Wrong randomNumber'));
//         }
//     }, 5000);
// })

// getRandomNumber.then((result) => {
//     console.log('Operation is successful. Result: ' + result);
// }).catch((er) => {
//     console.log(`Operation failed. ${er}`);
// })

// function fetchPostById(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
// }

// fetchPostById(5)
//     .then(response => response.json())
//     .then(post => {
//         console.log('Post info: ');
//         console.log(`ID: ${post.id}`);
//         console.log(`UserId: ${post.userId}`);
//         console.log(`Title: ${post.title}`);
//         console.log(`Body: ${post.body}`);
//      });
// console.log(fetchPostById(5));

// async function fetchPostById(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const postData = await response.json();
//     console.log(postData);
// }
// try{
//     fetchPostById(5);
// }catch(er) {
//     console.log(er.message);
// }


