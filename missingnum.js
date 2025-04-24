// Find the missing number from (  0 - n) 
// Example: nums = [0,1,3] → missing = 2

let nums=[0,1,3],missing=[]
for(let i=0;i<=nums.length-1;i++){
    if(nums[i]!=i){
        missing.push(i)
    }
}
console.log(missing)