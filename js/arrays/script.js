let arr = [10,20,30,40,50]; 

arr.push(10);
arr.pop();
arr.shift(10);
arr.unshift(60);
// arr.splice(2,2);
// let newarr  = arr.slice(0,2)

arr.reverse();
arr.sort(function(a,b){
    return a - b;
})

arr.forEach(function(val){
    val + 20;
    console.log(val);
})
