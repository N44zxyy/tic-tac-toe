// Restart button function
var restart = document.querySelector("#b");

// Grabs all the squares
var squares = document.querySelectorAll("td");

// Clear all the squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = ' '; 
    }
}

// Check for a win or tie
function checkWin() {
    // Check rows
    for (var i = 0; i < 3; i++) {
        if (squares[i * 3].textContent !== ' ' && 
            squares[i * 3].textContent === squares[i * 3 + 1].textContent && 
            squares[i * 3].textContent === squares[i * 3 + 2].textContent) {
            return squares[i * 3].textContent;
        }
    }

    // Check columns
    for (var i = 0; i < 3; i++) {
        if (squares[i].textContent !== ' ' && 
            squares[i].textContent === squares[i + 3].textContent && 
            squares[i].textContent === squares[i + 6].textContent) {
            return squares[i].textContent;
        }
    }

    // Check diagonals
    if (squares[0].textContent !== ' ' && 
        squares[0].textContent === squares[4].textContent && 
        squares[0].textContent === squares[8].textContent) {
        return squares[0].textContent;
    }
    if (squares[2].textContent !== ' ' && 
        squares[2].textContent === squares[4].textContent && 
        squares[2].textContent === squares[6].textContent) {
        return squares[2].textContent;
    }

    // Check for tie
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].textContent === ' ') {
            return null; // Game still ongoing
        }
    }
    return 'tie'; // Game is a tie
}

// Handle square click
function changeMarker() {
    if (this.textContent === ' ') {
        this.textContent = 'X';
        var winner = checkWin();
        if (winner === 'X') {
            alert("Player 1 won!");
            clearBoard();
        } else if (winner === 'O') {
            alert("Player 2 won!");
            clearBoard();
        } else if (winner === 'tie') {
            alert("It's a tie!");
            clearBoard();
        }
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
        var winner = checkWin();
        if (winner === 'X') {
            alert("Player 1 won!");
            clearBoard();
        } else if (winner === 'O') {
            alert("Player 2 won!");
            clearBoard();
        } else if (winner === 'tie') {
            alert("It's a tie!");
            clearBoard();
        }
    }
}

// Add event listeners
restart.addEventListener('click', clearBoard);
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
