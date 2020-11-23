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

        this.SetPiecesPosition();
    }

    SetPiecesPosition(): void{
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                let piece = this.GetBoard()[j][i];
                if(piece != undefined){
                    piece.position = new Coordinate(i, j);
                }
            }
        }
    }

    public GetBoard(): Array<Array<Piece>>{
        return this.position;
    }

    public GetPieceByPosition(x: number, y: number): Piece {
        return this.position[x][y];
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