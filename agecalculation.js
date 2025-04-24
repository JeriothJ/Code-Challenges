// Write a program to classify a person’s age into categories:
// Infant (<1), Child (1–12), Teen (13–19), Adult (20–59), Senior (60–75), Super Senior (>75)

let age=78
if(age<=1){
    console.log("You're an Infant")
}
else if(age>1 && age<=12){
    console.log("You're a Child")
}
else if(age>=13 && age<=19){
    console.log("You're a Teen")
}
else if(age>=20 && age<=59){
    console.log("You're an Adult")
}
else if(age>=60 && age<=75){
    console.log("You're a Senior")
}
else{
    console.log("You're a Super Senior")
}