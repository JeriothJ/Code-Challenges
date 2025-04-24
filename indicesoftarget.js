// 1.Given an array of integer numbers and an integer target, return indices of the two numbers such that they add up to target. 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
let a=[2,3,8,9,1,4,6],target=11, index=[]
for(let i=0;i<=a.length-1;i++){
    for(let j=1;j<=a.length-1;j++){
        if(a[i]+a[j]==target){
            index.push(i,j)
        }
    }
}
console.log(index)
