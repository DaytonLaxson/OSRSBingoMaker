import React from 'react';
import BingoTile from "./BingoTile";
import '../css/CreateBoardPage.css';

function BingoBoard({ size }) {
  const tiles = size;
  const gridSize = Math.sqrt(tiles.length);

  const bingogrid = tiles.map((tile, index) => (
      <div key={index} className="bingo-tile">
          <BingoTile tile={{ info: `get ${tile} whips` }} />
      </div>
  ));

  return (
      <div className="bingo-board" style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gap: '10px',
          }}
      >
          {bingogrid}
      </div>
  );
}

export default BingoBoard;