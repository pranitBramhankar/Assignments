let sum = (...nums:number[]):number => {
    let sum:number = 0;
    for(let num of nums){
        sum = sum+num;
    }
    return sum;
}

let addition = (funSum : (...elements:number[])=>number, ...num:number[]) => {
    console.log(funSum(...num));
}

addition(sum, 1,2,3,4,5);

let multiplyNumbers = (n1:number,n2:number):void => {
    console.log(n1*n2);
}

let multiplication = (m : (n1:number, n2:number)=>void, a:number, b:number):void => {
    m(a,b);
}

multiplication(multiplyNumbers,2,2);

let divideNumbers = (n1:number, n2:number):number=>{

    return n1/n2;
}

let division = (d:(n1:number,n2:number)=>number, a:number, b:number) => {
    console.log("divison numbers ",d(a,b));
}

division(divideNumbers,2,2);