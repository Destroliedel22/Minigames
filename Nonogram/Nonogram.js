let tile;
let tiles = [];

let rowTile
let colTile;

let x;
let y;

window.onload = function()
{
    setGame();
}

function setGame()
{
    for(let i = 0; i < 11; i++)
    {
        for(let j = 0; j < 11; j++)
        {
            tile = document.createElement("div");
            tile.id = i.toString() + "-" + j.toString();
            if(i == 0 || j == 0)
            {
                //row filled count
                tile.classList.add("fillCounter");
                if(!i == 0 || !j == 0)
                {
                    tile.innerText = Math.floor(Math.random() * 10);
                }
            }
            else
            {
                tile.addEventListener("click", selectTile);
                tile.addEventListener("click", Checkrow);
            }
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
            tiles.push(tile);
        }
    }
}

function selectTile()
{
    if(this.classList.contains("tileSelected"))
    {
        this.classList.remove("tileSelected");
    }
    else
    {
        this.classList.add("tileSelected");
    }
}

function Checkrow()
{
    let coords = this.id.split("-");
    x = parseInt(coords[0]);
    y = parseInt(coords[1]);

    // Get the tile at i-0 (same row, first column)
    let rowTileId = x + "-0";
    rowTile = document.getElementById(rowTileId);

    // Get the tile at 0-j (first row, same column)
    let colTileId = "0-" + y;
    colTile = document.getElementById(colTileId);

    if(this.classList.contains("tileSelected"))
    {
        rowTile.innerText--;
        colTile.innerText--;
    }
    else
    {
        rowTile.innerText++;
        colTile.innerText++;
    }

    CheckZero();
}

function CheckZero()
{
    if (rowTile.innerText <= "0") {
        for (let col = 1; col < 11; col++) {
            let tile = document.getElementById(x + "-" + col);
            if(!tile.classList.contains("tileSelected"))
            {
                tile.classList.add("Crossed");
                tile.removeEventListener("click", selectTile);
                tile.removeEventListener("click", CheckZero);
            }
        }
    }
    else
    {
        tile.classList.remove("Crossed");
    }

    if (colTile.innerText <= "0") {
        for (let row = 1; row < 11; row++) {
            let tile = document.getElementById(row + "-" + y);
            if(!tile.classList.contains("tileSelected"))
            {
                tile.classList.add("Crossed");
            }
        }
    }
}