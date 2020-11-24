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
            if(this.position.x < 7){
                if(!b.GetPieceByPosition(new Coordinate(this.position.x - 1, this.position.y))){
                    result.push(new Coordinate(indexX - 1, indexY));
                    if(this.firstMove){
                        if(!b.GetPieceByPosition(new Coordinate(indexX - 2, indexY))){
                            result.push(new Coordinate(indexX - 2, indexY));
                        }
                    }
                }
                //Check capture
                let attackLeft = new Coordinate(this.position.x - 1, this.position.y - 1);
                let attackRight = new Coordinate(this.position.x - 1, this.position.y + 1);
                if(b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player){
                    result.push(attackLeft);
                }
                if(b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player){
                    result.push(attackRight);
                }
            }
        }
        else{
            if(this.position.x > 0){
                if(!b.GetPieceByPosition(new Coordinate(this.position.x + 1, this.position.y))){
                    result.push(new Coordinate(indexX + 1, indexY));
                    if(this.firstMove){
                        if(!b.GetPieceByPosition(new Coordinate(indexX + 2, indexY))){
                            result.push(new Coordinate(indexX + 2, indexY));
                        }
                    }
                }
                //Check capture
                let attackLeft = new Coordinate(this.position.x + 1, this.position.y - 1);
                let attackRight = new Coordinate(this.position.x + 1, this.position.y + 1);
                if(b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player){
                    result.push(attackLeft);
                }
                if(b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player){
                    result.push(attackRight);
                }
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