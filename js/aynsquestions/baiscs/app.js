function instragramseDatalao(username,cb){
    cb({id:1,name:"harsh",age:21 })
}

instragramseDatalao("harsh",function(data){
    console.log(data);
    
})