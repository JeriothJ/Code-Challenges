//Print the first n numbers in the Fibonacci sequence.

let num=9,j=1,a=0,b=1
while(j<=num){
    a+=b
    b+=a
    j++
    console.log(a,b)
}