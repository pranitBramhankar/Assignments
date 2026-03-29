//named
function add(n1:number,n2:number):number{
    return n1+n2;
}

console.log(add(1,2));
//ananymous
let sum = function(no1:number,no2:number):number{
    return no1+no2;
}

console.log(sum(1,1));
//arrow
let s = (a:number,b:number) : number => {
    return a+b;
}

console.log(s(2,2));

//rest

function addNumber(...elements:number[]):number{
    let sum = 0;
    for(let i:number = 0; i<elements.length; i++){
        sum = sum + elements[i]!;
    }
    return sum;
}

//rest arrow - 
let restSumArrow = (...nums:number[]):number => {
    let sum:number = 0;
    for(let num of nums){
        sum = sum + num;
    }
    return sum;
}

console.log(addNumber(1,1,1,1,1,1,1,1,1,1));
console.log("Rest sum - arrow function",restSumArrow(10,20,30,40,50,60));

//optional value

let info = (name:string, gender?:string, age?:number) => {
    console.log("name ",name)
    console.log("gender ",gender)
    console.log("age",age)
}

info("pranit","mail",10);

let address = (name1:(string | number)) => {
    console.log((name1));
}

address("pranit");
address(10);

//default value function - 

let greet = (name : string) : void => {
    console.log(name);
}

let goodMorning = (callback : (msg : string) => void, slogan:string) => {
    callback(slogan);
}

goodMorning(greet,"Good Morning");