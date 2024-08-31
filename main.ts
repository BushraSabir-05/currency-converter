#!/usr/bin/env node
import inquirer from "inquirer";
console.log("\n \t WELCOME TO CURRENCY CONVERTER \n" )

const currency: any ={
    //BASE CURRENCY
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    CAD:1.35,
    AUD:1.48,
    NZD:1.60,
    HKD:7.80,

};

let user_answer = await inquirer.prompt([
    {
        name:"from",
        message:"Enter What currency are you exchanging?", 
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR","CAD","AUD","NZD","HKD"]   
     },
     {
        name:"to",
        message:"Enter What currency do you want to receive?",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR","CAD","AUD","NZD","HKD"]   
     },
     {
        name:"amount",
        message:"Enter your amount",
        type:"number", 
     }
])    

let  fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));





















