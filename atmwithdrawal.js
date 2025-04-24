// Write a program to simulate ATM withdrawal:
// Amount must be a multiple of 100
// Minimum withdrawal = ₹200, maximum = ₹20,000
// If amount > ₹5000, add a ₹100 service charge
// Check if balance is sufficient

let amount=600,balance=50000
if(amount%100==0){
    if(amount>=200 && amount<=20000){
        if(amount>=5000){
            let remaining=balance-(amount+100)
            console.log("Balance is "+ remaining)
        }
        else{
            let remaining=balance-amount
            console.log("Balance is "+ remaining)
        }
    }
    else{
        console.log("Insufficient balance")
    }
}
else{
    console.log("Amount should be multiples of 100")
}
