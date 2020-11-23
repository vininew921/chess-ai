System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, Queen;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
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
                PossibleMoves() {
                    throw new Error("Method not implemented.");
                }
            };
            exports_1("Queen", Queen);
        }
    };
});
