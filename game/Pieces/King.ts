import { Piece } from "./Piece";

export class King extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'King');

        if(player == 0){
            this.texture = 'king_white';
        }
        else{
            this.texture = 'king_black';
        }
    }
}