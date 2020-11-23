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
                    this.board = new Board_1.Board();
                    this.gameBoard = document.getElementById('gameBoard');
                    this.gameBoardHeight = 480;
                    this.gameBoardWidth = 480;
                    this.drawBoard();
                }
                drawBoard() {
                    let context = this.gameBoard.getContext("2d");
                    context.fillStyle = "#D2691E";
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            context.moveTo(0, this.gameBoardWidth / 8 * j);
                            context.lineTo(this.gameBoardHeight, this.gameBoardWidth / 8 * j);
                            context.moveTo(this.gameBoardWidth / 8 * i, 0);
                            context.lineTo(this.gameBoardWidth / 8 * i, this.gameBoardHeight);
                            var left = 0;
                            for (var a = 0; a < 8; a++) {
                                for (var b = 0; b < 8; b += 2) {
                                    var startX = b * this.gameBoardWidth / 8;
                                    if (a % 2 == 0)
                                        startX = (b + 1) * this.gameBoardWidth / 8;
                                    context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                                }
                            }
                        }
                    }
                    this.drawPieces();
                    console.log(this.board.getPiecePosition('Knight'));
                }
                drawPieces() {
                    let context = this.gameBoard.getContext("2d");
                    console.log(this.board.state);
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            var p = this.board.state[j][i];
                            if (p != undefined) {
                                var player;
                                if (p.player == 0) {
                                    player = "white";
                                }
                                else {
                                    player = "black";
                                }
                                let img = document.getElementById(`${p.texture}`);
                                context.drawImage(img, i * this.gameBoardWidth / 8, j * this.gameBoardWidth / 8);
                            }
                        }
                    }
                }
            };
            new GameState();
        }
    };
});
