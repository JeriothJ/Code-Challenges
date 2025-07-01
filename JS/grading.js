// To determine the grade of a student based on their score. The program should take the score as input and print the corresponding grade according to the following criteria:
// Score >= 90: A
// 80 <= Score < 90: B
// 70 <= Score < 80: C
// 60 <= Score < 70: D
// Score < 60: F

let Eng=90,Tam=96,Math=86,Sci=75,Soc=85
score=(Eng+Tam+Math+Sci+Soc)/5;

let grade=(score>=90) ? "A" : (score>=80 && score<90) ? "B" : (score>=70 && score<80) ? "C" : (score>=60 && score<70) ? "D" : "F";
console.log("Your grade is: "+grade)