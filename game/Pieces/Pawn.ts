import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Pawn extends Piece {

    value: number;
    firstMove: boolean;

    PossibleMoves(b: Board): Array<Coordinate> {
        let result = new Array<Coordinate>();
        let indexX = this.position.x;
        let indexY = this.position.y;

        if(this.player == 0){
            result.push(new Coordinate(indexX - 1, indexY));
            if(this.firstMove){
                result.push(new Coordinate(indexX - 2, indexY));
            }
        }
        else{
            result.push(new Coordinate(indexX + 1, indexY));
            if(this.firstMove){
                result.push(new Coordinate(indexX + 2, indexY));
            }
        }

        return result;
    }
    
    constructor(player: number) {
        super(player, 'Pawn');
        this.value = 1;
        this.firstMove = true;
    }
    
}