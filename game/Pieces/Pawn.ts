import { Piece } from "./Piece";

export class Pawn extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'Pawn');

        if(player == 0){
            this.texture = 'pawn_white';
        }
        else{
            this.texture = 'pawn_black';
        }
    }
}