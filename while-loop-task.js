// Task 1
// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
let commitment = 1;
while(commitment <= 60){
    // console.log(commitment, " I will invest at least 6 hrs every single day for next 60 days!")
    commitment++;
}

// Task 2
// Find all the odd numbers from 61 to 100.
let initOdd = 61;
while(initOdd <= 100){
    if(initOdd % 2 === 1){
        // console.log("The odd num: ", initOdd);
    }
    initOdd++;
}

// Task 3 
// Find all the even numbers from 78 to 98.
let initEven = 78;
while(initEven <= 98){
    if(initEven % 2 === 0){
        console.log("The even num: ", initEven);
    }
    initEven++;
}

// Task 4
// Display sum of all the odd numbers from 81 to 131.
let oddSum = 0;
let oddSumInit = 81;
while(oddSumInit <= 131){
    if(oddSumInit % 2 === 1){
        oddSum = oddSum + oddSumInit;
        console.log("odd Sum: ", oddSum);
    }
    oddSumInit++;
}