let transaction:number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditCount:number = 0;
let debitCount:number = 0;
let creditAmount:number = 0;
let debitAmount:number = 0;
let countSuspaciousTrans:number = 0;

for(let amount of transaction){

    if(amount>0){
        creditCount++;
        creditAmount = creditAmount + amount;
        console.log("Credited++++++ Rs."+amount)
        if(amount>10000){
            console.log("suspacious transaction");
            countSuspaciousTrans++;
        }
    }else if(amount<0){
        debitCount++;
        debitAmount = debitAmount + amount;
                console.log("Debited------- Rs."+amount)
        if(amount<-10000){
            console.log("suspacious transaction");
            countSuspaciousTrans++;
        }
    }
}

console.log("Total credit transaction = "+creditCount);
console.log("Total debit transaction = "+debitCount);
console.log("Total Suspacious Transaction = "+countSuspaciousTrans);
console.log("Total credit amount = "+creditAmount);
console.log("Total debit amount = "+debitAmount);
console.log("Available balance Rs."+(creditAmount+debitAmount));