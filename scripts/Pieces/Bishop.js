System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, Bishop;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Piece_1_1) {
                Piece_1 = Piece_1_1;
            }
        ],
        execute: function () {
            Bishop = class Bishop extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Bishop');
                    if (player == 0) {
                        this.texture = 'bishop_white';
                    }
                    else {
                        this.texture = 'bishop_black';
                    }
                }
            };
            exports_1("Bishop", Bishop);
        }
    };
});
