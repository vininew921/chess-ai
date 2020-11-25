System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, Pawn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Coordinate_1_1) {
                Coordinate_1 = Coordinate_1_1;
            },
            function (Piece_1_1) {
                Piece_1 = Piece_1_1;
            }
        ],
        execute: function () {
            Pawn = class Pawn extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Pawn');
                    this.value = 1;
                    this.firstMove = true;
                }
                UpdatePossibleMoves(b) {
                    this.possibleMoves = new Array();
                    let indexX = this.position.x;
                    let indexY = this.position.y;
                    this.attacking = new Array();
                    if (this.player == 0) {
                        if (this.position.x < 7) {
                            if (!b.GetPieceByPosition(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y))) {
                                this.possibleMoves.push(new Coordinate_1.Coordinate(indexX - 1, indexY));
                                if (this.firstMove) {
                                    if (!b.GetPieceByPosition(new Coordinate_1.Coordinate(indexX - 2, indexY))) {
                                        this.possibleMoves.push(new Coordinate_1.Coordinate(indexX - 2, indexY));
                                    }
                                }
                            }
                            //Check capture
                            let attackLeft = new Coordinate_1.Coordinate(this.position.x - 1, this.position.y - 1);
                            let attackRight = new Coordinate_1.Coordinate(this.position.x - 1, this.position.y + 1);
                            if (b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player) {
                                this.possibleMoves.push(attackLeft);
                            }
                            if (b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player) {
                                this.possibleMoves.push(attackRight);
                            }
                            this.attacking.push(attackLeft);
                            this.attacking.push(attackRight);
                        }
                    }
                    else {
                        if (this.position.x > 0) {
                            if (!b.GetPieceByPosition(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y))) {
                                this.possibleMoves.push(new Coordinate_1.Coordinate(indexX + 1, indexY));
                                if (this.firstMove) {
                                    if (!b.GetPieceByPosition(new Coordinate_1.Coordinate(indexX + 2, indexY))) {
                                        this.possibleMoves.push(new Coordinate_1.Coordinate(indexX + 2, indexY));
                                    }
                                }
                            }
                            //Check capture
                            let attackLeft = new Coordinate_1.Coordinate(this.position.x + 1, this.position.y - 1);
                            let attackRight = new Coordinate_1.Coordinate(this.position.x + 1, this.position.y + 1);
                            if (b.GetPieceByPosition(attackLeft) && b.GetPieceByPosition(attackLeft).player != this.player) {
                                this.possibleMoves.push(attackLeft);
                            }
                            if (b.GetPieceByPosition(attackRight) && b.GetPieceByPosition(attackRight).player != this.player) {
                                this.possibleMoves.push(attackRight);
                            }
                            this.attacking.push(attackLeft);
                            this.attacking.push(attackRight);
                        }
                    }
                }
            };
            exports_1("Pawn", Pawn);
        }
    };
});
