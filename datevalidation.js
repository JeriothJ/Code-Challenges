// Write a program that takes a date (dd/mm/yyyy) and checks if it's valid:
// Handle months with 30/31 days
// Handle February correctly including leap year logic

let day=15,month=2,year=2008
if(day<1 || day>31){
    console.log("Day is not valid")
}
else if(month<1 || month>12){
    console.log("Month is not valid")
}
else if(year<1000 || year>2026){
    console.log("Year is not valid")
}
else{
    if((month==1 || month==3 || month==5 || month==7 || month==9 || month==10 || month==12) && (day>=1 && day<=31)){
        console.log("Date is valid")
    }
    else if((month==4 || month==6 || month==8 || month==11)&&(day>=1 && day<=30)){
        console.log("Date is valid")
    }
    else if(month==2){
        if(year%4==0 && (day>=1 && day<=29)){
            console.log("Leap year date is valid")
        }
        else if(year%4!==0 &&(day>=1 && day<=28)){
            console.log("Non-Leap year date is valid")
        }
        else{
            console.log("Month is invalid")
        }
    }
}