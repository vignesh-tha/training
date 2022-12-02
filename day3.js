const customers = [ 
    { 
    "AccountNo": 1001, 
    "Name": "John", 
    "City": "Bangalore" 
    }, 
    { 
    "AccountNo": 1002, 
    "Name": "Tom", 
    "City": "Mysore" 
    }, 
    { 
    "AccountNo": 1003, 
    "Name": "Kate", 
    "City": "Pune" 
    }, 
    { 
    "AccountNo": 1004, 
    "Name": "Tom", 
    "City": "Delhi" 
    }, 
    { 
    "AccountNo": 1005, 
    "Name": "Kate", 
    "City": "Mumbai" 
    } 
   ]

   const transactions = [ 
    { 
    "Date": "12-01-2022", 
    "From": 1001, 
    "To": 1003, 
    "Amount": 15000 
    }, 
    { 
    "Date": "12-01-2022", 
    "From": 1003, 
    "To": 1002, 
    "Amount": 12000 
    }, 
    { 
    "Date": "12-01-2022", 
    "From": 1002, 
    "To": 1005, 
    "Amount": 2000 
    }, 
    { 
    "Date": "13-01-2022", 
    "From": 1003, 
    "To": 1001, 
    "Amount": 1000 
    }, 
    { 
    "Date": "13-01-2022", 
    "From": 1002, 
    "To": 1001, 
    "Amount": 1200 
    }, 
    { 
    "Date": "14-01-2022", 
    "From": 1001, 
    "To": 1002, 
    "Amount": 3000 
    }, 
    { 
    "Date": "14-01-2022", 
    "From": 1005, 
    "To": 1003, 
    "Amount": 1500 
    }, 
    { 
    "Date": "15-01-2022", 
    "From": 1005, 
    "To": 1003, 
    "Amount": 4000 
    } 
   ]
   
   function findDuplicateAccount(){
    let customerAccounts = []
    let duplicate = {}

    for(let customer of customers){
        let indexIs = customerAccounts.findIndex(item => item.Name === customer.Name)
        if(indexIs > -1){
            duplicate = customerAccounts[indexIs]
            break
        } else customerAccounts.push(customer)
    }
    console.log({"Duplicate is " : duplicate?.AccountNo || "No Duplicate"})
   }
//    findDuplicateAccount()

function calculateAccountBalance(){
    let accounts = []

    for(const customer of customers){
        let balance=0
        for (const transaction of transactions){
            if(transaction.From === customer.AccountNo){
                balance -= transaction.Amount
            } else if(transaction.To === customer.AccountNo){
                balance += transaction.Amount
            }
        
        }
        accounts.push({ account: customer.AccountNo, name: customer.Name, balance: balance})
    }
    console.log(accounts)
}

// calculateAccountBalance()

function findHighestTransfer(){
    let transferMore=0
    let transferMoreAccount=""
    for(const customer of customers){
        let transferred=0
        for (const transaction of transactions){
            if(transaction.From === customer.AccountNo){
                transferred+=transaction.Amount
            }
        }
        if(transferMore<transferred){
            transferMore=transferred
            transferMoreAccount=customer.AccountNo
        }
    }
    console.log("More tranferred from: "+transferMoreAccount+ ", the amount is "+transferMore)
}
// findHighestTransfer()

const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

async function main(){
    console.log("Connecting to MongoDB..!")
    await mongoose.connect(process.env.DBURL);
    
    console.log("Connected to MongoDB.")

    const app = express()

    app.listen(3003, () => console.log("Server started."))
}

main()