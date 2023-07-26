function shufflePuzzle() {
    const tiles = document.querySelectorAll('.puzzle-tile');
    const tileArray = Array.from(tiles);

    //Reset score on shuffle button click
    moves = 0; // Reset moves to 0 when shuffling
    document.getElementById('score').textContent = 'Turns: ' + moves; // Update the score display

    // Taken from stackOverflow
    for (let i = tileArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileArray[i].innerText, tileArray[j].innerText] = [tileArray[j].innerText, tileArray[i].innerText];
    }
}

// Event listener for Shuffle button
document.getElementById('shuffle-btn').addEventListener('click', shufflePuzzle);

// Call the shuffle function when the page loads
// window.onload = shufflePuzzle;
document.addEventListener("DOMContentLoaded", () => {
    // shufflePuzzle();
});

// Increment score
let moves = 0; // Initialize moves to 0

// Function to increment the score/turn counter
function incrementScore() {
    moves++;
    document.getElementById('score').textContent = 'Turns: ' + moves;
}

// Function to handle tile click
function onTileClick() {
    const emptyTile = document.querySelector('.puzzle-tile:empty');
    const currentTile = this;

    const tiles = document.querySelectorAll(".puzzle-tile");

    const tilesArray = Array.from(tiles);

    const emptyIndex = tilesArray.indexOf(emptyTile);
    const currentIndex = [...currentTile.parentElement.children].indexOf(currentTile);

    // Check if the clicked tile is adjacent to the empty space    
    const diffEmptyAndCurr = Math.abs(emptyIndex - currentIndex);

    const puzzleContainer = document.querySelector(".puzzle-container");
    const easyDiff = puzzleContainer.classList.contains("easy");
    const mediumDiff = puzzleContainer.classList.contains("medium");
    const hardDiff = puzzleContainer.classList.contains("hard");


    if (easyDiff) {

        if (diffEmptyAndCurr === 1 || diffEmptyAndCurr === 3) {
            [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
            incrementScore(); // Increment the score on a valid move

            if (checkWin()) {
                showWinMessage(); // Display the win message if the puzzle is solved
            }
        }
    } else if (mediumDiff) {
        if (diffEmptyAndCurr === 1 || diffEmptyAndCurr === 4) {
            [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
            incrementScore(); // Increment the score on a valid move

            if (checkWin()) {
                showWinMessage(); // Display the win message if the puzzle is solved
            }
        }
    } else if (hardDiff) {
        if (diffEmptyAndCurr === 1 || diffEmptyAndCurr === 5) {
            [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
            incrementScore(); // Increment the score on a valid move

            if (checkWin()) {
                showWinMessage(); // Display the win message if the puzzle is solved
            }
        }
    }

}



// Function to check if the puzzle is solved
function checkWin() {
    const tiles = document.querySelectorAll('.puzzle-tile');

    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i].innerText !== String(i + 1)) {
            return false;
        }
    }

    return true;
}

// Function to display the win message
function showWinMessage() {
    alert('Congratulations! You solved the puzzle!');
}


function chooseDifficulty() {
    const easyBtn = document.createElement("button");
    easyBtn.innerText = "Easy";
    const mediumBtn = document.createElement("button");
    mediumBtn.innerText = "Medium";
    const hardBtn = document.createElement("button");
    hardBtn.innerText = "Hard";
    const puzzleContainer = document.querySelector(".puzzle-container");
    puzzleContainer.innerHTML = "";
    puzzleContainer.appendChild(easyBtn);
    puzzleContainer.appendChild(mediumBtn);
    puzzleContainer.appendChild(hardBtn);

    easyBtn.addEventListener("click", easyGame);
    mediumBtn.addEventListener("click", mediumGame);
    hardBtn.addEventListener("click", hardGame);
}

const startBtn = document.getElementById("start-game");
startBtn.addEventListener("click", chooseDifficulty);


function easyGame() {
    const puzzleContainer = document.querySelector(".puzzle-container");
    puzzleContainer.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const tile = document.createElement("div");
        tile.classList.add("puzzle-tile");
        tile.innerText = i + 1;
        puzzleContainer.appendChild(tile);
    }
    const emptyTile = document.createElement("div");
    emptyTile.classList.add("puzzle-tile");
    puzzleContainer.appendChild(emptyTile);
    puzzleContainer.classList.add("easy");
    // Add click event listener to each tile
    const tiles = document.querySelectorAll('.puzzle-tile');
    tiles.forEach(tile => tile.addEventListener('click', onTileClick));
    shufflePuzzle();
}

function mediumGame() {
    const puzzleContainer = document.querySelector(".puzzle-container");
    puzzleContainer.innerHTML = "";
    for (let i = 0; i < 15; i++) {
        const tile = document.createElement("div");
        tile.classList.add("puzzle-tile");
        tile.innerText = i + 1;
        puzzleContainer.appendChild(tile);
    }
    const emptyTile = document.createElement("div");
    emptyTile.classList.add("puzzle-tile");
    puzzleContainer.appendChild(emptyTile);
    puzzleContainer.classList.add("medium");
    // Add click event listener to each tile
    const tiles = document.querySelectorAll('.puzzle-tile');
    tiles.forEach(tile => tile.addEventListener('click', onTileClick));
    shufflePuzzle();
}

function hardGame() {
    const puzzleContainer = document.querySelector(".puzzle-container");
    puzzleContainer.innerHTML = "";
    for (let i = 0; i < 24; i++) {
        const tile = document.createElement("div");
        tile.classList.add("puzzle-tile");
        tile.innerText = i + 1;
        puzzleContainer.appendChild(tile);
    }
    const emptyTile = document.createElement("div");
    emptyTile.classList.add("puzzle-tile");
    puzzleContainer.appendChild(emptyTile);
    puzzleContainer.classList.add("hard");
    // Add click event listener to each tile
    const tiles = document.querySelectorAll('.puzzle-tile');
    tiles.forEach(tile => tile.addEventListener('click', onTileClick));
    shufflePuzzle();
}