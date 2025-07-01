// FizzBuzz:
// For numbers 1 to 50:
// Print "Fizz" if divisible by 3
// Print "Buzz" if divisible by 5
// Print "FizzBuzz" if divisible by both

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
}
