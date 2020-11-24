System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, Knight;
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
            Knight = class Knight extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Knight');
                    this.value = 3;
                }
                PossibleMoves(b) {
                    let tempResult = new Array();
                    let result = new Array();
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 2, this.position.y + 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 2, this.position.y - 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 2, this.position.y + 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 2, this.position.y - 1));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y - 2));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y - 2));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x + 1, this.position.y + 2));
                    tempResult.push(new Coordinate_1.Coordinate(this.position.x - 1, this.position.y + 2));
                    for (var i = 0; i < tempResult.length; i++) {
                        if (!(tempResult[i].x < 0 || tempResult[i].x > 7 || tempResult[i].y < 0 || tempResult[i].y > 7)) {
                            let p = b.GetPieceByPosition(tempResult[i]);
                            if (!p || p.player != this.player) {
                                result.push(tempResult[i]);
                            }
                        }
                    }
                    return result;
                }
            };
            exports_1("Knight", Knight);
        }
    };
});
