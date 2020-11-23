System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, Rook;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Piece_1_1) {
                Piece_1 = Piece_1_1;
            }
        ],
        execute: function () {
            Rook = class Rook extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Rook');
                }
            };
            exports_1("Rook", Rook);
        }
    };
});
