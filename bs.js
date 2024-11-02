console.log("Welcome to my Binary Search game");
let audio3= new Audio("ting.mp3");

let a = document.querySelector(".san");
let startButton = document.querySelector(".group");

let data = document.querySelector(".headi h1");
startButton.addEventListener("input", () => {
    let maxNumber = a.value.trim() || "100";
    console.log(maxNumber);
    data.innerText = `Guess a number between 0 and ${maxNumber}`;
});

// Select elements from the DOM
let maxInput = document.querySelector(".san");
let startButtons = document.querySelector("#startGameButton");
let gameArea = document.querySelector(".game-area");
let gameMessage = document.querySelector("#gameMessage");
let guessDisplay = document.querySelector("#guess");
let yesButton = document.querySelector("#yes");
let noButton = document.querySelector("#no");

let targetNumber;
let low = 0;
let high = 100;
let guess;
let attempts = 0;
let maxAttempts = 10;

// Hide game area initially
gameArea.style.display = "none";

// Start the game
startButtons.addEventListener("click", () => {
    targetNumber = parseInt(maxInput.value.trim());
    if (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }

    // Initialize game variables
    low = 0;
    high = 100;
    attempts = 0;
    gameArea.style.display = "block"; // Show game area for interaction after starting
    data.style.display = "none";
    startButtons.style.display = "none"; // Hide start button after the game starts
    maxInput.style.display = "none"; // Hide input field after the game starts
    makeGuess(); // Start the first guess
});

// Function to make a guess
function makeGuess() {
    if (attempts >= maxAttempts) {
        gameMessage.innerText = `The computer couldn't guess the number within ${maxAttempts} attempts.`;
        return;
    }

    // Calculate the next guess using binary search approach
    guess = Math.floor((low + high) / 2);
    guessDisplay.innerText = guess; // Update the displayed guess
    gameMessage.innerText = `Is your number greater than ${guess}?`;
    attempts++;
}

// Handle "Yes" button click (meaning the number is greater than the guess)
yesButton.addEventListener("click", () => {
    low = guess + 1; // Adjust low bound
    makeGuess();
});

// Handle "No" button click (meaning the number is less than or equal to the guess)
noButton.addEventListener("click", () => {
    if (guess === targetNumber) {
        gameMessage.innerText = `Your number is ${targetNumber}`;
        gameMessage.style.fontSize = "50px";
        gameMessage.style.color="red";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        audio3.play();
    } else {
        high = guess - 1; // Adjust high bound
        makeGuess();
    }
});

