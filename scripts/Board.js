System.register(["./Coordinate", "./Pieces/PiecesExport"], function (exports_1, context_1) {
    "use strict";
    var Coordinate_1, PiecesExport_1, Board;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Coordinate_1_1) {
                Coordinate_1 = Coordinate_1_1;
            },
            function (PiecesExport_1_1) {
                PiecesExport_1 = PiecesExport_1_1;
            }
        ],
        execute: function () {
            Board = class Board {
                constructor() {
                    this.position = [
                        [new PiecesExport_1.Rook(1), new PiecesExport_1.Knight(1), new PiecesExport_1.Bishop(1), new PiecesExport_1.Queen(1), new PiecesExport_1.King(1), new PiecesExport_1.Bishop(1), new PiecesExport_1.Knight(1), new PiecesExport_1.Rook(1)],
                        [new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1), new PiecesExport_1.Pawn(1)],
                        [, , , , , , ,],
                        [, , , , , , ,],
                        [, , , , , , ,],
                        [, , , , , , ,],
                        [new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0), new PiecesExport_1.Pawn(0)],
                        [new PiecesExport_1.Rook(0), new PiecesExport_1.Knight(0), new PiecesExport_1.Bishop(0), new PiecesExport_1.Queen(0), new PiecesExport_1.King(0), new PiecesExport_1.Bishop(0), new PiecesExport_1.Knight(0), new PiecesExport_1.Rook(0)],
                    ];
                    console.table(this.position);
                    this.SetPiecesPosition();
                }
                SetPiecesPosition() {
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            let piece = this.GetBoard()[i][j];
                            if (piece != undefined) {
                                piece.position = new Coordinate_1.Coordinate(i, j);
                            }
                        }
                    }
                }
                MovePiece(piece, newPos) {
                    this.position[piece.position.x][piece.position.y] = undefined;
                    piece.position = newPos;
                    if (piece != undefined) {
                        var p = piece;
                        p.firstMove = false;
                    }
                    this.position[newPos.x][newPos.y] = piece;
                }
                GetBoard() {
                    return this.position;
                }
                GetPieceByPosition(c) {
                    if (c.x < 0 || c.x > 7 || c.y < 0 || c.y > 7) {
                        return null;
                    }
                    return this.position[c.x][c.y];
                }
                GetPoints(player) {
                    var points = 0;
                    this.position.forEach(element => {
                        element.forEach(p => {
                            if (p != undefined) {
                                if (p.player == player) {
                                    points += p.value;
                                }
                            }
                        });
                    });
                    return points;
                }
            };
            exports_1("Board", Board);
        }
    };
});
