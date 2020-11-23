import { Board } from "../Board";
import { Coordinate } from "../Coordinate";

export abstract class Piece {
    player: number;
    name: string;
    texture: string;
    id: number;
    position: Coordinate;

    abstract value: number;
    
    constructor(p: number, n: string) {
        this.player = p;
        this.name = n;

        if(this.player == 0){
            this.texture =`${this.name.toLowerCase()}_white`;
        }
        else{
            this.texture = `${this.name.toLowerCase()}_black`;
        }
    }

    abstract PossibleMoves(b: Board): Array<Coordinate>;

}