// Call the shuffle function when the page loads
window.onload = shufflePuzzle;

function shufflePuzzle() {
    const tiles = document.querySelectorAll('.puzzle-tile');
    const tileArray = Array.from(tiles);

    //Reset score upon click to shuffle button
    let moves = 0; // Reset moves to 0 when shuffling
    document.getElementById('score').textContent = 'Turns: ' + moves; // Update the score display

    for (let i = tileArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileArray[i].innerText, tileArray[j].innerText] = [tileArray[j].innerText, tileArray[i].innerText];
    }

    // Event listener for the Shuffle button
    document.getElementById('shuffle-btn').addEventListener('click', shufflePuzzle);
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

function incrementScore() {
    let moves = 0;
    moves++;
    document.getElementById('score').textContent = 'Turns: ' + moves;
}

function onTileClick() {
    const emptyTile = document.querySelector('.puzzle-tile:empty');
    const currentTile = this;

    const emptyIndex = [...emptyTile.parentElement.children].indexOf(emptyTile);
    const currentIndex = [...currentTile.parentElement.children].indexOf(currentTile);

    if (Math.abs(emptyIndex - currentIndex) === 1 || Math.abs(emptyIndex - currentIndex) === 3) {
        [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
        incrementScore(); // Increment the score on a valid move
        }
    }


// Add click event listener to each tile
const tiles = document.querySelectorAll('.puzzle-tile');
tiles.forEach(tile => tile.addEventListener('click', onTileClick));