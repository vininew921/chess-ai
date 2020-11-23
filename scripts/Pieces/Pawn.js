System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, Pawn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Piece_1_1) {
                Piece_1 = Piece_1_1;
            }
        ],
        execute: function () {
            Pawn = class Pawn extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Pawn');
                    this.value = 1;
                }
                Move() {
                    throw new Error("Method not implemented.");
                }
                PossibleMoves() {
                    throw new Error("Method not implemented.");
                }
            };
            exports_1("Pawn", Pawn);
        }
    };
});
