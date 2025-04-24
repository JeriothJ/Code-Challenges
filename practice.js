// let val1=4,val2=8
// val3=val1+val2
// console.log(val3)

// val4="65"
// val5=val4+val3
// console.log(val5)

// val6=5,val7=6
// console.log(val6/val7)

// console.log(5==5)
// console.log(5===5)
// console.log(5=="5")//checks value
// console.log(5==="5")//checks datatype

// console.log(5!=5)
// console.log(5!==5)
// console.log(5!="5")
// console.log(5!=="5")

// console.log((5!="5")&&(5!=="5"))
// console.log((5!="5")||(5!=="5"))
// console.log((5!=5)&&(5!==5))
// console.log((5!=5)||(5!==5))

//exercise1
// let age=78;
// if(age<=12){
//     console.log("Ticket price is 5")
// }
// else if(age>12 && age<=18)
// {
//     console.log("Ticket price is 10")
// }
// else if(age<=60 && age>18)
// {
//     console.log("Ticket price is 20")
// }
// else
// {
//     console.log("Ticket price is 15")
// }

// //exercise2
// let avg=44;
// if(avg>=90){
//     console.log("Grade:A")
// }
// else if(avg<90 && avg>=80)
// {
//     console.log("Grade:B")
// }
// else if(avg<80 && avg>=70)
// {
//     console.log("Grade:C")
// }
// else if(avg<70 && avg>=50)
//     {
//         console.log("Grade:D")
//     }
// else
// {
//     console.log("Grade:F")
// }

// let i=10
// do{
//     console.log(i)
//     i-=1
// }
// while(i>=1)

// let n=1, mul=5
// do{
//     console.log(n+"*"+mul+"="+n*5)
//     n++
// }
// while(n<=10)

for(i=1;i<=10;i++){
    console.log(i)
}

let arr=["David","Sam","Arun","Asvi","Abi"]
console.log(arr.slice(1,3))

arr.splice(2,1,"Jeri")
console.log(arr)

for(let iter of arr){
    console.log(iter)
}
