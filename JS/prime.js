// Print only the prime numbers from 1 to 50.

for(let n=2;n<=50;n++){
    let prime=true;
    for(let i=2;i<n;i++){
        if(n%i===0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log(n);
    }
}