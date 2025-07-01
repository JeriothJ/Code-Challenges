// Count how many numbers from 1 to 100 are divisible by 7.

function div(num){
let count=0
for(let i=1;i<=num;i++){
    if(i%7===0){
        count++;
    }
}
console.log("Amount of numbers divisible by 7 between 1 to 100 is "+count);
}
div(100)
