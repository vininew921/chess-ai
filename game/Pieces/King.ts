import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class King extends Piece {

    value: number;
    
    PossibleMoves(): Coordinate[] {
        throw new Error("Method not implemented.");
    }
    
    constructor(player: number) {
        super(player, 'King');
        this.value = 999;
    }

}