/*  primitive  - 7 types  callbyvalue 
Number ,string ,boolean ,null ,undefined ,BigInt ,symbol 

Non Primitive - Reference Type
Array, Objects , Functions

JavaScript is a dynamically typed language
*/

 const score = 100
 const scoreValue = 100.35
 const isLoggedIn =false
 const outsideTemp =null
 let userEmail
 const id =Symbol('123')
 const anotherId = Symbol('123')

 console.log(id=== anotherId)

 const BigNumber =3456789345678346788n

 // Arrays

 const heros =["shaktiman","naagraj","doga"]
 let myObj={
    name:"shivasai",
    age: 22
 }

 const myFunction=function() {
    console.log("hello world");
 }
 myFunction()

 console.log(typeof myFunction);
 console.log(typeof myObj);
 console.log(typeof BigNumber);
 console.log(typeof heros);
 console.log(typeof id);
 console.log(typeof outsideTemp);
