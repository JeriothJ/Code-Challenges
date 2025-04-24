// Electricity Bill Calculator
// Write a program to calculate the electricity bill:
// ₹2/unit for first 100 units
// ₹3/unit for next 100 units
// ₹5/unit for 201–300 units
// ₹10/unit beyond 300 units
// Add 5% surcharge if total exceeds ₹2000

let units=500
if(units<=100){
    bill=units*2
    console.log(" Bill for "+units+" is "+bill)
}
else if(units<=200){
    bill=(100*2)+((units-100)*3)
    console.log(" Bill for "+units+" is "+bill)
}
else if(units>200 && units<=300){
    bill=(100*2)+(100*3)+((units-200)*5)
    console.log(" Bill for "+units+" is "+bill)
}
else if(units>300){
    bill=(100*2)+(100*3)+(100*5)+((units-300)*10)
    console.log(" Bill for "+units+" is "+bill)
}
if(bill>2000){
    bill=bill+(bill*0.05)
    console.log(" Bill for "+units+" is "+bill)
}