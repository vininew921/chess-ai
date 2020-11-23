import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Pawn extends Piece {

    value: number;
    firstMove: boolean;

    PossibleMoves(b: Board): Array<Coordinate> {
        let result = new Array<Coordinate>();

        if(this.player == 0){
            if(this.firstMove){
                result.push(new Coordinate(this.position.x, this.position.y - 1));
                result.push(new Coordinate(this.position.x, this.position.y - 2));
            }
            else{
                result.push(new Coordinate(this.position.x, this.position.y - 1));
            }
        }
        else{
            if(this.firstMove){
                result.push(new Coordinate(this.position.x, this.position.y + 1));
                result.push(new Coordinate(this.position.x, this.position.y + 2));
            }
            else{
                result.push(new Coordinate(this.position.x, this.position.y + 1));
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