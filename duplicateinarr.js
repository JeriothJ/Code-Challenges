// Find Duplicate Element (if any)
// Example: nums = [1,2,3,2] → duplicate = 2.

let nums=[2,5,8,3,6,8,2,5,9,4],duplicate=[]

for(let i=0;i<=nums.length-1;i++){
    for(let j=i+1;j<=nums.length-1;j++){
        if(nums[i]==nums[j] && i!=j){
            duplicate.push(nums[i])
        }
    }
}
console.log(duplicate)