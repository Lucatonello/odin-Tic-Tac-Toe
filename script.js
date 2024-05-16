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
    piece: 'x'
};

const player2 = {
    name: 'player2',
    piece: 'o'
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

function game () {
    let player1Wins = false;
    let player2Wins = false;

    while (player1Wins == false && player2Wins == false) {
        var user1Choice, user2Choice;
        do {
            user1Choice = prompt("what square are you going player1?");
        } while (user1Choice < 1 || user1Choice > 9 || board[user1Choice] !== ' ');

    
        board[user1Choice] = player1.piece;
        console.log(board);

        player1Wins = checkWin(player1);
        if (player1Wins) {
            console.log(`Tic Tac Toe! ${player1.name} wins!`);
            break;
        }

        do {
            user2Choice = prompt("what square are you going player2?");
        }  while (user2Choice < 1 || user2Choice > 9 || board[user2Choice] !== ' ');

        board[user2Choice] = player2.piece;
        console.log(board);

        player2Wins = checkWin(player2);
        if (player2Wins) {
            console.log(`Tic Tac Toe! ${player2.name} wins!`);
            break;
        }

    } 
};
game();