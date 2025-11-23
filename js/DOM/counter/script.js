var h1 = document.querySelector("h1")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    var c1 = Math.floor(Math.random()*100)

    // console.log(c1)
    h1.innerHTML = c1
})