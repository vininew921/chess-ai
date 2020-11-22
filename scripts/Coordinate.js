System.register([], function (exports_1, context_1) {
    "use strict";
    var Coordinate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Coordinate = class Coordinate {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                }
            };
            exports_1("Coordinate", Coordinate);
        }
    };
});
