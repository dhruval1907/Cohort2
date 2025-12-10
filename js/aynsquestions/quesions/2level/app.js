// 1.delay function banke uske callback me time lao ot us time settiout ko tum use karo apne settimour ke time me
// function afterDelay(time, cb) {

// const { use } = require("react");

//     console.log("fetching the data...");
//     setTimeout(() => {
//         cb("callback executed.....")
//     }, time);

// }

// afterDelay(2000, function (data) {
//     console.log(data);
// })


// function getUser(username, cb) {
//     console.log("fethcing the data.........");
//     setTimeout(function () {
//         cb({ id: 10, name: username })
//     }, 2000)
// }

// function getuserPosts(id, cb) {
//     console.log("getting the user posts");
//     setTimeout(() => {
//         cb(["hello", "hyyy", "fack you"])
//     }, 2000);
// }

// getUser("harsh", function (data) {  
//     console.log(data);
//     getuserPosts(data.id,function(allposts){
//         console.log(data.username, allposts);
//     })
// })


// insta parse uniqe number la fir use uniquenum se tum jao meta parent company me jake tume aapni sari post leke aao

// function insgramseDatalao(username,cb){
//     console.log("fetchig the data........");
//     setTimeout(() => {
//         cb({uniquenumber:10,name:username})
//     }, 2000);
// }

// function postLao(uniquenumber,cb){
//     console.log("getting all the posts........");
//     setTimeout(() => {
//         cb(["img1","img2"])
//     }, 3000);
// }

// insgramseDatalao("harsh",function(data){
//     console.log(data);

//     postLao(data.uniquenumber,function(images){
//         console.log(images);
//     })
// })

// 4 . school me jao tumhara number lao fir tumko kis subjectme kitne marks meile hai wo leke aao sirse

// function schoolsenumberlao(name, cb) {
//     console.log("getting the number..");
//     setTimeout(() => {
//         cb({ rollno: 15 })
//     }, 1000);

// }

// function markslaosirse(rollno, cb) {
//     console.log("getting the marks..");
//     setTimeout(() => {
//         cb("[phy:97,chem:18,maths:99,sanskrit:22]")
//     }, 2000);
// }

// schoolsenumberlao("dhruval", function (data) {
//     console.log(data);
//     markslaosirse(data.rollno, function (marks) {
//         console.log(marks);
//     })
// })


// 5.aapka institute me jao usme course selct karo konsa course hai                                                                                                      

function instistuMejao(institute, cb) {
    console.log("getting the info...");
    setTimeout(() => {
        cb({ GRid: 10185, name: "dhruval", course: "FSD" })
    }, 1000);
}

function coursemejakeMarkslao(Grid, cb) {
    console.log("getting the marks...");
    setTimeout(() => {
        cb("[html:88||css:89||bootstrap:90||javascript:67]")
    }, 3000);
}

instistuMejao("redwhite", function (data) {
    console.log(data);
    coursemejakeMarkslao(data.Grid, function (marks) {
        console.log(marks);
    })
})