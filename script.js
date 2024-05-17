const board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

const player1 = {
    name: 'player1', 
    piece: 'X'
};

const player2 = {
    name: 'player2',
    piece: 'O'
};

function checkWin(player) {
    return (
        (board[1] === player.piece && board[2] === player.piece && board[3] === player.piece) ||
        (board[4] === player.piece && board[5] === player.piece && board[6] === player.piece) ||
        (board[7] === player.piece && board[8] === player.piece && board[9] === player.piece) ||
        (board[1] === player.piece && board[4] === player.piece && board[7] === player.piece) ||
        (board[2] === player.piece && board[5] === player.piece && board[8] === player.piece) ||
        (board[3] === player.piece && board[6] === player.piece && board[9] === player.piece) ||
        (board[1] === player.piece && board[5] === player.piece && board[9] === player.piece) ||
        (board[3] === player.piece && board[5] === player.piece && board[7] === player.piece)
    );
}

function displayBoard() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).textContent = board[i];
    }
}

function handleClick (event) {
    const squareId = event.target.id;
    const currentPlayer = Object.values(board).filter(piece => piece !== ' ').length % 2 === 0 ? player1 : player2;
    let statusMessage = document.querySelector('.winner');
    if (board[squareId] !== ' ') {
        statusMessage.textContent = 'Square already taken!';
        return;
    }

    board[squareId] = currentPlayer.piece;
    displayBoard();

    if (checkWin(currentPlayer)) {
        statusMessage.textContent = `Tic Tac Toe! ${currentPlayer.name} wins!`;
        resetGame();
    }
    else if (isTie()) {
        statusMessage.textContent = 'Its a tie!';
    }
    else {
        statusMessage.textContent = " ";
    }

};

function isTie () {
    for (let square in board) {
        if (board[square] == ' ') {
            return false;
        }   
    }
    return true;
}

function initializeGame() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
    displayBoard();
}

function resetGame () {
    for (let i = 1; i <= 9; i++) {
        board[i] = ' ';
    }
    displayBoard();
}
function changeNames () {
    let newName1 = document.getElementById('player1Name').value;
    let newName2 = document.getElementById('player2Name').value;

    player1.name = newName1;
    player2.name = newName2;
}
document.addEventListener('DOMContentLoaded', initializeGame);