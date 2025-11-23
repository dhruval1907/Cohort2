var btn = document.querySelector("button")
var box = document.querySelector("#box")

btn.addEventListener("click",function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    var c1_1 = Math.floor(Math.random()*256)
    var c2_1 = Math.floor(Math.random()*256)
    var c3_1 = Math.floor(Math.random()*256)
    // console.log(c1);

    box.style.background = `linear-gradient(150deg,rgb(${c1},${c2},${c3}),
    rgb(${c1_1},${c2_1},${c3_1}))`
    
})