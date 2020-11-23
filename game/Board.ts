import { Coordinate } from "./Coordinate";
import { Piece } from "./Pieces/Piece";
import { Bishop, King, Queen, Knight, Pawn, Rook } from "./Pieces/PiecesExport";

export class Board {
    position: Array<Array<Piece>>;

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

    }

    public getPiecePosition(name: string) {
        let result: Array<Coordinate> = new Array<Coordinate>();
        let x: number = 0;
        let y: number = 0;
        let found: boolean = false;
        this.position.forEach(column => {
            column.forEach(piece => {
                if(piece.name == name){
                    result.push(new Coordinate(x, y));
                }
                y++;
            });
            y = 0;
            x++;
        });

        return result;
    }

}