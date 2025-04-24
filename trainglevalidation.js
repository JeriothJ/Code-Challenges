// Given three sides of a triangle, write a program to:
// Check if the sides form a valid triangle
// If valid, determine if the triangle is Equilateral, Isosceles, or Scalene
// Additionally, check if the triangle is Acute, Right, or Obtuse

let a=24,b=12,c=23
let x=a*a,y=b*b,z=c*c
if((a+b>c)&&(b+c>a)&&(c+a>b)){
    if((a===b)&&(b===c)&&(c===a)){
        console.log("This is an Equilateral Triangle")
    }
    else if((a===b)||(b===c)||(c===a)){
        console.log("This is an Isosceles Triangle")
    }
    else{
        console.log("This is a Scalene Triangle")
    }
    if((x+y==z)||(x+z==y)||(z+y==x)){
        console.log("This is a Right angled triangle")
    } 
    else if((x+y>z)||(x+z>y)||(z+y>x)) {
        console.log("This is an Acute angled triangle");
    }
    else{
        console.log("This is an Obtuse angled triangle")
    }
}
else{
    console.log("It is not a valid triangle")
}