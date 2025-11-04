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

let n = 15, count = 0;

for (i = 1; i <= 15; i++) {
    if (i > 8){
        console.log(i);
    }
}


