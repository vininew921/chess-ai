System.register([], function (exports_1, context_1) {
    "use strict";
    var Piece;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Piece = class Piece {
                constructor(p, n) {
                    this.player = p;
                    this.name = n;
                    this.attacking = new Array();
                    if (this.player == 0) {
                        this.texture = `${this.name.toLowerCase()}_white`;
                    }
                    else {
                        this.texture = `${this.name.toLowerCase()}_black`;
                    }
                }
            };
            exports_1("Piece", Piece);
        }
    };
});
