let fruits : string[] = ["Apple","Strawberry","Grapes"];
let prices : number[] = [100,120,140];
let fruitAndPrices : (string|number)[] = ["Apple",100,"Strawberry",120,"Grapes",140];

console.log(fruits);
console.log(prices);
console.log(fruitAndPrices);

//access element - 
console.log("access element -***************************************************")
console.log(fruits.length);
console.log(fruits[2]);

//adding additional value at end
fruits.push("Banana");
prices.push(60);
fruitAndPrices.push("Banana",60);
console.log(fruits);
console.log(prices);
console.log(fruitAndPrices);

//removing values at end
console.log("Removing values at end *****************************************")
fruits.pop();
console.log(fruits);
prices.pop();
console.log(prices);
fruitAndPrices.pop();
fruitAndPrices.pop();
console.log(fruitAndPrices);

//Add value at beginning
fruits.unshift("waterMelon","MuskMellon");
console.log(fruits);

//remove elements at beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

//remove elements from specific indexed and total elements from that index.

fruits.push("Banana","Mango","watermelon");

console.log(fruits);
console.log("**********************************Splice**************************");
fruits.splice(1,2);
console.log(fruits);
fruits.push("Banana","guava","muskmelon");
console.log(fruits);
fruits.splice(2,3,"Tomato","kakadi","Batata","vange");
console.log(fruits);

//returns specific elements in array form from an array
//slice(Start index, end index+1)

console.log(fruits.slice(2,6));
console.log(fruits);
let vegies : string[] = fruits.slice(2,6);
console.log(vegies);
console.log(fruits);

//iterating over elements - for each

console.log("*************************For Each ******************************")

fruitAndPrices.forEach((element) => {
    console.log(element);
});
fruits.forEach((fruit)=>{
    console.log(fruit);
});
prices.forEach((price) => {
    console.log(price);
});
console.log("for of loop") //use for all data structure
for(let fp of fruitAndPrices ){
    console.log(fp);
}
console.log("for in loop") //use for object
for(let f in fruitAndPrices){
    console.log(f);
}

//map()
console.log("Map************************************************************")
//map returns array.
let a:number[] = [1,2,3,4,5,6,7,8,9,10];

let square : number[] = a.map((num) => num*num);

square.forEach((sq)=>{ console.log(sq)} );
let sum:number = 0;
let totalprice : number[] = prices.map((element)=>sum=sum+element);
console.log("*************************88888")
for(let s of totalprice){
    console.log(s);
}

//filter - if condition is tested and if passed then store in another array.
let filterOut:number[] = a.filter((num)=>num%2==0);
console.log(filterOut);

console.log(prices.filter((p)=>p>100));

//sort
console.log("****************sort")
let s:number[]=[90,10,20,80,70,99,22];
s.sort((a,b)=>a-b); //ascending order
console.log(s);
s.sort((a,b)=>b-a); //descending order
console.log(s);

//reverse tha values within array
console.log("Reverse");
a.reverse();
console.log(a);
square.reverse();
console.log(square);

//find index of element by value
console.log("index of_______________________----------------------------");
console.log(fruits);
console.log(fruits.indexOf("guava"));
console.log(prices.indexOf(140));

let cArray : string[] = ["x","y","z"];
let testConcat : string[] = fruits.concat(cArray);
console.log(testConcat);

