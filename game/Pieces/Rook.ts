import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Rook extends Piece {

    value: number;
    
    PossibleMoves(): Coordinate[] {
        throw new Error("Method not implemented.");
    }

    constructor(player: number) {
        super(player, 'Rook');
        this.value = 5;
    }
    
}