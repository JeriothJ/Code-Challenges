// Write a function that takes an integer n and returns a 1-indexed list of strings with the following rules:
// For every integer i from 1 to n (inclusive):
// If it is divisible by both 3 and 5, include "FizzBuzz" in the list.
// If i is divisible by only 3, include "Fizz" in the list.
// If i is divisible by only 5, include "Buzz" in the list.
// If none of the above conditions are met, include the string representation of the integer i.

let n=15,i=1,list=[]
while(i<=n){
    if(i%3==0 && i%5==0){
        list.push("FizzBuzz")
    }
    else if(i%3==0){
        list.push("Fizz")
    }
    else if(i%5==0){
        list.push("Buzz")
    }
    else{3
        list.push(i)
    }
    i++
}
return list;

