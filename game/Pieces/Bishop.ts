import { Board } from "../Board";
import { Coordinate } from "../Coordinate";
import { Piece } from "./Piece";

export class Bishop extends Piece {

    value: number;
    
    UpdatePossibleMoves(b: Board): void {
        this.attacking = new Array<Coordinate>();
        this.possibleMoves = new Array<Coordinate>();

        let foundDLUp = false;
        let foundDLDown = false;
        let foundDRUp = false;
        let foundDRDown = false;
         
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                var c = new Coordinate(i, j);
                if((c.x != this.position.x || c.y != this.position.y)){

                    //Diagonal right
                    if(c.x + c.y == this.position.x + this.position.y){
                        let availablePos = new Coordinate(c.x, c.y);
                        let lookingPiece = b.GetPieceByPosition(availablePos);
                        if(c.y < this.position.y){
                            if(!foundDRDown){
                                if(lookingPiece){
                                    foundDRDown = true;
                                    if(lookingPiece.player != this.player){
                                        this.possibleMoves.push(availablePos);
                                    }
                                    this.attacking.push(availablePos);
                                }
                                else{
                                    this.possibleMoves.push(availablePos);
                                    this.attacking.push(availablePos);
                                }
                            }
                        }
                        else if(c.y > this.position.y){
                            let inverseX = this.position.x - 1 - c.x  + (c.x + c.y > 7 ? c.x + c.y - 7 : 0);
                            let inverseY = this.position.y + 1 + c.x  - (c.x + c.y > 7 ? c.x + c.y - 7 : 0);   
                            let inverseAvailable = new Coordinate(inverseX, inverseY);
                            lookingPiece = b.GetPieceByPosition(inverseAvailable);
                            if(!foundDRUp){
                                if(lookingPiece){
                                    foundDRUp = true;
                                    if(lookingPiece.player != this.player){ //2,6
                                        this.possibleMoves.push(inverseAvailable);
                                    }
                                    this.attacking.push(inverseAvailable);
                                }
                                else{
                                    this.possibleMoves.push(inverseAvailable);
                                    this.attacking.push(inverseAvailable);
                                }
                            }
                        }
                    }

                    //Diagonal left
                    if(c.x - c.y == this.position.x - this.position.y){
                        let availablePos = new Coordinate(c.x, c.y);
                        let lookingPiece = b.GetPieceByPosition(availablePos);
                        if(c.x > this.position.x){
                            if(!foundDLDown){
                                if(lookingPiece){
                                    foundDLDown = true;
                                    if(lookingPiece.player != this.player){
                                        this.possibleMoves.push(availablePos);
                                    }
                                    this.attacking.push(availablePos);
                                }
                                else{
                                    this.possibleMoves.push(availablePos);
                                    this.attacking.push(availablePos);
                                }
                            }
                        }
                        else if(c.x < this.position.x){
                            let inverseX = this.position.x - 1 - c.x + (c.x - c.y > 0 ? c.x - c.y : 0);
                            let inverseY = this.position.y - 1 - c.x + (c.x - c.y > 0 ? c.x - c.y : 0);  
                            
                            let inverseAvailable = new Coordinate(inverseX, inverseY);
                            
                            lookingPiece = b.GetPieceByPosition(inverseAvailable);
                            if(!foundDLUp){
                                if(lookingPiece){
                                    foundDLUp = true;
                                    if(lookingPiece.player != this.player){
                                        this.possibleMoves.push(inverseAvailable);
                                    }
                                    this.attacking.push(inverseAvailable);
                                }
                                else{
                                    this.possibleMoves.push(inverseAvailable);
                                    this.attacking.push(inverseAvailable);
                                }
                            }
                        }
                    }
                }
                
            }
        }
    }
    
    constructor(player: number) {
        super(player, 'Bishop');
        this.value = 3;
    }
    
}