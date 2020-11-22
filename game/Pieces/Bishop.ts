import { Piece } from "./Piece";

export class Bishop extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'Bishop');

        if(player == 0){
            this.texture = 'bishop_white';
        }
        else{
            this.texture = 'bishop_black';
        }
    }
}