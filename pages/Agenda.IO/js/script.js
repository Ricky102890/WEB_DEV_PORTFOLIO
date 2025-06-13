// Variables


// Storage
// Store List in Local Storage
const taskListItems = [];

// Agenda.IO

// Add To Agenda Button
const agendaBtn = document.getElementById("inputAddBtn");
// Input Area
const inputArea = document.getElementById("inputArea");
// Container for the list to be added
const listContainer = document.querySelector(".list-container");
// Access the later created delete button inside list item button options

// Starter Functions

window.onload = () => {
   inputArea.value = ""; 
}

function clearInput() {
        inputArea.value = "";
}


    //  Create List
    function createList() {
    let ListItemBox = document.createElement("li");
    let inputResult = document.createElement("input");
    let ListBtnBox = document.createElement("div");
    let editBtn = document.createElement("button");
    let subBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    let subBtnImg = document.createElement("img");
    let delBtnImg = document.createElement("img");
    
    // Add Information to List Item 
    ListItemBox.classList.add("list-box");
    ListBtnBox.classList.add("list-btn-box");
    inputResult.classList.add("list-input");
    editBtn.classList.add("edit-btn");
    subBtn.classList.add("btn");
    delBtn.classList.add("btn");
    delBtn.classList.add("del-btn");
    subBtnImg.classList.add("btn-img");
    delBtnImg.classList.add("btn-img");
    subBtnImg.src = "/media/icons/general-icons/del.svg";
    delBtnImg.src = "/media/icons/misc-icons/clear.png";
    editBtn.innerHTML = "edit";
    inputResult.readOnly = true;
    inputResult.value = inputArea.value;

    // Parent Element (List Container) adds List Item
    listContainer.appendChild(ListItemBox);

    // Parent Element (List Item) adds Input Element (readOnly)
    ListItemBox.appendChild(inputResult);

    // List Item add Container for Button Div
    ListItemBox.append(ListBtnBox);

    // Adds Buttons to Button Box
    ListBtnBox.appendChild(editBtn);
    ListBtnBox.appendChild(subBtn);
    ListBtnBox.appendChild(delBtn);

    // Add Images inside of buttons (icons that function to edit current list)
    subBtn.appendChild(subBtnImg);
    delBtn.appendChild(delBtnImg);

    clearInput();
    
    subBtn.addEventListener("click", () => {
        listContainer.removeChild(ListItemBox);
    });

    editBtn.addEventListener("click", () => {
        if (inputResult.readOnly == true) {
            inputResult.readOnly = false;
            editBtn.style.color = "red";
            inputResult.addEventListener("keyup", (event) => {
                if (event.keyCode == 13) {
                    inputResult.readOnly = true;
                    editBtn.style.color = "#ffbd2e";
                }
            });
        }
        else {
            inputResult.readOnly = true;
            editBtn.style.color = "#ffbd2e";
        }
    });
    //!!NOT WORKING - WANT TO REMOVE ALL CHILDREN FROM PARENT CONTAINER
    // delBtn.addEventListener("click", () => {
    //     listContainer.removeChild(listContainer.child);

    // })   
}

// Add List Item (click button)
    agendaBtn.addEventListener("click", () => {
        if (inputArea.value.length > 0 || inputArea.value !== "") {
            createList();
        }

        else {
            alert("Please enter task");
        }
    });

    // Allows Enter Key to Add List Item
    inputArea.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            if (inputArea.value !== "") {
                createList();
            }
            else {
                alert("Please enter task");
            }
        }
    })    
// Events
    // Deletes the current List Item

    // Edits Text in  Current List Item (Edit Task)
   

    
