import { ChessGif, exampleGames, parseMoves } from './index';
let chessGif = new ChessGif()
test(exampleGames[0].name, async () => {
    let moves = parseMoves(exampleGames[0].pgn);
    chessGif.resetCache();
    chessGif.loadMoves(moves);
    await chessGif.createGif(0, moves.length, false);

    const url = chessGif.asBase64Gif();
    expect(url).toBeDefined();
});
test(exampleGames[1].name, async () => {
    let moves = parseMoves(exampleGames[1].pgn);
    chessGif.resetCache();
    chessGif.loadMoves(moves);
    await chessGif.createGif(0, moves.length, false);

    const url = chessGif.asBase64Gif();
    expect(url).toBeDefined();
});