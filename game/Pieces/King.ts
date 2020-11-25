import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class King extends Piece {

    value: number;
    
    PossibleMoves(b: Board): Coordinate[] {
        let result = new Array<Coordinate>();

        let tempResult = new Array<Coordinate>();

        this.attacking = new Array<Coordinate>();

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
                if(!p || p.player != this.player){
                    result.push(tempResult[i]);
                }
                this.attacking.push(tempResult[i]);
            }
            
        }

        return result;
    }
    
    constructor(player: number) {
        super(player, 'King');
        this.value = 999;
    }

}