System.register(["./Board"], function (exports_1, context_1) {
    "use strict";
    var Board_1, GameState;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Board_1_1) {
                Board_1 = Board_1_1;
            }
        ],
        execute: function () {
            GameState = class GameState {
                constructor() {
                    this.btn = document.getElementById('testeButton');
                    this.btn.addEventListener("click", (e) => this.daleeee());
                }
                daleeee() {
                    console.log(new Board_1.Board());
                }
            };
            new GameState();
        }
    };
});
