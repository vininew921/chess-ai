import { Piece } from "./Piece";

export class Rook extends Piece {
    texture: string;

    constructor(player: number) {
        super(player, 'Queen');

        if(player == 0){
            this.texture = 'rook_white';
        }
        else{
            this.texture = 'rook_black';
        }
    }
}