// Checkings Account 
// Variables and DOM
let checkingsAccountNum;
let checkingsAge;
let checkingsAccountNumOutput = document.getElementById("c-acct-num");
let checkingAccountAgeOutput = document.getElementById("c-acct-age");

// Checkings Balance and DOM
let checkingsBalance;
checkingsBalance = 2921.32;
let checkingsBalanceSpan = document.querySelector(".checkings-balance-box");
checkingsBalanceSpan.style.color = "#ffd900"
checkingsBalanceSpan.innerHTML = `Current Balance: $ ${checkingsBalance}`;

checkingsAccountNum = 2957448395;
checkingsAge = `433 Days`;
checkingAccountAgeOutput.innerHTML = checkingsAge;
checkingsAccountNumOutput.innerHTML = checkingsAccountNum;

// Checkings Account Styles
checkingAccountAgeOutput.style.color = "#ffd900";
checkingsAccountNumOutput.style.color = "#ffd900";

// Checkings Account Recent Transactions Sample
const recentTransBox = document.querySelector(".c-trans-content");


// Checkings Account Recent Transactions Format
