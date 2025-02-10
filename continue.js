// Task 1
// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers
for(let i = 1; i <= 40; i++){
    if(i % 2 === 1){
        continue;
    }
    // console.log("The continue val ", i);
}

// Task 2
// display odd number from 55 to 85 and skip the numbers divisible by 5.
for(let y = 55; y <= 85; y++){
    if(y % 2 === 1 && y % 5 !== 0){
        console.log("Odd number: ", y);
    }
}
