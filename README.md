# ChessGif
 > Simple and light PGN to Gif library
## Usage

```typescript 
import { chessgif, parseMoves } from "pgn2gif"

const moves = parseMoves(exampleGames[0].pgn); // extract moves from PGN text

chessGif.resetCache(); // reset boardCache (optional first time)

chessGif.loadMoves(moves); // load moves 

await chessGif.createGif(0, moves.length, false); // generate blobs of gif file

const url = chessGif.asBase64Gif(); // export file blobs  typeof gif

const data = await url.arrayBuffer(); // convert it to arraybuffer

writeFileSync("./test0.gif", Buffer.from(data)); // write it to a file 
```

## Methods

### resetCache

reset boardCache (optional first time)

### loadMoves

load parsed moves

### createGif

convert moves into gif frames

**Todo :**
> - [ ] add styles options
