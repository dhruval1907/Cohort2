var center = document.querySelector(".center")

const images = [
    image1 = `./le.jpg`,
    image2 = `./something.png`
]

const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
    let prev = 0;

    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

center.addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div")
        div.style.height = 270 +"px"
        div.style.width = 200 +"px"
        // div.style.backgroundColor = "red"
        div.style.position = "absolute"
        div.style.zIndex = 2
        div.style.left = dets.clientX + "px"
        div.style.top = dets.clientY + "px"
        div.style.overflow = "hidden"
        center.style.overflow = "hidden"
        console.log(div);
        var imgdiv= document.createElement("img")
        div.classList.add("img-box")

        // imgdiv.setAttribute("src","https://images.unsplash.com/photo-1764377723685-31e60ed8e550?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        let randomeimage = Math.floor(Math.random()*images.length)
        imgdiv.src = randomeimage;
        div.appendChild(imgdiv)
        document.body.appendChild(div)

        gsap.to(imgdiv,{
            y:"0",
            ease:Power1,
            duration:.6
        })
        gsap.to(imgdiv,{
            y:"100%",
            ease:Power2,
            delay:.6,
        })

        setTimeout(() => {
            div.remove()
        }, 2000);
        
    }, 500)


);



center.addEventListener("mousemove",function(dets){
    
})


