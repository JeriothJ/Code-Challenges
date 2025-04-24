// 4.Fibonacci Sequence (Using Loops)
// Write a program to print the Fibonacci sequence up to n numbers using a loop.

let limit=5,a=0,b=1,total=0
console.log(a,b)
for(let i=0;i<=limit;i++){
    total=a+b
    console.log(total)
    a=total
    b=a
}



