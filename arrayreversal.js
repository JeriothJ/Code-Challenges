// Reverse an Array
// Example: nums = [1,2,3] → [3,2,1]

let nums=[3,5,7,8,6,1],reverse=[]
let length=nums.length-1
for(let i=length;i>=0;i--){
    reverse.push(nums[i])
}
console.log(reverse)