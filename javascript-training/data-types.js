//premitive data type

//1. Number - 
let n1 = 10;
let n2 = 10.10;
let n3 = n1+n2;

console.log(n3);
console.log(typeof n2);

//2.string
//string can store in below three ways. double inverted, single inverted and backtick(Usuallly use for dynamic element passing in string)
let s1 = "pranit";
let s2 = 'dhiraj';
let s3 = `bramhankar`;
console.log(s3);

//3. boolean - 
let isVisible = true;
let isDisplayed = false;
if(!isVisible){
    console.log("This is visible");
}else if(!isDisplayed){
    console.log("This is Displayed");
}

//4. null- 
let x = null;
const y = null;

//5. undefined - 
let x1;
const y1 = undefined;
var z1;

console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z1);
x1 = 10;
z1 = 's';
console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z1);

//6. symbol
//Non-premitive data type
//1. object

let person = {

    name : "pranit",
    address : [{village : "Jaikheda", Post:"jaikheda"}, {Tq : "Satana"}, {dist : "Nashik"}],
    pin : 423303,
    phoneNumber : [7767928886, 9422094836, 8381088089],
};
console.log("++++++++++++++++++++++ Object data type in javascript +++++++++++++++++++++")
console.log(person.name);
console.log(person.address[0].village);
console.log(person.address[0].Post);
console.log(person.address[1].Tq);
console.log(person.address[2].dist);
console.log(person.pin);
console.log(person.phoneNumber+"**************");
console.log(person["name"]);

//2. array
let array1 = ["Yogesh",2,10,"bramhankar",10.12,null,undefined];
console.log("#####################Array")
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);

//function
let accBalance = function getaccountBalance(){
    console.log("Your account balance is - ");
    let balance = 10000;
    return balance;
}

console.log(accBalance);
let browser = "edge";

function launchBrowser(browser){
    console.log(`Launching ${browser} browser`);
}

launchBrowser(browser);

function launchURL(url){
    console.log(`launching ${url} `)
}
launchURL("www.google.com");


// set - collection of unique values, preserved storing order

let testSet = new Set();
testSet.add("1234");
testSet.add("Pranit");
testSet.add("Dhiraj");
testSet.add("dhiraj");
testSet.add("dhiraj");
testSet.add("1234");
console.log(testSet);

console.log(testSet.has("1234"));
console.log(testSet.has("123"));
console.log("****************************************************");
for(let ele of testSet){
    console.
    log(ele);
}

//remove value - 
testSet.delete("dhiraj");
console.log(testSet);
console.log(testSet.size);

//map - preserved order, can store object and functions as key, unique allow, duplicate values allow.
const testMap = new Map();

testMap.set(1,"Pranit");
testMap.set(1,"Dhiraj");
testMap.set(2,32);
testMap.set(3,true);
testMap.set(4,"Advik");
console.log(testMap);

//for each
testMap.forEach((value,key) => {
    console.log(`${key} - ${value}`);
});

//for .... of
for(const [key,value] of testMap){
    console.log(key, value);
}

console.log(testMap.get(1));
testMap.delete(3);
for(const [key,value] of testMap){
    console.log(key, value);
}
testMap.set(3,"Pranit");
for(const [key,value] of testMap){
    console.log(key, value);
}

//date - 

let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());


