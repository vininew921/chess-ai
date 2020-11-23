import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Knight extends Piece {
    
    value: number;
    
    PossibleMoves(): Coordinate[] {
        throw new Error("Method not implemented.");
    }
    
    constructor(player: number) {
        super(player, 'Knight');
        this.value = 3;
    }
    
}