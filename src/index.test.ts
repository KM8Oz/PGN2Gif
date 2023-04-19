
import { ChessGif, exampleGames, parseMoves } from './index';
import { writeFileSync } from "fs"
const chessGif = new ChessGif()
test(exampleGames[0].name, async () => {
    const moves = parseMoves(exampleGames[0].pgn);
    chessGif.resetCache();
    chessGif.loadMoves(moves);
    await chessGif.createGif(0, moves.length, false);

    const url = chessGif.asBase64Gif();
    const data = await url.arrayBuffer();
    writeFileSync("./test0.gif", Buffer.from(data));
    expect(url).toBeDefined();
});
test(exampleGames[1].name, async () => {
    const moves = parseMoves(exampleGames[1].pgn);
    chessGif.resetCache();
    chessGif.loadMoves(moves);
    await chessGif.createGif(0, moves.length, false);

    const url = chessGif.asBase64Gif();
    const data = await url.arrayBuffer();
    writeFileSync("./test1.gif", Buffer.from(data));
    expect(url).toBeDefined();
});

export default null