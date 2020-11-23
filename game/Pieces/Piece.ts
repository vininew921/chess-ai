import { Coordinate } from "../Coordinate";

export abstract class Piece {
    player: number;
    name: string;
    texture: string;
    id: number;

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

    abstract Move(): void;

    abstract PossibleMoves(): Array<Coordinate>;

}