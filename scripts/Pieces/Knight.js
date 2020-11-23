System.register(["./Piece"], function (exports_1, context_1) {
    "use strict";
    var Piece_1, Knight;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Piece_1_1) {
                Piece_1 = Piece_1_1;
            }
        ],
        execute: function () {
            Knight = class Knight extends Piece_1.Piece {
                constructor(player) {
                    super(player, 'Knight');
                }
            };
            exports_1("Knight", Knight);
        }
    };
});
