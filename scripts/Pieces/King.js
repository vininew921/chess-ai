System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, King;
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
            King = class King extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'King');
                    this.value = 999;
                }
                PossibleMoves(b) {
                    let result = new Array();
                    let tempResult = new Array();
                    this.attacking = new Array();
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y + 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y - 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y + 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y - 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x, this.position.y + 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x, this.position.y - 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y));
                    for (var i = 0; i < tempResult.length; i++) {
                        if (!(tempResult[i].x < 0 || tempResult[i].x > 7 || tempResult[i].y < 0 || tempResult[i].y > 7)) {
                            let p = b.GetPieceByPosition(tempResult[i]);
                            if (!p || p.player != this.player) {
                                result.push(tempResult[i]);
                            }
                            this.attacking.push(tempResult[i]);
                        }
                    }
                    return result;
                }
            };
            exports_1("King", King);
        }
    };
});
