let h1 = document.querySelector('h1')
let main = document.querySelector("main")

h1.addEventListener("click", function () {
    h1.style.backgroundColor = "red"
    h1.style.color = "lightblue"
    h1.innerHTML = "i am batman"
})

main.addEventListener("mousemove", function () {
    h1.style.backgroundColor = "white"
    h1.style.color = "red"
    h1.innerHTML = "kese ho bhhai"
})

