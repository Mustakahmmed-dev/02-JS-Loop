// Output numbers from 1 to 20 using while loop
let num = 1;

while(num <= 20){
    // console.log("Number: ", num);
    num++;
}

let myCurrentNum = 1;
let sum = 0;
while(myCurrentNum <= 10){
    sum = sum + myCurrentNum;
    // console.log("Sum: ", sum);
    myCurrentNum++;
    
}

// Output even and odd numbers together
let currentNum = 1;

while(currentNum < 20){
    if(currentNum % 2 === 0){
        console.log("Even Num ", currentNum);
    }
    else{
        console.log("Odd Num ", currentNum);
    }
    currentNum++;
}