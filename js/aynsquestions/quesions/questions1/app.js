function afterDelay(time, cb) {
    console.log("fetching the data...");
    setTimeout(() => {
        cb("callback executed.....")
    }, time);

}

afterDelay(2000, function (data) {
    console.log(data);
})
