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

function game () {
    let player1Wins = false;
    let player2Wins = false;

    while (player1Wins == false && player2Wins == false) {
        do {
            var user1Choice = prompt("what square are you going player1?");
            var user2Choice = prompt("what square are you going player2?");
        } while (user1Choice > 0 && user1Choice <= 9 && user2Choice > 0 && user2Choice <= 9);
    
        board[user1Choice] = player1.piece;
        board[user2Choice] = player2.piece;

        if (board[1] == player1.piece && board[2] == player1.piece && board[3] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[1] == player1.piece && board[4] == player1.piece && board[7] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[1] == player1.piece && board[5] == player1.piece && board[9] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[7] == player1.piece && board[8] == player1.piece && board[9] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[3] == player1.piece && board[6] == player1.piece && board[9] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[2] == player1.piece && board[5] == player1.piece && board[8] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[4] == player1.piece && board[5] == player1.piece && board[6] == player1.piece) {
            player1Wins = true;   
        }
        else if (board[3] == player1.piece && board[5] == player1.piece && board[7] == player1.piece) {
            player1Wins = true;   
        }


        if (board[1] == player2.piece && board[2] == player2.piece && board[3] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[1] == player2.piece && board[4] == player2.piece && board[7] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[1] == player2.piece && board[5] == player2.piece && board[9] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[7] == player2.piece && board[8] == player2.piece && board[9] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[3] == player2.piece && board[6] == player2.piece && board[9] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[2] == player2.piece && board[5] == player2.piece && board[8] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[4] == player2.piece && board[5] == player2.piece && board[6] == player2.piece) {
            player2Wins = true;   
        }
        else if (board[3] == player2.piece && board[5] == player2.piece && board[7] == player2.piece) {
            player2Wins = true;   
        }
    }
    if (player1Wins == true || player2Wins == true) {
        console.log(`Tic Tac Toe! ${player1.name} wins!`);

    }
};