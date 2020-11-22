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
                    this.state = [
                        [new PiecesExport_1.Rook(1)], [new PiecesExport_1.Knight(1)], [new PiecesExport_1.Bishop(1)], [new PiecesExport_1.Queen(1)], [new PiecesExport_1.King(1)], [new PiecesExport_1.Bishop(1)], [new PiecesExport_1.Knight(1)], [new PiecesExport_1.Rook(1)],
                        [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)], [new PiecesExport_1.Pawn(1)],
                        [], [], [], [], [], [], [], [],
                        [], [], [], [], [], [], [], [],
                        [], [], [], [], [], [], [], [],
                        [], [], [], [], [], [], [], [],
                        [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)], [new PiecesExport_1.Pawn(0)],
                        [new PiecesExport_1.Rook(0)], [new PiecesExport_1.Knight(0)], [new PiecesExport_1.Bishop(0)], [new PiecesExport_1.King(0)], [new PiecesExport_1.Queen(0)], [new PiecesExport_1.Bishop(0)], [new PiecesExport_1.Knight(0)], [new PiecesExport_1.Rook(0)],
                    ];
                }
                getPiecePosition(name) {
                    let result;
                    let x = 0;
                    let y = 0;
                    let found = false;
                    this.state.forEach(row => {
                        row.forEach(piece => {
                            if (piece.name == name) {
                                result.push(new Coordinate_1.Coordinate(x, y));
                            }
                            x++;
                        });
                        y++;
                    });
                    return result;
                }
            };
            exports_1("Board", Board);
        }
    };
});
