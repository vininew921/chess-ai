import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Queen extends Piece {

    value: number;

    PossibleMoves(b: Board): Array<Coordinate> {
        let result = new Array<Coordinate>();
        let indexX = this.position.x;
        let indexY = this.position.y;

        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                var c = new Coordinate(i, j);
                if((c.x != this.position.x || c.y != this.position.y) && (!b.GetPieceByPosition(c) || b.GetPieceByPosition(c).player != this.player)){
                    if(c.x == this.position.x){
                        result.push(new Coordinate(this.position.x, c.y));
                    }
                    if(c.y == this.position.y){
                        result.push(new Coordinate(c.x, this.position.y));
                    }
                    if(c.x + c.y == this.position.x + this.position.y){
                        result.push(new Coordinate(c.x, c.y));
                    }
                    if(c.x - c.y == this.position.x - this.position.y){
                        result.push(new Coordinate(c.x, c.y));
                    }
                }
                
            }
        }

        return result;
    }
    
    constructor(player: number) {
        super(player, 'Queen');
        this.value = 9;
    }
    
}