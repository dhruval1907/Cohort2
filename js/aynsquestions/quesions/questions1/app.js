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
    console.log("fethcing the data.........");
    setTimeout(function () {
        cb({ id: 10, name: username })
    }, 2000)
}

function getuserPosts(id, cb) {
    console.log("getting the user posts");
    setTimeout(() => {
        cb(["hello", "hyyy", "fack you"])
    }, 2000);
}

getUser("harsh", function (data) {  
    console.log(data);
    getuserPosts(data.id,function(allposts){
        console.log(data.username, allposts);
    })
})
