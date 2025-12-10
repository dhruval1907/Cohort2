// // aapka laptop phele select karo fir us laptop ke service centre me jao konsa part badlana hai usko selcet karo fir send request karo

// function laptopselcetkaro(laptop, cb) {
//     console.log("getting the laptops...");
//     setTimeout(() => {
//         cb("[dell,lenovo,thinpad,macbook]")
//     }, 1000);
// }

// function selectkaroLaptop(name, cb) {
//     console.log("getting the specificee laptop info...");
//     setTimeout(() => {
//         cb("{id:10185,name:dell,model:inspiron}")
//     }, 2000);
// }

// function kyaproblemhaiShowkaro(model, cb) {
//     console.log("showing the problem...");
//     setTimeout(() => {
//         cb("[fan,ram,hardware,software]")
//     }, 3000);
// }

// laptopselcetkaro(laptopselcetkaro, function (laptop) {
//     console.log(laptop);
//     selectkaroLaptop(laptop.name, function (info) {
//         console.log(info);
//         kyaproblemhaiShowkaro(info.model,function(problem){
//             console.log(problem);
//         })
//     })
// })


// active lenahai to activa show karo sare konsa lena hai wo show karo kya selct kiya last me wo selct karo 

function vehicaleKonsalenahi(name, cb) {
    console.log("getting your dream bike");
    setTimeout(() => {
        cb({ active: "activa", bike: "bike", car: "car" })
    }, 1000);
}

function selctkaroKonsalenhai(specificename, cb) {
    console.log("getting your vehicle info");
    setTimeout(() => {
        cb({ name: "activa", g3model: 3, g4model: 4, g5model: 5, })
    }, 2000);
}

function selectionofVehicle(modelname, cb) {
    console.log("here's ur everything about vehicle");
    setTimeout(() => {
        cb({ model: "3model", price: 2345123, color: "color" })
    }, 3000);
}


function showingcolorintoActive(color, cb) {
    console.log("showing all the color.....");
    setTimeout(() => {
        cb("[black,white,grey]")
    }, 4000);
}

vehicaleKonsalenahi("vehicles", function (allvehicle) {
    console.log(allvehicle);
    selctkaroKonsalenhai(allvehicle.activa, function (activasss) {
        console.log(activasss);
        selctkaroKonsalenhai(activasss.g4model, function (mmodelinfo) {
            console.log(mmodelinfo);
            selectionofVehicle(mmodelinfo.g3model, function (alllinfo) {
                console.log(alllinfo);
                showingcolorintoActive(alllinfo.color, function (allcolors) {
                    console.log(allcolors);
                })
            })
        })
    })
})