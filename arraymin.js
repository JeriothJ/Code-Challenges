let arr=[5,6,85,7,84,51,6,1,3,5],min=arr[0]
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min)
