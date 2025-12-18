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
    throttleFunction(() => {
        console.log("button is clicked");
    }, 500)
);



center.addEventListener("mousemove",function(dets){
    
})


