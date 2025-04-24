// Count Even and Odd Numbers
//Example: nums = [1, 2, 3, 4, 5] → even = 2, odd = 3

let arr=[1,6,8,41,85,7,52,46,96],even=0,odd=0
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log("Even count is: "+even+" Odd count is: "+odd)