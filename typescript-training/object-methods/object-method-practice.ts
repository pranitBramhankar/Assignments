interface personInfo {
    name : string,
    midName: string,
    sirname: string,
    address : {
        village: string,
        tq: string,
        dist: string,
        pin: number,
    },
    phonNo: number,
    degrees : string[],
    role ?: any;
}

let person : personInfo = {
    name : "pranit",
    midName: "sanjay",
    sirname: "bramhankar",
    address : {
        village: "jailheda",
        tq: "Satana",
        dist: "nashik",
        pin: 423303,
    },
    phonNo: 7767928886,
    degrees : ["Automobile Engineering","mechanical Engineering","Software Engineering"],
};

//accessing object elements
console.log(person.address);
console.log(person.address["village"]);
console.log(person.degrees[1]);
console.log(person["sirname"]);

//Adding new property
person.role ="Software engineer in test";

//update object info
person.phonNo = 9422094836;
person.degrees[3]="Agriculture";
person.address.tq="Baglan";
console.log(person);

//delete 
delete person.degrees[2];
console.log(person.degrees[2]);

//perticular property avaialble or not
console.log("name" in person);
console.log("tq" in person.address);
console.log("sirname" in person);
console.log("degrees" in person);

//get all the keys from object
console.log(Object.keys(person));
console.log(Object.keys(person.address));

//get all the values from object
console.log(Object.values(person));
console.log(Object.values(person.address));

//get all the entries from onject
console.log("get all the entries from onject")
console.log(Object.entries(person));

//print object values
for(let key in person){
    console.log(key+" "+key as keyof personInfo)
}
for(let key in person){
    console.log(key+" "+person[key as keyof personInfo])
}

//12. Merge two different objects together. 
interface projectInfo {
    projectName: string,
    projectId:number
}

let project:projectInfo={
    projectName : "Amazon",
    projectId : 1234
}

let mergedObject = {...person,...project};
console.log(mergedObject);

//typeOf

console.log(typeof mergedObject.projectName);
console.log(typeof person.address.pin);

