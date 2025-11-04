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


// table of number 
// let 
let n = prompt("enter a number ")

for(i=0;i<=10;i++){
    let number = n * i;
    console.log(`${n} x ${i}  =  ${number}`);
}

