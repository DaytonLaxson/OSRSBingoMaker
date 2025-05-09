import React, { useState } from 'react';
import BingoBoard from "../components/BingoBoard";

function CreateBoardPage() {
    const defaultSize = 3;
    const maxSize =10-defaultSize;
    const [gridSize, setGridSize] = useState(defaultSize);

    const ChangeSize = (event) => {
        setGridSize(Number(event.target.value));
    };

    const size = Array(gridSize * gridSize).fill(0).map((_, index) => index + 1);

    return (
        <div>
        <h3 htmlFor="gridSize">Size:</h3>
        <select id="gridSize" value={gridSize} onChange={ChangeSize}>
            {[...Array(maxSize).keys()].map(i => (
            <option key={i} value={i + defaultSize}>
                {i + defaultSize}x{i + defaultSize}
            </option>
            ))}
        </select>

        <BingoBoard size={size} />
        </div>
    );
    }

export default CreateBoardPage;