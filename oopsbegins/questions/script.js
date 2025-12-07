// object creattion and get the function
// let user = {
//     name: "dhruval",
//     email: "dhruvaldalwadi1907@gmail.com",
//     loggedIn: function () {
//         console.log("loggin");

//     }
// }
// user.loggedIn()

// 5 object creation with classsssssssssssss
// class Users{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     loggedIn(){
//         console.log("user loggedIn");
//     }
// }

// let u1 =new Users("dhruval","hdhrghi@gmail.com")
// let u2 =new Users("dhruvi","hdhi@gmail.com")
// let u3 =new Users("hasrh","hdhi@gmail.com")

//create product obj stores name,price and rerurn final discount

// let prt = {
//     pname : "cap",
//     price :3300,
//     discontPrice : function(){
//        return  this.price - 200;
//     }


// }

// console.log(prt.discontPrice())

// create a class with the speeed and   brand

// class Car{
//     constructor(speed,brand){
//         this.speed = speed
//         this.brand = brand
//     }

//     showCar(){
//         console.log(this.speed + "--- " + this.brand);
//     }
// }

// let c1 = new Car(120,"maruti")

// create s student class nd that accept the name and roll num

// class Students{
//     constructor(name,rno){
//         this.name = name;
//         this.rno = rno
//     }

//     introduce(){
//         return this.name  + "- "+ this.rno
//     }
// }

// let st1 = new Students("dhruval",1234)


// create a function and set the this valeu usig the bind

// function users(){
//     console.log(this.name );
// }

// let obj = {
//     name : "harsh"
// }

// users.call(obj)

// objcet laptop that contains brand,method ,start method 


// let laptop = {
//     name  : "latitude",
//     brand : "dell",
//     start : function(){
//         console.log("laptop started");
//     },
//     price : function(){
//         console.log("price increase by 10%");
//     }

// create a class that take name and slary 

// class Employee{
//     constructor(name,salary){   
//         this.name = name;
//         this.salary = salary;
//     }

//     showInfo(){
//         console.log(`the employee name is ${this.name} and salary isb ${this.salary}`);

//     }
// }

// let e1 = new Employee("dhruval",123456)
// let e2 = new Employee("dhruvi",1234)
// let e3 = new Employee("dhruvil",12456)


// create a clasas that taken accholdername and balance

// class BankAccont{
//     constructor(accHoldernm,balance){
//         this.accHoldernm = accHoldernm;
//         this.balance = balance;
//     }
//     deposit(){
//         return this.balance + 200;
//     }
// }

// let bank1 = new BankAccont('dhruval',1234)
// let bank2 = new BankAccont('dhruval',1234)

// create an objects and see the this value

// let namedprofile = {
//     username: "dhruval1907",
//     printName: function () {
//         console.log(this.username);

//     }
// }

// var namedprofile1 = {
//     username: "dhruval1907",
//     printName: function () {
//         console.log(this.username);

//     }
// }


// constructor function

// class Vehicle {
//     constructor(vehicle, wheel) {
//         this.Vehicle = vehicle;
//         this.wheel = wheel
//     }

//     Vehicle.prototype.describe = function () {
//         console.log(this.Vehicle + "- " + this.wheel);
//     }

// }

// let v1 = new Vehicle("toyota", "22 inch alloy")

// 
