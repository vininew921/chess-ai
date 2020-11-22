import { Piece } from "./Piece";

export class Knight extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'Knight');

        if(player == 0){
            this.texture = 'knight_white';
        }
        else{
            this.texture = 'knight_black';
        }
    }
}