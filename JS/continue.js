// Print all numbers from 1 to 50, but skip numbers divisible by 4.

for(let i=1;i<=50;i++){
    if(i%4===0){
        continue;
    }
    console.log(i);
}