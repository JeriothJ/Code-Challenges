// Second Largest Element
// Example: nums = [12, 35, 1, 10, 34, 1] → Output: 34

// let nums=[1,6,8,7,9,4,2,3]
// for()

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(11,8))


//Callback function
function sum(a,b){
    return a+b;}
    
    function subtract(a,b){
    return a-b;}
    
    function main(a,b,back){
        console.log(a,b)
    return back(a,b)}
    
    console.log(main(5,6,sum))
   console.log(main(8,3,subtract)) 


//map function
   let arr=[1,2,3,4,5]
   let mul=arr.map(iter=>{
    return iter*5
   })
console.log(mul)