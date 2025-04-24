//Write a program to take marks of 5 subjects and determine the grade:
// If all marks are above 50 and the average is above 75, print "Grade A+"
// If at least 3 subjects are above 50 and the average is above 60, print "Grade B"
// Otherwise, print "Fail"

let English=99,Tamil=91,Maths=96,Science=95,Social=62
let avg=(English+Tamil+Maths+Science+Social)/5,count=0
if(English>50)count++
if(Tamil>50)count++
if(Maths>50)count++
if(Science>50)count++
if(Social>50)count++
if(avg>=75 && count==5){
    console.log("Grade A+")
}
else if((avg>=60 && avg<75)&&(count>=3)){
    console.log("Grade B")
}
else{
    console.log("Fail")
}