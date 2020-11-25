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
                    this.pieces = new Array();
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
                    this.UpdatePossibleMoves();
                }
                UpdatePossibleMoves() {
                    this.pieces = new Array();
                    this.whitePieces = new Array();
                    this.blackPieces = new Array();
                    for (var i = 0; i < 8; i++) {
                        for (var j = 0; j < 8; j++) {
                            let piece = this.GetPieceByPosition(new Coordinate_1.Coordinate(i, j));
                            if (piece != undefined) {
                                this.pieces.push(piece);
                                if (piece.player == 0) {
                                    this.whitePieces.push(piece);
                                }
                                else {
                                    this.blackPieces.push(piece);
                                }
                                piece.position = new Coordinate_1.Coordinate(i, j);
                                piece.UpdatePossibleMoves(this);
                            }
                        }
                    }
                }
                MovePiece(piece, newPos) {
                    this.position[piece.position.x][piece.position.y] = undefined;
                    piece.position = newPos;
                    if (typeof piece == typeof PiecesExport_1.Pawn) {
                        var p = piece;
                        p.firstMove = false;
                    }
                    else if (typeof piece == typeof PiecesExport_1.King) {
                        var k = piece;
                        k.moved = true;
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
                IsSquareAttacked(c, currentPlayer) {
                    let looking = currentPlayer == 0 ? this.blackPieces : this.whitePieces;
                    let result = false;
                    looking.forEach(piece => {
                        piece.attacking.forEach(square => {
                            if (square.x == c.x && square.y == c.y) {
                                result = true;
                            }
                        });
                    });
                    console.log(`${c.x}, ${c.y}, ${currentPlayer == 0 ? 'White' : 'Black'}, ${result}`);
                    return result;
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
