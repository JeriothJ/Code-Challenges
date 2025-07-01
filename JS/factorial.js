// Print the factorial of a given number using a loop.

function factorial(n){
    let i=1,j=1
    while(i<=n){
        j=j*n;
        n--;
    }
    console.log("Factorial of the number is "+j)
}
factorial(12)
