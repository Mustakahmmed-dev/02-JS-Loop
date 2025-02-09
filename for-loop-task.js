// Task 1
// Display a sentence for 60 times "I will invest at least 6 hrs every single day for next 60 days!"

for(let msg = 1; msg <= 60; msg++){
    // console.log(msg + ": I will invest at least 6 hrs every single day for next 60 days!");
}

// Task 2
// Find all the odd numbers from 61 to 100
for(let num = 61; num <= 100; num++){
    if(num % 2 === 1){
        // console.log("Odd num: ", num)
    }
}

// Task 3
// Find all the even numbers from 78 to 98
for(let evenNum = 78; evenNum <= 98; evenNum++){
    if(evenNum % 2 === 0){
        // console.log("Even Number is: ", evenNum);
    }
}

// Task 4
// Display the sum of odd numbers from 91 to 129

let sum =0;
for(let oddSum = 91; oddSum <= 129; oddSum++){
    if(oddSum % 2 === 1){
        sum = sum + oddSum;
        // console.log("The odd sum: ", sum);
    }
}

// Task 5
// Sum of the even numbers from 51 to 85

let initSum = 0;
for(let evenSum = 51; evenSum <= 85; evenSum++){
    if(evenSum % 2 === 0){
        initSum = initSum + evenSum;
        // console.log("The even sum is: ", initSum);
    }
}

// Task 6
// Generate a multiplication table for number 9

for(let multi = 1; multi <= 10; multi++){
    // console.log(multi * 9);
}

// Task 7
// Implement a countdown timer that counts down from 81 to 65.
for(let cDown = 81; cDown >= 65; cDown--){
    console.log("Remaning: ", cDown);
}