let nameArray:string[] = ["Suresh","Mahesh","Naresh"];
let marksArray:number[] = [75,80,82];
let updatedMarksArray:number[] = [];

//update marks
for(let i:number = 0; i<marksArray.length; i++){
    updatedMarksArray[i] = marksArray[i]! +10;
}

//print marks
console.log("Updated Marks :")
let sum:number=0;
for(let i:number = 0; i<marksArray.length; i++){
    console.log(nameArray[i]+":"+updatedMarksArray[i])
    sum = sum + updatedMarksArray[i]!;
}

//average of marks
let avg:number = sum/nameArray.length;
console.log("Average marks : "+avg)