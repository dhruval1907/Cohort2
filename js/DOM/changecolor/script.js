let box = document.querySelector("#box")
let btn = document.querySelector("button")

btn.addEventListener("click", function () {

    let c1_1 = Math.floor(Math.random() * 255)
    let c1_2 = Math.floor(Math.random() * 255)
    let c1_3 = Math.floor(Math.random() * 255)

    let c2_1 = Math.floor(Math.random() * 255)
    let c2_2 = Math.floor(Math.random() * 255)
    let c2_3 = Math.floor(Math.random() * 255)

    box.style.background = `linear-gradient(135deg, 
            rgb(${c1_1},${c1_2},${c1_3}), 
            rgb(${c2_1},${c2_2},${c2_3})
        )`
})
