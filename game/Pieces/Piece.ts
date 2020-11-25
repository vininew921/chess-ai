import { Board } from "../Board";
import { Coordinate } from "../Coordinate";

export abstract class Piece {
    player: number;
    name: string;
    texture: string;
    id: number;
    position: Coordinate;

    attacking: Array<Coordinate>;
    possibleMoves: Array<Coordinate>;

    abstract value: number;
    
    constructor(p: number, n: string) {
        this.player = p;
        this.name = n;
        this.attacking = new Array<Coordinate>();

        if(this.player == 0){
            this.texture =`${this.name.toLowerCase()}_white`;
        }
        else{
            this.texture = `${this.name.toLowerCase()}_black`;
        }

    }

    abstract UpdatePossibleMoves(b: Board): void;

}