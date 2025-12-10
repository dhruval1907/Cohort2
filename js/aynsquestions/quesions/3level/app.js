// aapka laptop phele select karo fir us laptop ke service centre me jao konsa part badlana hai usko selcet karo fir send request karo

function laptopselcetkaro(laptop, cb) {
    console.log("getting the laptops...");
    setTimeout(() => {
        cb("[dell,lenovo,thinpad,macbook]")
    }, 1000);
}

function selectkaroLaptop(name, cb) {
    console.log("getting the specificee laptop info...");
    setTimeout(() => {
        cb("{id:10185,name:dell,model:inspiron}")
    }, 2000);
}

function kyaproblemhaiShowkaro(model, cb) {
    console.log("showing the problem...");
    setTimeout(() => {
        cb("[fan,ram,hardware,software]")
    }, 3000);
}

laptopselcetkaro(laptopselcetkaro, function (laptop) {
    console.log(laptop);
    selectkaroLaptop(laptop.name, function (info) {
        console.log(info);
        kyaproblemhaiShowkaro(info.model,function(problem){
            console.log(problem);
        })
    })
})
