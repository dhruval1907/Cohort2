// 1.delay function banke uske callback me time lao ot us time settiout ko tum use karo apne settimour ke time me
// function afterDelay(time, cb) {

//     console.log("fetching the data...");
//     setTimeout(() => {
//         cb("callback executed.....")
//     }, time);

// }

// afterDelay(2000, function (data) {
//     console.log(data);
// })


function getUser(username, cb) {
    var set = setInterval(() => {
        console.log("fethcing the data.........");
    }, 1000);
    setTimeout(() => {
        clearInterval(set)
    }, 1200);
    setTimeout(function () {
        cb({ id: 10, name: username })
    }, 2000)
}

getUser("harsh", function (data) {
    console.log("get the data.........");
    console.log(data);

})
