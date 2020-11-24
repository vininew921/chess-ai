System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, Bishop;
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
            Bishop = class Bishop extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Bishop');
                    this.value = 3;
                }
                PossibleMoves(b) {
                    let result = new Array();
                    let foundDLUp = false;
                    let foundDLDown = false;
                    let foundDRUp = false;
                    let foundDRDown = false;
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            var c = new Coordinate_1.Coordinate(i, j);
                            if ((c.x != this.position.x || c.y != this.position.y)) {
                                //Diagonal right
                                if (c.x + c.y == this.position.x + this.position.y) {
                                    let availablePos = new Coordinate_1.Coordinate(c.x, c.y);
                                    let lookingPiece = b.GetPieceByPosition(availablePos);
                                    if (c.y < this.position.y) {
                                        if (!foundDRDown) {
                                            if (lookingPiece) {
                                                foundDRDown = true;
                                                if (lookingPiece.player != this.player) {
                                                    result.push(availablePos);
                                                }
                                            }
                                            else {
                                                result.push(availablePos);
                                            }
                                        }
                                    }
                                    else if (c.y > this.position.y) {
                                        let inverseX = this.position.x - 1 - c.x + (c.x + c.y > 7 ? c.x + c.y - 7 : 0);
                                        let inverseY = this.position.y + 1 + c.x - (c.x + c.y > 7 ? c.x + c.y - 7 : 0);
                                        let inverseAvailable = new Coordinate_1.Coordinate(inverseX, inverseY);
                                        lookingPiece = b.GetPieceByPosition(inverseAvailable);
                                        if (!foundDRUp) {
                                            if (lookingPiece) {
                                                foundDRUp = true;
                                                if (lookingPiece.player != this.player) { //2,6
                                                    result.push(inverseAvailable);
                                                }
                                            }
                                            else {
                                                result.push(inverseAvailable);
                                            }
                                        }
                                    }
                                }
                                //Diagonal left
                                if (c.x - c.y == this.position.x - this.position.y) {
                                    let availablePos = new Coordinate_1.Coordinate(c.x, c.y);
                                    let lookingPiece = b.GetPieceByPosition(availablePos);
                                    if (c.x > this.position.x) {
                                        if (!foundDLDown) {
                                            if (lookingPiece) {
                                                foundDLDown = true;
                                                if (lookingPiece.player != this.player) {
                                                    result.push(availablePos);
                                                }
                                            }
                                            else {
                                                result.push(availablePos);
                                            }
                                        }
                                    }
                                    else if (c.x < this.position.x) {
                                        let inverseX = this.position.x - 1 - c.x + (c.x - c.y > 0 ? c.x - c.y : 0);
                                        let inverseY = this.position.y - 1 - c.x + (c.x - c.y > 0 ? c.x - c.y : 0);
                                        let inverseAvailable = new Coordinate_1.Coordinate(inverseX, inverseY);
                                        lookingPiece = b.GetPieceByPosition(inverseAvailable);
                                        if (!foundDLUp) {
                                            if (lookingPiece) {
                                                foundDLUp = true;
                                                if (lookingPiece.player != this.player) {
                                                    result.push(inverseAvailable);
                                                }
                                            }
                                            else {
                                                result.push(inverseAvailable);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return result;
                }
            };
            exports_1("Bishop", Bishop);
        }
    };
});
