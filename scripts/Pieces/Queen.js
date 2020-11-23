System.register(["../Coordinate", "./Piece"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, Piece_1, Queen;
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
            Queen = class Queen extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Queen');
                    this.value = 9;
                }
                PossibleMoves(b) {
                    let result = new Array();
                    let indexX = this.position.x;
                    let indexY = this.position.y;
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            var c = new Coordinate_1.Coordinate(i, j);
                            if ((c.x != this.position.x || c.y != this.position.y) && (!b.GetPieceByPosition(c) || b.GetPieceByPosition(c).player != this.player)) {
                                if (c.x == this.position.x) {
                                    result.push(new Coordinate_1.Coordinate(this.position.x, c.y));
                                }
                                if (c.y == this.position.y) {
                                    result.push(new Coordinate_1.Coordinate(c.x, this.position.y));
                                }
                                if (c.x + c.y == this.position.x + this.position.y) {
                                    result.push(new Coordinate_1.Coordinate(c.x, c.y));
                                }
                                if (c.x - c.y == this.position.x - this.position.y) {
                                    result.push(new Coordinate_1.Coordinate(c.x, c.y));
                                }
                            }
                        }
                    }
                    return result;
                }
            };
            exports_1("Queen", Queen);
        }
    };
});
