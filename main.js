let inpName = document.querySelector("#name");
let inpAge = document.querySelector("#age");
let inpEmail = document.querySelector("#email");
let addButton = document.querySelector("#addButton");
let resetButton = document.querySelector("#resetButton");
let dataBody = document.querySelector("#dataBody");

let nameError = document.querySelector("#nameError");
let ageError = document.querySelector("#ageError");
let emailError = document.querySelector("#emailError");

var namL = [];
var ageL = [];
var mailL = [];

addButton.addEventListener("click", addData);
resetButton.addEventListener("click", resetInputs);

function validateName() {
    let val = inpName.value;
    if (val === "") {
        nameError.innerHTML = "This field is required";
        nameError.style.display = "block";

    } else if (isFinite(val)) {
        nameError.innerHTML = "This field should contain characters only";
        nameError.style.display = "block";
        inpName.value = "";

    } else if (val.length < 4) {
        nameError.innerHTML = "Name must be at least 4 characters long";
        nameError.style.display = "block";
        inpName.value = "";

    } else if (val.length > 12) {
        nameError.innerHTML = "Name must be less than 12 characters long";
        nameError.style.display = "block";
        inpName.value = "";

    } else {
        nameError.style.display = "none";
    }
}


function validateAge() {
    let val = inpAge.value;
    if (val === "") {
        ageError.innerHTML = "This field is required";
        ageError.style.display = "block";

    } else if (isNaN(val) || val < 10 || val > 70) {
        ageError.innerHTML = "Age must be between 10 and 70";
        ageError.style.display = "block";
        inpAge.value = "";
        
    } else {
        ageError.style.display = "none";
    }
}


function validateEmail() {
    let val = inpEmail.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val === "") {
        emailError.innerHTML = "This field is required";
        emailError.style.display = "block";

    } else if (!emailPattern.test(val)) {
        emailError.innerHTML = "Please enter a valid email address";
        emailError.style.display = "block";
        inpEmail.value = "";

    } else {
        emailError.style.display = "none";
    }
}

function addData() {
    validateName();
    validateAge();
    validateEmail();

    if (nameError.style.display === "none" &&
        ageError.style.display === "none" &&
        emailError.style.display === "none") {

        namL.push(inpName.value);
        ageL.push(inpAge.value);
        mailL.push(inpEmail.value);

        dataBody.innerHTML = "";

        for (var i = 0; i < namL.length; i++) {
            var newRow = document.createElement("tr");
            
            var nameCell = document.createElement("td");
            nameCell.textContent = namL[i];
            newRow.append(nameCell);
            
            var ageCell = document.createElement("td");
            ageCell.textContent = ageL[i];
            newRow.append(ageCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = mailL[i];
            newRow.append(emailCell);

            dataBody.append(newRow);
        }

        inpName.value = "";
        inpAge.value = "";
        inpEmail.value = "";
    }
}

function resetInputs() {
    inpName.value = "";
    inpAge.value = "";
    inpEmail.value = "";
    nameError.style.display = "none";
    ageError.style.display = "none";
    emailError.style.display = "none";
}
