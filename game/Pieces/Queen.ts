import { Piece } from "./Piece";

export class Queen extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'Pawn');

        if(player == 0){
            this.texture = 'queen_white';
        }
        else{
            this.texture = 'queen_black';
        }
    }
}