// let heading = document.getElementsByTagName("h1");
// console.log(heading[0]);
// heading[0].style.color = "darkgoldenrod";
// function handleClick(){
//     alert("clicked");
// }
/**************************************************************************************************** */
/** types of variables **/
// var a = 45;
// a;
// typeof a; // number
// a = 67;
// a; // prints 67

//  let a = 3;
//  a;
//  a = 33; //prints 33
// typeof a; // number

// const a = 44;
// a;
// a = 99; //signment to constant variable.

// a;
/**************************************************************************************************** */
/** string literal**/
// let name = 'Rajesh Singh';
// let age = 30;
// console.log("the name is "+name+"and age is "+age);
// // prints the name is Rajesh Singhand age is 30
// console.log(`the name is${name} and age is ${age}`);
// // prints the name isRajesh Singh and age is 30
/**************************************************************************************************** */
/** array and objects**/

// Normal for loop
// let array = [1,2,3,4,5];
// for(let i=0;i<array.length;i++){
//    // console.log(array[i]);
//     alert(array[i]);
// }


// for-Of loop
// let array = [1,2,3,4,5];
// for(let element of array){
//     console.log(element);
// }
 
//  for in loop
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"







// Objects accessing
// let student = {
//     name:"rajesh",
//     age:30,
//     subjects:['js','html','css']
// };
// console.log(student.name);  //rajesh
// console.log(student.age);   //30
// console.log(student.subjects);  //['js', 'html', 'css']
// console.log(student.subjects[0]);  //js

// taking user Input
// let student = {
//      name:"rajesh",
//      age:30,
//      subjects:['js','html','css']
//  };
//  while(true){
//    let userInput=prompt("enter your query!");
//    if(userInput === 'exit'){
//     break;
//    }
//    alert("you asked for " + student[userInput]);
//  }

// switch case 
// let shape = 'red';
// switch (shape) {
//   case 'square':
//     console.log("This shape is a square.");
//     // Fall-through, since a square is a rectangle as well!
//     break;
//   case 'rectangle':
//     console.log("This shape is a rectangle.");
//     break;
 
//   case 'quadrilateral':
//     console.log("This shape is a quadrilateral.");
//     break;
//   case 'circle':
//     console.log("This shape is a circle.");
//     break;
//   default:
//     console.log("Unknown shape.");
// }


// let marks = 55;
// switch (true) {
//   case marks >= 80:
//     console.log("Distinction");
//     break;
//   case marks <= 80 && marks >= 70:
//     console.log("Fc");
//     break;
 
//   case marks <= 70 && marks >= 60:
//     console.log("Sc");
//     break;
//   case marks <= 60 && marks >= 50:
//     console.log("Tc");
//     break;
//     case marks <= 50 && marks >= 0:
//         console.log("Fail")
//         break;
//   default:
//     console.log("Not valid");
// }


/**************************************************************************************************** */
// Normal function

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,4));

// function inside object
// let nameS = 'emon';
//  let student ={
//     name:'rajesh',
//     age:30,
//     printName:function(){
//         console.log(`mr ${student.name}`); //mr rajesh
//         console.log(`mr ${this.name}`); //mr rajesh to access name inside the object use this keyword;
//         console.log("mr "+nameS); //mr emon this is printing the variable outside the object;
//         console.log("mr rajesh");   //mr rajesh
   
//     }

//  }
//  student.printName();

// adding properties to object later on;
//    student.fatheName = "raaj";
//    console.log(student.fatheName); // raaj
//    console.log(student);//    {name: 'rajesh', age: 30, fatheName: 'raaj', printName: ƒ};
//    student.printAge = function(){
//     console.log("my age is "+this.age)
//    }
//    student.printAge();
// newly added keys are fatheName and printAge are now inside the object student;

// function expression ;
// let printHello = function (){
//     console.log("hello guys!");
// }
// printHello();

/**************************************************************************************************** */
//hoisting of var rather than let and const
// function printNumber(){
//     console.log(number);
//     var number = 45;
// }
// printNumber();
// this prints (undefined) as var is hoisted into local scope and is assigned a value of undefined;


// function printNumber(){
//     console.log(number);
//     let number = 45;
// }
// printNumber();
 // number here is also undefined in local but not accessible;
// Uncaught ReferenceError: Cannot access 'number' before initialization
 
// function printNumber(){
//     console.log(number);
//     const number = 45;
// }
// printNumber();
 // number here is also undefined in local but not accessible;

// Uncaught ReferenceError: Cannot access 'number' before initialization

/**************************************************************************************************** */
//function hoisting
// printHello();
// function printHello(){
//     console.log("hello");
// }
// prints hello into console yet its defined later;
 
// function inside function
// function test(){
//     printHello();
//     function printHello(){
//         console.log("hello");
//     }

// }
// test();

/****************************************16 april 2024************************************************************ */
// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
    
//     setTimeout(f1, 0);
    
//     f2();
// }

// main();
/******************************************************/
// function f1(){
//     console.log("f1");
// }

// function f2(){
//     f1();
//     console.log("f2");
// }

// function f3(){
//     f2();
//     console.log("f3");
// }
// f3();
/******************************************************/
/*DIFF BW '==' && '==='*/

// console.log(2 == '2');
// console.log(2 === '2');
// console.log( Symbol('symbol'));
// console.log(typeof(null));
/******************************************************/
/*HOISTING*/

/*I CASE*/
// hoistedVariable = 3;  // initialized;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable; //declare;

/*II CASE*/
// hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

// function hoistedFunction(){ 
//   console.log(" Hello world! ");
// } 

/*III CASE*/
// Hoisting takes place in the local scope as well
// function doSomething(){
//     //debugger
//   x = 33;
//   console.log(x); // logs the value 33
//   var x;
// } 

// doSomething();
/******************************************************/
/*TDZ --- TEMPORAL DEAD ZONE*/
/*I CASE*/
 // console.log(myVar); // Throws ReferenceError: Cannot access 'myVar' before initialization
 // let myVar= 10;

/*II CASE*/
 // let myVar= 10;
 // console.log(myVar); // 10

/*III CASE*/

 // console.log(myVar); //Uncaught ReferenceError: myVar is not defined
 // let myVar;
 //  myVar= 10;

/*OR*/
 // myVar= 10;
 // console.log(myVar); // Throws ReferenceError: Cannot access 'myVar' before initialization
 // let myVar;

/*OR*/
 // let myVar;
 // myVar= 10;
 // console.log(myVar); // 10


/*IV CASE*/
 // console.log(myVar); // first Undefined and later 10;
 // var myVar= 10;

/*V CASE*/
// function example() {
//  console.log(myVar); //Uncaught ReferenceError: Cannot access 'myVar' before initialization
//   let myVar = 10;
   
// }
// example();

/*VI CASE*/
// function example() {
 
//   let myVar = 10;
// console.log(myVar); //10
// }
// example();

/*VII CASE*/
// function example() {
 
  
// console.log(myVar); //undefined
// var myVar = 10;
// }
// example();

/*VIII CASE*/
// function example() {
//   console.log(myVar); //undefined
//   var myVar ;
//   myVar = 10;
// }
// example();

/*IX CASE*/
// function example() {
//    myVar = 10;
//   console.log(myVar); //10
//   var myVar ;
  
// }
// example();
/******************************************************/
/*COERCION*/

/*I CASE*/
// var x = 1;
// var y = '1';
// console.log(x-y); // 0

/*II CASE*/
// var x = 1;
// var y = 'stome';
// console.log(x-y); //NaN

/*III CASE*/
// var x = 1;
// var y = '1';
// console.log(x+y); // 0

/******************************************************/
/*DATA TYPES IN JS PRIMITIVE AND NON-PRIMITIVE*/
//All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

/*PRIMITIVE*/
// console.log(typeof "John Doe") // Returns "string"
// console.log(typeof 3.14) // Returns "number"
// console.log(typeof true) // Returns "boolean"
// console.log(typeof 234567890123456789012345678901234567890n )// Returns bigint
// console.log(typeof undefined) // Returns "undefined"
// console.log(typeof null )// Returns "object" (kind of a bug in JavaScript)
// console.log(typeof Symbol('symbol'))// Returns Symbol

/*NON PRIMITIVE*/
// Collection of data in key-value pairs

// var obj1 = {
//    x:  43,
//    y:  "Hello world!",
//    z: function(){
//       return this.x;
//    }
// }
      
// Collection of data as an ordered list
     
//var array1 = [5, "Hello", true, 4.1]; 
/******************************************************/
/********************************************************************************************* */

/********************************************************************************************* */

