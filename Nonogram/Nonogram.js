let tile;
let tiles = [];

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
                tile.classList.add("fillCounter")
            }
            else
            {
                tile.addEventListener("click", selectTile);
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