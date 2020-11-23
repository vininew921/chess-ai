import { Board } from "./Board";
import { Coordinate } from "./Coordinate";
import { Piece } from "./Pieces/Piece";

class GameController {

    /* Game State Properties */
    turn: number;
    player: number;
    whitePoints: number;
    blackPoints: number;
    totalPoints: number;

    /* Board Properties */
    gameBoard: HTMLCanvasElement;
    gameBoardHeight: number;
    gameBoardWidth: number;
    board: Board;
    selectedPiece: Piece;
    possibleMoves: Array<Coordinate>;

    constructor() {
        this.board = new Board();
        this.turn = 1;
        this.player = 0;
        this.whitePoints = this.board.GetPoints(0);
        this.blackPoints = this.board.GetPoints(1);

        this.gameBoard = <HTMLCanvasElement>document.getElementById('gameBoard');
        this.gameBoard.addEventListener("click", (event: MouseEvent) => {
            this.GetPiece(event);
            this.ShowAvailableMoves();
            if(this.selectedPiece.player == this.player){
                this.ShowAvailableMoves();
            }
            
        });

        this.gameBoardHeight = 480;
        this.gameBoardWidth = 480;
        this.DrawBoard();
    }

    ShowAvailableMoves(): void{
        this.DrawBoard();
        this.possibleMoves = this.selectedPiece.PossibleMoves(this.board);

        let context = this.gameBoard.getContext("2d");
        context.fillStyle = "#00FFFF";

        this.possibleMoves.forEach(c => {
            var posX = c.x * (this.gameBoardWidth / 8);
            var posY = c.y * (this.gameBoardHeight / 8);
            context.fillRect(posX + 1, posY + 1, (this.gameBoardWidth / 8) - 2, (this.gameBoardHeight / 8) - 2);
            context.closePath();
            let redrawPiece = this.board.GetPieceByPosition(c.y, c.x);
            if(redrawPiece){
                this.DrawPiece(c.x, c.y, redrawPiece, context);
            }
        });
    }
    

    GetPiece (ev: MouseEvent): void {
        var rect = this.gameBoard.getBoundingClientRect();
        
        let mouseY = ev.clientX - rect.left;
        let mouseX = ev.clientY - rect.top;

        let indexX = Math.floor(mouseX / (this.gameBoardWidth / 8));
        let indexY = Math.floor(mouseY / (this.gameBoardHeight / 8));

        this.selectedPiece = this.board.GetPieceByPosition(indexX, indexY);
    }

    DrawBoard() {
        let context = this.gameBoard.getContext("2d");
        context.strokeStyle = "#000000";
        var left = 0;
        for (var a = 0; a < 8; a++) {
            context.fillStyle = "#D2691E";
            for (var b = 0; b < 8; b += 2) {
                var startX = b * this.gameBoardWidth / 8;
                if (a % 2 == 0) startX = (b + 1) * this.gameBoardWidth / 8;
                
                context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                context.stroke();
            }
            context.fillStyle = "#FFFFFF";
            for(var b = 1; b < 8; b += 2){
                var startX = b * this.gameBoardWidth / 8;
                if (a % 2 == 0) startX = (b - 1) * this.gameBoardWidth / 8;
                context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                context.stroke();
            }
        }
        this.DrawPieces();
    }

    DrawPieces(){
        let pieceId = 0;
        let context = this.gameBoard.getContext("2d");
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                var p = this.board.GetBoard()[j][i];
                if(p != undefined){
                    pieceId++;
                    p.id = pieceId;
                    var player;
                    if(p.player == 0){
                        player = "white";
                    }
                    else{
                        player = "black";
                    }
                    this.DrawPiece(p.position.x, p.position.y, p, context);
                }
            }
        }
    }

    DrawPiece(indexX: number, indexY: number, p: Piece, context: CanvasRenderingContext2D){
        let img = <CanvasImageSource>document.getElementById(`${p.texture}`);
        context.drawImage(img, indexX * this.gameBoardWidth / 8, indexY * this.gameBoardWidth / 8);
    }
}

new GameController();

