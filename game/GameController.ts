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
    gameHeader: HTMLHeadElement;
    moveSound: HTMLAudioElement;
    board: Board;
    selectedPiece: Piece;
    possibleMoves: Array<Coordinate>;
    evenSquareColor: string;
    oddSquareColor: string;
    possibleMoveColor: string;
    holdingPiece: boolean;
    clientMouseX: number;
    clientMouseY: number;
    moveTimer: NodeJS.Timeout;

    constructor() {
        this.board = new Board();
        this.turn = 1;
        this.player = 0;
        this.holdingPiece = false;
        this.whitePoints = this.board.GetPoints(0);
        this.blackPoints = this.board.GetPoints(1);
        this.totalPoints = this.whitePoints - this.blackPoints;
        this.moveSound = new Audio('../frontend/sound/move.mp3');

        // this.oddSquareColor = "#D2691E"; //brown
        this.oddSquareColor = "#1da2db"; // blue
        this.evenSquareColor = "#FFFFFF";
        this.possibleMoveColor = "rgba(114, 126, 133, 0.8)";

        this.gameBoard = <HTMLCanvasElement>document.getElementById('gameBoard');
        this.gameHeader = <HTMLHeadElement>document.getElementById('gameInfo');
        this.SetHeader();
        this.gameBoard.addEventListener("mousedown", (event: MouseEvent) => {
            let clicked = this.EventToCoordinate(event);
            let newPiece = this.GetPiece(clicked);
            this.selectedPiece = newPiece == undefined || newPiece.player != this.player ? this.selectedPiece : newPiece;
            if(this.selectedPiece){
                if(this.selectedPiece.player == this.player && clicked.x == this.selectedPiece.position.x && clicked.y == this.selectedPiece.position.y){
                    this.ShowAvailableMoves();
                    this.moveTimer = setTimeout(() =>{
                            this.holdingPiece = true;
                    }, 40);
                }
            }
            else{
                this.DrawBoard();
            }
            this.CheckMove(clicked);
        });

         this.gameBoard.addEventListener("mousemove", (event: MouseEvent) => {
            var rect = this.gameBoard.getBoundingClientRect();
        
            this.clientMouseX = event.clientX - rect.left;
            this.clientMouseY = event.clientY - rect.top;
             if(this.holdingPiece && this.selectedPiece){
                 this.ShowAvailableMoves();
             }
         });

        this.gameBoard.addEventListener("mouseup", (event: MouseEvent) =>{
            let dropped = this.EventToCoordinate(event);
            if(this.selectedPiece && this.holdingPiece){
                this.holdingPiece = false;
                if(!this.CheckMove(dropped))
                    this.ShowAvailableMoves();
            }
            else{
                this.DrawBoard();
            }
        });

        this.gameBoardHeight = 460;
        this.gameBoardWidth = 460;
        this.gameBoard.height = this.gameBoardHeight;
        this.gameBoard.width = this.gameBoardWidth;
        this.DrawBoard();
        this.DrawCoordinates();
    }

    SetHeader(): void{
        this.gameHeader.innerHTML = `
            Player: ${this.player == 0 ? 'White' : 'Black'} <br>
            Turn: ${this.turn} <br>
            Evaluation: ${this.totalPoints} <br>
        `
    }

    CheckMove(c: Coordinate): boolean{
        let result = false;
        if(this.possibleMoves){
            this.possibleMoves.forEach(pm => {
                if(pm.x == c.x && pm.y == c.y){
                    this.board.MovePiece(this.selectedPiece, c);
                    (<HTMLAudioElement>(this.moveSound.cloneNode(true))).play();
                    
                    this.ChangeTurn();
                    result = true;
                }
            });
        }
        return result;
    }

    ChangeTurn(): void{
        this.possibleMoves = null;
        this.selectedPiece = null;
        this.DrawBoard();
        console.clear();
        console.table(this.board.GetBoard());

        this.whitePoints = this.board.GetPoints(0);
        this.blackPoints = this.board.GetPoints(1);
        this.totalPoints = this.whitePoints - this.blackPoints;

        if(this.player == 0){
            this.player = 1;
        }
        else{
            this.player = 0;
            this.turn += 1;
        }

        this.board.UpdatePossibleMoves();

        this.SetHeader();
    }

    ShowAvailableMoves(): void{
        this.DrawBoard();
        this.possibleMoves = this.selectedPiece.possibleMoves;

        let context = this.gameBoard.getContext("2d");
        context.fillStyle = this.possibleMoveColor;

        this.possibleMoves.forEach(c => {
            var posX = c.y * (this.gameBoardWidth / 8);
            var posY = c.x * (this.gameBoardHeight / 8);
            //context.fillRect(posX + 1, posY + 1, (this.gameBoardWidth / 8) - 2, (this.gameBoardHeight / 8) - 2);
            context.beginPath();
            context.ellipse(posX + (this.gameBoardWidth / 8) / 2, posY + (this.gameBoardHeight / 8) / 2, 10, 10, 0, 0, Math.PI * 2);
            context.fill();
            context.closePath();
            // let redrawPiece = this.GetPiece(c);
            // if(redrawPiece){
            //     // this.DrawPiece(redrawPiece, context);
            // }
        });

        this.DrawCoordinates();
    }
    
    EventToCoordinate(ev: MouseEvent): Coordinate{
        var rect = this.gameBoard.getBoundingClientRect();
        
        let mouseX = ev.clientX - rect.left;
        let mouseY = ev.clientY - rect.top;

        let indexX = Math.floor(mouseX / (this.gameBoardWidth / 8));
        let indexY = Math.floor(mouseY / (this.gameBoardHeight / 8));

        return new Coordinate(indexY, indexX);
    }

    GetPiece (index: Coordinate): Piece {
        return this.board.GetPieceByPosition(index);
    }

    DrawBoard() {
        let context = this.gameBoard.getContext("2d");
        var left = 0;
        for (var a = 0; a < 8; a++) {
            context.fillStyle = this.oddSquareColor;
            for (var b = 0; b < 8; b += 2) {
                var startX = b * this.gameBoardWidth / 8;
                if (a % 2 == 0) startX = (b + 1) * this.gameBoardWidth / 8;
                
                
                context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                // context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
            }
            context.fillStyle = this.evenSquareColor;
            for(var b = 1; b < 8; b += 2){
                var startX = b * this.gameBoardWidth / 8;
                if (a % 2 == 0) startX = (b - 1) * this.gameBoardWidth / 8;
                context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                // context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
            }
            
        }
        this.DrawPieces();
    }

    DrawCoordinates(): any{
        return;
        let context = this.gameBoard.getContext("2d");
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                context.strokeStyle = "#FF0000";
                context.strokeText(`${i}, ${j}`, j * this.gameBoardWidth / 8 + 2, i * this.gameBoardWidth / 8 + 10);
            }
        }
    }

    DrawPieces(): void{
        let pieceId = 0;
        let context = this.gameBoard.getContext("2d");
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                var p = this.GetPiece(new Coordinate(i, j));
                if(p){
                    pieceId++;
                    p.id = pieceId;
                    var player;
                    if(p.player == 0){
                        player = "white";
                    }
                    else{
                        player = "black";
                    }
                    this.DrawPiece(p, context);
                }
            }
        }
    }

    DrawPiece(p: Piece, context: CanvasRenderingContext2D): void{
        let img = <CanvasImageSource>document.getElementById(`${p.texture}`);
        if(this.holdingPiece && p == this.selectedPiece){
            context.drawImage(img, this.clientMouseX - (this.gameBoardWidth / 8) / 2, this.clientMouseY - (this.gameBoardHeight / 8) / 2, this.gameBoardWidth / 8, this.gameBoardHeight / 8);
        }
        else{
            context.drawImage(img, p.position.y * this.gameBoardWidth / 8, p.position.x * this.gameBoardWidth / 8, this.gameBoardWidth / 8, this.gameBoardHeight / 8);
        }
        
    }
}

new GameController();

