// 1.afterdelay banake bad usko settimout me time ko use karo

// function afterDelay(time,cb){
//     setTimeout(() => {
//         cb("keso ho bhai!!!!!!")
//     }, time);
// }

// afterDelay(3000,function(data){
//     console.log(data);

// })

// 2.

function getUser(username, cb) {
    cb({ id: 1212, name: username })
}

function getuserPOsts(id, cb) {
    setTimeout(() => {
        cb(["hello", "hyyy", "fack you"])
    }, 1000);
}

getUser("harsh", function (data) {
    setTimeout(() => {
        console.log("harsh")
    }, 500);
    getuserPOsts(data.id, function (allposts) {
        console.log(allposts);

    })
})