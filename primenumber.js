//Print All Prime Numbers in a Range . Input two numbers, print all prime numbers between them.

let start=3,end=25
while(start<=end){
    if(start%start==0 && start%2!=0 && start%3!=0 && start%5!=0 || start==2 || start==3 || start==5){
        console.log(start)
    }
    start++
}