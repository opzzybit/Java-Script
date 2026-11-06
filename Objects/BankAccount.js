console.log("\t\t WELCOME TO OPZZY MOJ  BANK");


const bankAccount = {
    owner: "Toyin Opeyemi",
    balance: 0,
    deposit: function(amount){
        return bankAccount.balance + amount;
    }, 
    withdraw: function(amount){
        if (amount > this.balance){
            return "Insufficient Funds !!!"
        }
        else{
            return this.balance - amount;
        }    
    }, 
};

console.log(bankAccount)

let depositInput = 8000;
let withDrawInput = 800;

console.log("USERNAME : " , bankAccount.owner)
console.log("Balance : " , bankAccount.balance)

console.log()
console.log(`depositing...... ${depositInput} `)
console.log("Transaction successful")

console.log()
console.log(`Balance : ${bankAccount.deposit(depositInput)}`);
console.log()

bankAccount.balance = bankAccount.deposit(depositInput);

console.log(`withdrawing...... ${withDrawInput} `)
console.log("Transaction Processing")

console.log()
console.log(`Balance : ${bankAccount.withdraw(withDrawInput)}`)

bankAccount.balance = bankAccount.withdraw(withDrawInput);

console.log(bankAccount)

