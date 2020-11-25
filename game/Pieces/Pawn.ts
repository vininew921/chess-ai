import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Pawn extends Piece {

    value: number;
    firstMove: boolean;

    UpdatePossibleMoves(b: Board): void {
        this.possibleMoves = new Array<Coordinate>();
        let indexX = this.position.x;
        let indexY = this.position.y;

        this.attacking = new Array<Coordinate>();

        if(this.player == 0){
            if(this.position.x < 7){
                if(!b.GetPieceByPosition(new Coordinate(this.position.x - 1, this.position.y))){
                    this.possibleMoves.push(new Coordinate(indexX - 1, indexY));
                    if(this.firstMove){
                        if(!b.GetPieceByPosition(new Coordinate(indexX - 2, indexY))){
                            this.possibleMoves.push(new Coordinate(indexX - 2, indexY));
                        }
                    }
                }
                //Check capture
                let attackLeft = new Coordinate(this.position.x - 1, this.position.y - 1);
                let attackRight = new Coordinate(this.position.x - 1, this.position.y + 1);
                if(b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player){
                    this.possibleMoves.push(attackLeft);
                }
                if(b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player){
                    this.possibleMoves.push(attackRight);
                }
                this.attacking.push(attackLeft);
                this.attacking.push(attackRight);
            }
        }
        else{
            if(this.position.x > 0){
                if(!b.GetPieceByPosition(new Coordinate(this.position.x + 1, this.position.y))){
                    this.possibleMoves.push(new Coordinate(indexX + 1, indexY));
                    if(this.firstMove){
                        if(!b.GetPieceByPosition(new Coordinate(indexX + 2, indexY))){
                            this.possibleMoves.push(new Coordinate(indexX + 2, indexY));
                        }
                    }
                }
                //Check capture
                let attackLeft = new Coordinate(this.position.x + 1, this.position.y - 1);
                let attackRight = new Coordinate(this.position.x + 1, this.position.y + 1);
                if(b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player){
                    this.possibleMoves.push(attackLeft);
                }
                if(b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player){
                    this.possibleMoves.push(attackRight);
                }
                this.attacking.push(attackLeft);
                this.attacking.push(attackRight);
            }
        }
    }
    
    constructor(player: number) {
        super(player, 'Pawn');
        this.value = 1;
        this.firstMove = true;
    }
    
}