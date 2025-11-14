let box = document.querySelector("#box")
let btn = document.querySelector("button")


btn.addEventListener("click",function(){
    // console.log("hello");
    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})