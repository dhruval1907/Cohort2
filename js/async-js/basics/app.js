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

function userid() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1212)
        }, 800);
    })
}

function userdata(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: "harsh" })
        }, 1000);
    })
}

function userSetting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ theme: "dark", language: "english" })
        }, 1200);
    })
}

userid()
    .then(function (id) {
        return userdata(id)
    })
    .then(function (userdata) {
        return userSetting(userdata)
    })
    .then(function (Setting) {
        console.log(Setting);
    })