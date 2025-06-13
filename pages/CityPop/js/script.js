// Global Variables
let showContent = document.getElementById("showContent");
let loginContent = document.querySelector(".join-container");
let registerContent = document.querySelector(".register-container");
const registerBtn = document.getElementById("register-button");
const returnBtn = document.getElementById("return-btn");
let user = {
    username: "",
    password: "",
    profilePic: ""
}

let username = document.querySelector(".join-user-input").value;
let userPass = document.querySelector(".join-pass-input").value;


// Scroll Behavior
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Button Behaviors
showContent.addEventListener("click", (e) => {
    if (e.target !== showContent) {
        loginContent.style.display = "none";
    }
    loginContent.classList.toggle("show-login");

        })

registerBtn.addEventListener("click", () => {1
    registerContent.classList.toggle("show-register");

        })
returnBtn.addEventListener("click", () => {
    registerContent.classList.toggle("show-register");
})

// Sign Up Behaviors

function registerInfo() {
    let firstName = document.getElementById("fName");
    let lastName = document.getElementById("lName");
    let middleName = document.getElementById("mName");
    let dateOfBirth = document.getElementById("dob");
    let email = document.getElementById("regEmail");
    let telephoneNum = document.getElementById("tel");
    let usernameReg =document.getElementById("newUser");
    let passwordReg = document.getElementById("newPass");

    let accountDivCont = document.createElement("div");
    let accountUsername = document.createElement("h2");
    let accountImage = document.createElement("img");
    let accountInfo = document.createElement("p");
    let accountInfoCont = document.createElement("div");
    let accountLinkBtn = document.createElement("button");
    let accountLink = document.createElement("a");
    let headerContainer = document.getElementById("headerCont");
    let signinBtn = document.getElementById("showContent");

    headerContainer.appendChild(accountDivCont);
    accountDivCont.classList.add("accountCont");
    headerContainer.removeChild(signinBtn);
    accountDivCont.appendChild(accountImage);
    accountDivCont.appendChild(accountUsername);
    accountUsername.innerText = usernameReg.value;
    accountDivCont.appendChild(accountInfoCont);
    accountInfoCont.classList.add("accountInfoCont");
    accountInfoCont.appendChild(accountInfo);
    accountInfoCont.appendChild(accountLinkBtn);
    accountLinkBtn.appendChild(accountLink);
    accountLink.innerHTML = "Manage Account";
    accountLink.setAttribute("href", "account.html");
    accountInfo.innerHTML = `${firstName.value} ${middleName.value} ${lastName.value}`;
    accountUsername.innerHTML = `${usernameReg.value}`;
    console.log(`Password: ${passwordReg.value}, Email: ${email.value}, Tel: ${telephoneNum.value} Date of Birth: ${dateOfBirth.value}`);
    showContent.style.display = "none";
    loginContent.style.display = "none";
    registerContent.style.display = "none";
    
}