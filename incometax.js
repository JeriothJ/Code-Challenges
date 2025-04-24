// Write a program to calculate income tax based on the following slabs:
// No tax for income below ₹2.5L
// 5% tax for ₹2.5L–₹5L
// 10% for ₹5L–₹10L, and 12% extra for remaining amount
// 20% flat + surcharge for income above ₹10L

let income=30000000
if(income<250000){
    console.log("No tax")
}
else if(income>=250000 && income<500000){
    let tax=income*0.05
    console.log("Tax for "+ income +" is "+ tax)
}
else if(income>=500000 && income<1000000){
    let tax=income*0.1
    console.log("Tax for "+ income +" is "+ tax +" 12% for remaining amount ")
}
else{
    let tax=income*0.2
    console.log("Tax for"+ income +" is "+ tax +" Surcharge")
}