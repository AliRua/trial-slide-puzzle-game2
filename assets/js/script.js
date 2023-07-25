function shufflePuzzle() {
    const tiles = document.querySelectorAll('.puzzle-tile');
    const tileArray = Array.from(tiles);

    for (let i = tileArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileArray[i].innerText, tileArray[j].innerText] = [tileArray[j].innerText, tileArray[i].innerText];
    }
}

let moves = 0; // Initialize moves to 0

function incrementScore() {
    moves++;
    document.getElementById('score').textContent = 'Turns: ' + moves;
}

// Call the shuffle function when the page loads
window.onload = shufflePuzzle;

function onTileClick() {
    const emptyTile = document.querySelector('.puzzle-tile:empty');
    const currentTile = this;

    const emptyIndex = [...emptyTile.parentElement.children].indexOf(emptyTile);
    const currentIndex = [...currentTile.parentElement.children].indexOf(currentTile);

    // Check if the clicked tile is adjacent to the empty space
    if (Math.abs(emptyIndex - currentIndex) === 1 || Math.abs(emptyIndex - currentIndex) === 3) {
        [emptyTile.innerText, currentTile.innerText] = [currentTile.innerText, emptyTile.innerText];
        incrementScore();
    }
}

// Add click event listener to each tile
const tiles = document.querySelectorAll('.puzzle-tile');
tiles.forEach(tile => tile.addEventListener('click', onTileClick));