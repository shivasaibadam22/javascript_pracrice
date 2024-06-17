let a=20
var b=1
const c=11
console.log("value of a:" +a)
console.log("value of b:"+b)
console.log("value of c:"+c)
{
    let a=30
    var b=2
    const c=12
    console.log("block value of a:"+a)
    console.log("value of b in block:"+b)
    console.log("value of c in block:"+c)
}
var b=3 //reinitializing in same scope is possible
//c=13          //const c=13 reinitializing doesnt allow
console.log("redeclared in same block:"+b)
a=40       //let a=40 re declaring causes error
console.log("reassigned in same block:"+a)
console.log("value of c:"+c)
function fun()
{
    let a=50
    var b=4
    const c=14
    console.log("a value in function:"+a)
    console.log("value of b in function:"+b)
    console.log("value of c in function:"+c)
}
fun()

 