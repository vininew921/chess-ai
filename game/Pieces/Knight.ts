import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Knight extends Piece {
    
    value: number;
    
    UpdatePossibleMoves(b: Board): void {
        let tempResult = new Array<Coordinate>();
        this.possibleMoves = new Array<Coordinate>();
        this.attacking = new Array<Coordinate>();

        tempResult.push(new Coordinate(this.position.x - 2, this.position.y + 1));
        tempResult.push(new Coordinate(this.position.x - 2, this.position.y - 1));
        tempResult.push(new Coordinate(this.position.x + 2, this.position.y + 1));
        tempResult.push(new Coordinate(this.position.x + 2, this.position.y - 1));

        tempResult.push(new Coordinate(this.position.x + 1, this.position.y - 2));
        tempResult.push(new Coordinate(this.position.x - 1, this.position.y - 2));
        tempResult.push(new Coordinate(this.position.x + 1, this.position.y + 2));
        tempResult.push(new Coordinate(this.position.x - 1, this.position.y + 2));

        for(var i = 0; i < tempResult.length; i++){
            if(!(tempResult[i].x < 0 || tempResult[i].x > 7 || tempResult[i].y < 0 || tempResult[i].y > 7)){
                let p = b.GetPieceByPosition(tempResult[i]);
                if(!p || p.player != this.player){
                    this.possibleMoves.push(tempResult[i]);
                }
                this.attacking.push(tempResult[i]);
            }
        }
    }
    
    constructor(player: number) {
        super(player, 'Knight');
        this.value = 3;
    }
    
}