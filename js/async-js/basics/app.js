// Create a function that returns a Promise which succeeds after 2 seconds and returns a message. How will you call it and print the result?

function success(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
             resolve("Promise resolved after " + time + " seconds");
        }, time * 1000)
    })
}


success(2)
.then(function(result){
    console.log(result)
})


// Make a Promise that has a 50% chance to resolve and 50% chance to reject. How will you handle both cases?
