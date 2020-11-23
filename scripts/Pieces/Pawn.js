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
                PossibleMoves(b) {
                    let result = new Array();
                    let indexX = this.position.x;
                    let indexY = this.position.y;
                    if (this.player == 0) {
                        result.push(new Coordinate_1.Coordinate(indexX - 1, indexY));
                        if (this.firstMove) {
                            result.push(new Coordinate_1.Coordinate(indexX - 2, indexY));
                        }
                    }
                    else {
                        result.push(new Coordinate_1.Coordinate(indexX + 1, indexY));
                        if (this.firstMove) {
                            result.push(new Coordinate_1.Coordinate(indexX + 2, indexY));
                        }
                    }
                    return result;
                }
            };
            exports_1("Pawn", Pawn);
        }
    };
});
