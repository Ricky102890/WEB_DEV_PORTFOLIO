// Checkings Account 
// Variables and DOM
// let checkingsAccountNum;
// let checkingsAge;
// let checkingsAccountNumOutput = document.getElementById("c-acct-num");
// let checkingAccountAgeOutput = document.getElementById("c-acct-age");

// Checkings Balance and DOM
// let checkingsBalance;
// checkingsBalance = 2921.32;
// let checkingsBalanceSpan = document.querySelector(".checkings-balance-box");
// checkingsBalanceSpan.style.color = "#ffd900"
// checkingsBalanceSpan.innerHTML = `Current Balance: $ ${checkingsBalance}`;

// checkingsAccountNum = 2957448395;
// checkingsAge = `433 Days`;
// checkingAccountAgeOutput.innerHTML = checkingsAge;
// checkingsAccountNumOutput.innerHTML = checkingsAccountNum;

// Checkings Account Styles
// checkingAccountAgeOutput.style.color = "#ffd900";
// checkingsAccountNumOutput.style.color = "#ffd900";

// Checkings Account Recent Transactions Sample
// const recentTransBox = document.querySelector(".c-trans-content");


// Checkings Account Recent Transactions Format


// Navigation Menu / Sub Menu
function showNav() {
    const navbar = document.getElementById('navbar');
    const close_icon = document.getElementById('close_nav_icon');
    const ham_btn = document.getElementById('ham_btn');
    ham_btn.addEventListener('click', () => {
        if (ham_btn.getAttribute = 'false') {
            ham_btn.setAttribute('aria-expanded', 'true');
            ham_btn.classList.add('rotate_trans');
        }
    })
    close_icon.addEventListener('click', () => {
        ham_btn.setAttribute('aria-expanded', 'false');
        ham_btn.classList.remove('rotate_trans');
    })
}
showNav();