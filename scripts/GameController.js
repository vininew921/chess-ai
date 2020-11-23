System.register(["./Board", "./Coordinate"], function (exports_1, context_1) {
    "use strict";
    var Board_1, Coordinate_1, GameController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Board_1_1) {
                Board_1 = Board_1_1;
            },
            function (Coordinate_1_1) {
                Coordinate_1 = Coordinate_1_1;
            }
        ],
        execute: function () {
            GameController = class GameController {
                constructor() {
                    this.board = new Board_1.Board();
                    this.turn = 1;
                    this.player = 0;
                    this.whitePoints = this.board.GetPoints(0);
                    this.blackPoints = this.board.GetPoints(1);
                    this.totalPoints = this.whitePoints - this.blackPoints;
                    this.gameBoard = document.getElementById('gameBoard');
                    this.gameHeader = document.getElementById('gameInfo');
                    this.SetHeader();
                    this.gameBoard.addEventListener("click", (event) => {
                        let clicked = this.EventToCoordinate(event);
                        let newPiece = this.GetPiece(clicked);
                        this.selectedPiece = newPiece == undefined || newPiece.player != this.player ? this.selectedPiece : newPiece;
                        if (newPiece) {
                            if (this.selectedPiece.player == this.player) {
                                this.ShowAvailableMoves();
                            }
                        }
                        this.CheckMove(clicked);
                    });
                    this.gameBoardHeight = 480;
                    this.gameBoardWidth = 480;
                    this.DrawBoard();
                }
                SetHeader() {
                    this.gameHeader.innerHTML = `
            Player: ${this.player == 0 ? 'White' : 'Black'} <br>
            Turn: ${this.turn} <br>
            Evaluation: ${this.totalPoints} <br>
        `;
                }
                CheckMove(c) {
                    if (this.possibleMoves) {
                        this.possibleMoves.forEach(pm => {
                            if (pm.x == c.x && pm.y == c.y) {
                                this.board.MovePiece(this.selectedPiece, c);
                                this.ChangeTurn();
                            }
                        });
                    }
                }
                ChangeTurn() {
                    this.possibleMoves = null;
                    this.DrawBoard();
                    console.clear();
                    console.table(this.board.GetBoard());
                    this.whitePoints = this.board.GetPoints(0);
                    this.blackPoints = this.board.GetPoints(1);
                    this.totalPoints = this.whitePoints - this.blackPoints;
                    if (this.player == 0) {
                        this.player = 1;
                    }
                    else {
                        this.player = 0;
                        this.turn += 1;
                    }
                    this.SetHeader();
                }
                ShowAvailableMoves() {
                    this.DrawBoard();
                    this.possibleMoves = this.selectedPiece.PossibleMoves(this.board);
                    let context = this.gameBoard.getContext("2d");
                    context.fillStyle = "#00FFFF";
                    this.possibleMoves.forEach(c => {
                        var posX = c.y * (this.gameBoardWidth / 8);
                        var posY = c.x * (this.gameBoardHeight / 8);
                        context.fillRect(posX + 1, posY + 1, (this.gameBoardWidth / 8) - 2, (this.gameBoardHeight / 8) - 2);
                        let redrawPiece = this.GetPiece(c);
                        if (redrawPiece) {
                            this.DrawPiece(redrawPiece, context);
                        }
                    });
                }
                EventToCoordinate(ev) {
                    var rect = this.gameBoard.getBoundingClientRect();
                    let mouseX = ev.clientX - rect.left;
                    let mouseY = ev.clientY - rect.top;
                    let indexX = Math.floor(mouseX / (this.gameBoardWidth / 8));
                    let indexY = Math.floor(mouseY / (this.gameBoardHeight / 8));
                    return new Coordinate_1.Coordinate(indexY, indexX);
                }
                GetPiece(index) {
                    return this.board.GetPieceByPosition(index);
                }
                DrawBoard() {
                    let context = this.gameBoard.getContext("2d");
                    context.strokeStyle = "#000000";
                    var left = 0;
                    for (var a = 0; a < 8; a++) {
                        context.fillStyle = "#D2691E";
                        for (var b = 0; b < 8; b += 2) {
                            var startX = b * this.gameBoardWidth / 8;
                            if (a % 2 == 0)
                                startX = (b + 1) * this.gameBoardWidth / 8;
                            context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                            context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                            context.stroke();
                        }
                        context.fillStyle = "#FFFFFF";
                        for (var b = 1; b < 8; b += 2) {
                            var startX = b * this.gameBoardWidth / 8;
                            if (a % 2 == 0)
                                startX = (b - 1) * this.gameBoardWidth / 8;
                            context.fillRect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                            context.rect(startX + left, (a * this.gameBoardWidth / 8), this.gameBoardWidth / 8, this.gameBoardWidth / 8);
                            context.stroke();
                        }
                    }
                    this.DrawPieces();
                }
                DrawPieces() {
                    let pieceId = 0;
                    let context = this.gameBoard.getContext("2d");
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            var p = this.GetPiece(new Coordinate_1.Coordinate(i, j));
                            if (p) {
                                pieceId++;
                                p.id = pieceId;
                                var player;
                                if (p.player == 0) {
                                    player = "white";
                                }
                                else {
                                    player = "black";
                                }
                                this.DrawPiece(p, context);
                            }
                        }
                    }
                }
                DrawPiece(p, context) {
                    let img = document.getElementById(`${p.texture}`);
                    context.drawImage(img, p.position.y * this.gameBoardWidth / 8, p.position.x * this.gameBoardWidth / 8);
                }
            };
            new GameController();
        }
    };
});
