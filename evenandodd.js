// 5. Number of Even and Odd Numbers in an Array
// Write a program to count the number of even and odd numbers in an array using loops and if-else conditions.

let a=[1,2,3,4,5,6,7,8,9,15,65,14], even=0,odd=0

for(let i=0;i<=a.length-1;i++){
    if(a[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log("Number of odd elements: "+odd)
console.log("Number of even elements: "+even)
