System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, Rook;
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
            Rook = class Rook extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Rook');
                    this.value = 5;
                }
                PossibleMoves(b) {
                    let result = new Array();
                    let foundLeft = false;
                    let foundRight = false;
                    let foundUp = false;
                    let foundDown = false;
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            var c = new Coordinate_1.Coordinate(i, j);
                            if ((c.x != this.position.x || c.y != this.position.y)) {
                                //Horizontal
                                if (c.x == this.position.x) {
                                    let availablePos = new Coordinate_1.Coordinate(this.position.x, c.y);
                                    let lookingPiece = b.GetPieceByPosition(availablePos);
                                    if (c.y > this.position.y) {
                                        if (!foundRight) {
                                            if (lookingPiece) {
                                                foundRight = true;
                                                if (lookingPiece.player != this.player) {
                                                    result.push(availablePos);
                                                }
                                            }
                                            else {
                                                result.push(availablePos);
                                            }
                                        }
                                    }
                                    else if (c.y < this.position.y) {
                                        let inverseY = this.position.y - 1 - c.y;
                                        let inverseAvailable = new Coordinate_1.Coordinate(availablePos.x, inverseY);
                                        lookingPiece = b.GetPieceByPosition(inverseAvailable);
                                        if (!foundLeft) {
                                            if (lookingPiece) {
                                                foundLeft = true;
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
                                //Vertical
                                if (c.y == this.position.y) {
                                    let availablePos = new Coordinate_1.Coordinate(c.x, this.position.y);
                                    let lookingPiece = b.GetPieceByPosition(availablePos);
                                    if (c.x > this.position.x) {
                                        if (!foundDown) {
                                            if (lookingPiece) {
                                                foundDown = true;
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
                                        let inverseX = this.position.x - 1 - c.x;
                                        let inverseAvailable = new Coordinate_1.Coordinate(inverseX, availablePos.y);
                                        lookingPiece = b.GetPieceByPosition(inverseAvailable);
                                        if (!foundUp) {
                                            if (lookingPiece) {
                                                foundUp = true;
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
            exports_1("Rook", Rook);
        }
    };
});
