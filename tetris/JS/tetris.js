

const cvs = document.getElementById("tetris");

const ctx = cvs.getContext("2d");

const row = 20;
const col = column = 10; 
const sq = squareSize = 20; 
const vacant = "white";

/////////////////////////////////
////////DRAWING A SQUARE/////////
/////////////////////////////////


//CREATE A drawSquare FUNCTION
function drawSquare(x, y, color) {
    //fillStyle property
    ctx.fillStyle = color;

    //fillRect method 
    //fillRect parameter 
    //context.fillRect(x,y,width,height);
    ctx.fillRect(x*sq, y*sq, sq, sq);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x*sq, y*sq, sq, sq);
}

//////////////////////////////////
////////CREATE THE BOARD//////////
//////////////////////////////////
//the board is a 2d array
let board = [];
for (r = 0; r < row; r++){
    board[r] = [];
    for(c = 0; c < col; c++){
        board[r][c] = vacant;
    }
}
//////////////////////////////////
/////DRAW THE BOARD TO CANVAS/////
//////////////////////////////////
function drawBoard(){
    for (r = 0; r < row; r++){
        for(c = 0; c < col; c++){
            drawSquare(c, r, board[r][c]);
        }
    }
}

drawBoard();
/////////////////////////
//CREATE PIECES & COLOR//
/////////////////////////

const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "purple"],
    [O, "yellow"],
    [L, "orange"],
    [I, "cyan"],
    [J, "blue"]
];
//initiate the piece
let p = new Piece(PIECES[0][0], PIECES[0][1]);


////////////////////////
/////CREATE OBJECT//////
////////////////////////
function Piece(tetromino,color) {
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];

    this.x = 5;
    this.y = 4;

}

//adding the piece to the board
Piece.prototype.draw = function() {
    for (r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            if(this.activeTetromino[r][c]){
                drawSquare(this.x + c, this.y + r, this.color);
            }
        }
    }
}

p.draw();



























/* $(() => {
    const cvs = $("#tatris")


}) */