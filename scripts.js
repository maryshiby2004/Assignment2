console.log("Script loaded.");

// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const studentIdParagraph = document.getElementById("studentId");
const images = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = customNumberInput.value;
    studentIdParagraph.textContent = userInput;

    if (userInput >= 0 && userInput <= 100) {
        // Change background color based on conditions
        if (userInput < 0 || userInput > 100) {
            document.body.style.backgroundColor = "red";
        } else if (userInput >= 0 && userInput <= 20) {
            document.body.style.backgroundColor = "green";
        } else if (userInput > 20 && userInput <= 40) {
            document.body.style.backgroundColor = "blue";
        } else if (userInput > 40 && userInput <= 60) {
            document.body.style.backgroundColor = "orange";
        } else if (userInput > 60 && userInput <= 80) {
            document.body.style.backgroundColor = "purple";
        } else if (userInput > 80 && userInput <= 100) {
            document.body.style.backgroundColor = "yellow";
        }
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    studentIdParagraph.textContent = randomValue;

    // Change background color based on conditions
    if (randomValue >= 0 && randomValue <= 100) {
        if (randomValue < 0 || randomValue > 100) {
            document.body.style.backgroundColor = "red";
        } else if (randomValue >= 0 && randomValue <= 20) {
            document.body.style.backgroundColor = "green";
        } else if (randomValue > 20 && randomValue <= 40) {
            document.body.style.backgroundColor = "blue";
        } else if (randomValue > 40 && randomValue <= 60) {
            document.body.style.backgroundColor = "orange";
        } else if (randomValue > 60 && randomValue <= 80) {
            document.body.style.backgroundColor = "purple";
        } else if (randomValue > 80 && randomValue <= 100) {
            document.body.style.backgroundColor = "yellow";
        }
    }
}

// function to generate options for select list
function addList() {
    const imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement("option");
        option.value = imageSources[i];
        option.textContent = `Image ${i + 1}`;
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage;
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
