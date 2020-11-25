import { Coordinate } from "./Coordinate";
import { Piece } from "./Pieces/Piece";
import { Bishop, King, Queen, Knight, Pawn, Rook } from "./Pieces/PiecesExport";

export class Board {
    private position: Array<Array<Piece>>;
    whitePieces: Array<Piece>;
    blackPieces: Array<Piece>;
    pieces: Array<Piece>;

    constructor() {
        this.pieces = new Array<Piece>();
        this.position = [
            [new Rook(1), new Knight(1), new Bishop(1), new Queen(1), new King(1), new Bishop(1), new Knight(1), new Rook(1)],
            [new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1)],
            [,,,,,,,],
            [,,,,,,,],
            [,,,,,,,],
            [,,,,,,,],
            [new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0)],
            [new Rook(0), new Knight(0), new Bishop(0), new Queen(0), new King(0), new Bishop(0), new Knight(0), new Rook(0)],
        ];

        console.table(this.position);
        this.UpdatePossibleMoves();
    }

    UpdatePossibleMoves(): void{
        this.pieces = new Array<Piece>();
        this.whitePieces = new Array<Piece>();
        this.blackPieces = new Array<Piece>();
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                let piece = this.GetPieceByPosition(new Coordinate(i, j));
                if(piece != undefined){
                    this.pieces.push(piece);
                    if(piece.player == 0){
                        this.whitePieces.push(piece);
                    }
                    else{
                        this.blackPieces.push(piece);
                    }
                    piece.position = new Coordinate(i, j);
                    piece.UpdatePossibleMoves(this);
                }
            }
        }
    }

    public MovePiece(piece: Piece, newPos: Coordinate){
        this.position[piece.position.x][piece.position.y] = undefined;

        piece.position = newPos;

        if(typeof piece == typeof Pawn){
            var p = piece as Pawn;
            p.firstMove = false;
        }
        else if(typeof piece == typeof King){
            var k = piece as King;
            k.moved = true;
        }

        this.position[newPos.x][newPos.y] = piece;
    }

    public GetBoard(): Array<Array<Piece>>{
        return this.position;
    }

    public GetPieceByPosition(c: Coordinate): Piece {
        if(c.x < 0 || c.x > 7 || c.y < 0 || c.y > 7){
            return null;
        }
        return this.position[c.x][c.y];
    }

    public IsSquareAttacked(c: Coordinate, currentPlayer: number): boolean{
        let looking = currentPlayer == 0 ? this.blackPieces : this.whitePieces;
        let result = false;

        looking.forEach(piece => {
            piece.attacking.forEach(square => {
                if(square.x == c.x && square.y == c.y){
                    result = true;
                }
            });
        });
        console.log(`${c.x}, ${c.y}, ${currentPlayer == 0 ? 'White' : 'Black'}, ${result}`);
        return result;
    }

    public GetPoints(player: number): number{
        var points = 0;
        this.position.forEach(element => {
            element.forEach(p => {
                if(p != undefined){
                    if(p.player == player){
                        points += p.value;
                    }
                }
            });
        });

        return points;
    }

}