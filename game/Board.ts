import { Coordinate } from "./Coordinate";
import { Piece } from "./Pieces/Piece";
import { Bishop, King, Queen, Knight, Pawn, Rook } from "./Pieces/PiecesExport";

export class Board {
    private position: Array<Array<Piece>>;

    constructor() {
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
        this.SetPiecesPosition();
    }

    SetPiecesPosition(): void{
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                let piece = this.GetBoard()[i][j];
                if(piece != undefined){
                    piece.position = new Coordinate(i, j);
                    piece.PossibleMoves(this);
                }
            }
        }
    }

    public MovePiece(piece: Piece, newPos: Coordinate){
        this.position[piece.position.x][piece.position.y] = undefined;

        piece.position = newPos;

        if(piece as Pawn != undefined){
            var p = piece as Pawn;
            p.firstMove = false;
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