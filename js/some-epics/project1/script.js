var center = document.querySelector(".center")

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
        div.style.backgroundColor = "red"
        div.style.position = "absolute"
        div.style.zIndex = 2
        div.style.left = dets.clientX + "px"
        div.style.top = dets.clientY + "px"
        div.style.overflow = "hidden"
        center.style.overflow = "hidden"
        console.log(div);
        
        document.body.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 2000);
        
    }, 500)
);



center.addEventListener("mousemove",function(dets){
    
})


