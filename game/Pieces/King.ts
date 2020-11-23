import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class King extends Piece {

    value: number;
    Move(): void {
        throw new Error("Method not implemented.");
    }
    PossibleMoves(): Coordinate[] {
        throw new Error("Method not implemented.");
    }
    
    constructor(player: number) {
        super(player, 'King');
        this.value = 999;
    }

}