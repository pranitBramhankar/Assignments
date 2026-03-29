// var
var b; // Not initialized
console.log(b);
var b = 10;// reassign and redeclare

// var declared variable have full scope can access 

function testFunction(){
     b = 20;
}
testFunction();
console.log(b);

console.log("*********************************************");
//let
let a;
console.log(a);
//let a =20; //cant re declare.
a = 1; // can be reassign
console.log(a);

function test1(){
    let x=2;
}
test1();
x = 2;
console.log(x);
console.log("*********************************************");

  //cant reassigne and redeclare, have to initialize during declaration
// const PI = 30; cant reassigne and redeclare


function test2(){
    const PI=10;
    console.log(PI);
}
test2();
//console.log(PI); will thrown error
