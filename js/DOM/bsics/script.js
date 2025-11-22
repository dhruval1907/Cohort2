let h1 = document.querySelector('h1')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

let counter = 0;

btn1.addEventListener("click", function () {
    counter++;
    h1.innerHTML = counter
})

btn2.addEventListener("click", function () {
    counter--;
    h1.innerHTML = counter
})