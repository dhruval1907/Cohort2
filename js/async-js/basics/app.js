// Create a function that returns a Promise which succeeds after 2 seconds and returns a message. How will you call it and print the result?

// function success(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//              resolve("Promise resolved after " + time + " seconds");
//         }, time * 1000)
//     })
// }


// success(2)
// .then(function(result){
//     console.log(result)
// })


// Make a Promise that has a 50% chance to resolve and 50% chance to reject. How will you handle both cases?

// function timer(time){
//     return new Promise((resolve,reject)=>{
//         let num = Math.floor(Math.random()*10)
//         if(num<5){
//             resolve(`the number is ${num} resolved `)
//         }
//         else{
//             reject(`the number is ${num} rejected `)
//         }
//     })
// }

// timer()
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// })

// // You have to simulate downloading a file using a Promise. The Promise should resolve after a random delay. How will you test it?

// function download(){
//     return new Promise((resolve,reject)=>{
//         let num = Math.floor(Math.random()*1000)
//         setTimeout(() => {
//             resolve(`the time for resolve this is ${num}`)
//         }, num );

//     })
// }

// download()
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log("somethig happne wrong");
// })

// You have three asynchronous steps:

// Step A returns a user ID

// Step B takes that ID and returns user data

// Step C takes user data and returns user settings
// Design the Promise chain logic for this.

// function userid() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(1212)
//         }, 800);
//     })
// }

// function userdata(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: id, name: "harsh" })
//         }, 1000);
//     })
// }

// function userSetting() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ theme: "dark", language: "english" })
//         }, 1200);
//     })
// }

// userid()
//     .then(function (id) {
//         return userdata(id)
//     })
//     .then(function (userdata) {
//         return userSetting(userdata)
//     })
//     .then(function (Setting) {
//         console.log(Setting);
//     })

// Build a chain of Promises where each step adds a number to the previous result (ex: 5 → +3 → +7 → +2). What should the final structure look like?

// function addition(start){
//     return new Promise((resolve)=>{
//         resolve(start)
//     })
// }


// addition(5)
// .then(function(result){
//     console.log("start : ",result);
//     return result + 3;
// }).then(function(result){
//     console.log("after add +3 : ",result);
//     return result + 7
// }).then(function(result){
//     console.log("after add +7 : ",result);
// })
// .catch(function(errr){
//     console.log("something went wrong!!!!");    
// })


// Design a Promise chain where the second Promise depends on the first, but the third Promise does not depend on the second. How will you structure this?

// function userid() {
//     return new Promise((resolve) => {
//         resolve(1212)
//     })
// }

// function userdata(id) {
//     return new Promise((resolve) => {
//         resolve({ id: id, name: "legend" })
//     })
// }

// function gender() {
//     return new Promise((resolve) => {
//         resolve({ gender: "male", gender: "female" })
//     })
// }

// userid()
//     .then(function (id) {
//         console.log("user id is : ", id);
//         return userdata(id)
//     })
//     .then(function (userdata) {
//         console.log("userdata is  : ", userdata)
//     })
//     .then(function (gender) {
//         console.log("gender :", gender);
//     })

// Create a situation where step 1 succeeds, step 2 fails, and step 3 should not run. How will you handle the error properly?

// function success() {
//     return new Promise((resolve) => {
//         resolve("succesfull ho gya hai bhai!!")
//     })
// }

// function reject() {
//     return new Promise((reject) => {
//         reject("reject ho gya hai bhai!!!")
//     })
// }


// success()
//     .then(function (result) {
//         console.log(result);
//         return reject()
//     })
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function(error){
//         console.log("error hai bhai kuch !!",error);
        
//     })

// You have to design a Promise that fails if the input is not a number. How will you handle success and failure?

// function checkNumber(){
//     return new Promise((resolve,reject)=>{
//         let value = 1234
//         if(typeof value === "number"){
//             resolve("input me number aa gya")
//         }
//         else{
//             reject("input me kuch error hai !!")
//         }
//     })
// }

// checkNumber()
// .then(function(result){
//     console.log(result);
// })
// .catch(function(result){
//     console.log(result);
// })

// Build a chain where:
// Step 1 resolves
// Step 2 rejects
// After catch, the chain continues to Step 3
// What should the overall flow be?

// function primNumber(){
//     return new Promise((resolve)=>{
//         resolve("resolve hua")
//     })   
// }

// function notaPrimenumber(){
//     return new Promise((reject)=>{
//         reject("reject hua")
//     })
// }

// primNumber()
// .then(function(result){
//     console.log(result);
//     return notaPrimenumber()
// })
// .then(function(reject){
//     console.log(reject); 
// })
// .catch(function(){
//     console.log("kuch to gadbad hai daya!!");
    
// })