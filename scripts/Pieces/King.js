System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, King;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
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
                PossibleMoves() {
                    throw new Error("Method not implemented.");
                }
            };
            exports_1("King", King);
        }
    };
});
