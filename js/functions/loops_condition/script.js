// 1.  ASK USER AGE ELIGIBLE FOR VOTE OR NOT 
// ERROR HANDLING

// let age = prompt("enter your age : ");

// // console.log(typeof(age)); 
// if (age === null) {
//     console.error("you cancelled it !");
// } else {
//     if (age.trim() === "") {
//         console.error("please provide me a number ");
//     }
//     else {
//         age = Number(age)
//         if (isNaN(age)) {
//             console.warn("please enter a number")
//         }
//         else {
//             console.log(`your age is ${age}`);

//             if (age >= 18) console.log("you can vote");
//             else console.log("you are not eligible for vote")
//         }
//     }
// }


// 2. table of number 
// let n = prompt("enter a number ")

// for(i=0;i<=10;i++){
//     let number = n * i;
//     console.log(`${n} x ${i}  =  ${number}`);
// }


// 3. count num greater 8 into 1 to 15

// let n = 15, count = 0;

// for (i = 1; i <= 15; i++) {
//     if (i > 8){
//         console.log(i);
//     }
// }

// 4. ask user for password is matched print match

// let sahipassword = "kese ho"

// let password = prompt("password batao  ")

// if(password === null){
//     console.error("entered something");
// }
// else{
//     if(password.trim() === ""){
//         console.error("entered a valid password");
//     }
//     else{
//         if(password === sahipassword){
//             console.log("matched");
//         }    
//         else{
//             console.log("not matched");
//         }
//     }
// }

// 5. allow only 3 attempts for correct password if user enter after three then account locked 
// let right = "hello";
// let attempt = 0;
// let flag = false

// let password = prompt("passowrd batao")
// attempt++;
// if(password == right) flag = true

// while(password !== right){
//     if(attempt == 3) {
//         console.error("account locked");
//         break;
//     }
//     password = prompt("passowrd batao")
//     if(password == right) flag = true
//     attempt++;
// }

// if(flag == true) console.log("account opened");


// 6.take word from to user stop when user stop count the words

// let word = prompt("word batao")
// let counter = 0;

// while(word !== "stop"){ 
//     if(word === "yes"){
//         counter++;
//     }
//     word = prompt("word batao");
// }

// console.log(`total times of yes is : ${counter}`);


// 7.print number that divisible by 7 in 1 to 050

// let sum = 0;
// for (i = 1; i <= 30; i++) {
//     if (i % 2 === 1) {
//         // console.log(i);
//         sum += i;

//     }
// }

// console.log(sum);

// 8. keep asking number until user enter even number

// let number = +prompt("number do bhai")
// num = number

// while (num % 2 !== 0) {
//     let number = +prompt("number do bhai")
//     num = nm
// }

// 9. print user input number start to end

// let fisrt = prompt("phela batao")
// let second = prompt("dusra batao")

// for(i=fisrt;i<=second;i++){
//     console.log(i);
// }

// 10. print odd num from 1 to 20 and print only 3

// let counter = 0;

// for(i=0;i<=20;i++){
//     if(i%2!==0){
//         if(counter === 3) break;
//         console.log(i);
//         counter++;
//     }
// }

// 11. asking 5 times and check how many are positive

// let counter = 0;
// while(counter < 5){
//     let num = prompt("number likho")
//     if(num > 0 ){
//         console.log(`the ${num} is positive`);
//     }
//     else{
//         console.log(`the ${num} is nagative`);
//     }
//     counter++;
// }

// 12. atm simulation

let balance = 1000;

let counter = 0;
while(balance>0 && counter < 3){
    let withdraw = +prompt("withdraw amount batao")
    balance -= withdraw;
    counter++;
}

if(balance<0){
    console.log("insuficeint balance");
}

console.log(`rest balance is ${balance}`);
