import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class King extends Piece {

    value: number;
    moved: boolean;
    inCheck: boolean;
    
    UpdatePossibleMoves(b: Board): void {
        let tempResult = new Array<Coordinate>();

        this.attacking = new Array<Coordinate>();
        this.possibleMoves = new Array<Coordinate>();

        tempResult.push(new Coordinate(this.position.x + 1, this.position.y + 1));
        tempResult.push(new Coordinate(this.position.x + 1, this.position.y - 1));
        tempResult.push(new Coordinate(this.position.x - 1, this.position.y + 1));
        tempResult.push(new Coordinate(this.position.x - 1, this.position.y - 1));
        
        tempResult.push(new Coordinate(this.position.x, this.position.y + 1));
        tempResult.push(new Coordinate(this.position.x, this.position.y - 1));
        tempResult.push(new Coordinate(this.position.x + 1, this.position.y));
        tempResult.push(new Coordinate(this.position.x - 1, this.position.y));

        for(var i = 0; i < tempResult.length; i++){
            if(!(tempResult[i].x < 0 || tempResult[i].x > 7 || tempResult[i].y < 0 || tempResult[i].y > 7)){
                let p = b.GetPieceByPosition(tempResult[i]);
                let square = b.IsSquareAttacked(tempResult[i], this.player);
                if(!square){
                    if((!p || p.player != this.player)){
                        this.possibleMoves.push(tempResult[i]);
                    }
                }
                this.attacking.push(tempResult[i]);
                
            }
        }
    }
    
    constructor(player: number) {
        super(player, 'King');
        this.value = 999;
        this.moved = false;
        this.inCheck = false;
    }

}