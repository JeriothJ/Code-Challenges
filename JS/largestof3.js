// To find the largest among three numbers entered by the user 89,98,101.

let n1=89, n2=98, n3=101;
if(n1>n2){
    if(n1>n3){
        console.log("Largest among the three numbers is: "+n1)
    }
    else{
        console.log("Largest among the three numbers is: "+n3)
    }
}
else{
    if(n2>n3){
        console.log("Largest among the three numbers is: "+n2)
    }
    else{
       console.log("Largest among the three numbers is: "+n3) 
    }
}


// let n1=89,n2=98,n3=101;
// let largest=n1>n2 ? (n1>n3 ? n1:n3):(n2>n3 ? n2:n3);
// console.log("Largest among the three numbers is: " + largest);