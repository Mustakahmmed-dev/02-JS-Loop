// Write a loop 1 to 200. Use break to exit the loop once you find 100.
for(let i = 1; i <= 200; i++){
    if(i == 100){
        break;
    }
    // console.log("Century: ", i);
}

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let initVal = 1;
let sumVal = 0;
while(initVal){ //I can also use true in the parameter
    sumVal = sumVal + initVal;
    if(sumVal >= 100){
        break;
    }
    console.log("Sum val: ", initVal, " : ", sumVal);
    initVal++;
}
