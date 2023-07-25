function shufflePuzzle() {
    const tiles = document.querySelectorAll('.puzzle-tile');
    const tileArray = Array.from(tiles);

    //Reset score on shuffle button click
    moves = 0; // Reset moves to 0 when shuffling
    document.getElementById('score').textContent = 'Turns: ' + moves; // Update the score display

    for (let i = tileArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileArray[i].innerText, tileArray[j].innerText] = [tileArray[j].innerText, tileArray[i].innerText];
    }
}

// Event listener for Shuffle button
document.getElementById('shuffle-btn').addEventListener('click', shufflePuzzle);

// Call the shuffle function when the page loads
window.onload = shufflePuzzle;

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

    const emptyIndex = [...emptyTile.parentElement.children].indexOf(emptyTile);
    const currentIndex = [...currentTile.parentElement.children].indexOf(currentTile);

    // Check if the clicked tile is adjacent to the empty space
    if (Math.abs(emptyIndex - currentIndex) === 1 || Math.abs(emptyIndex - currentIndex) === 3) {
        [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
        incrementScore(); // Increment the score on a valid move
    }
}

// Add click event listener to each tile
const tiles = document.querySelectorAll('.puzzle-tile');
tiles.forEach(tile => tile.addEventListener('click', onTileClick));