
function BingoTile({tile}){

    function onTileClick(){
        alert('Clicked')
    }

    return(
        <button classname="tile-click" onClick={onTileClick}>
            <div className="tile-name">
                <p>"call tile name?"</p>
            </div>
            <div className="tile-info">
                <p>{tile.info}</p>
            </div>
        </button>
    );
}

export default BingoTile