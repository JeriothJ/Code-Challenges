// Count how many even and odd numbers are between 1 and 100.

let odd=0;
let even=0;
for(let i=1;i<=100;i++){
    if(i%2===0){
        even++
    }
    else{
        odd++
    }
}
console.log("Odd numbers between 1-100:"+odd, "Even numbers between 1-100:"+even)