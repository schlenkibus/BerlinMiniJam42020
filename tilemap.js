
let tilemap = {};

let tilemap_path = "resources/tilemap.png"
let tilemapfile_path = "resources/tiles.json"

let tileWidth = 16;
let tileHeight = 16;
let tileMargin = 1;

let tileMapVerticalEntries = 20;
let tileMapHorizontalEntries = 27;

function loadTilemap() {
    tilemap = getFileContents(tilemapfile_path)

    tilemap = new Array(50);
    for (var i = 0; i < 50; i++) {
        tilemap[i] = new Array(50);
        for (var j = 0; j < 50; j++) {
            tilemap[i][j] = {
                tileType: i + j,
                x: j,
                y: i,
                walkable: true
            };
        }
    }
}

function getFileContents(filename)
{
    var xmlHTTP = new XMLHttpRequest();
    try
    {
    xmlHTTP.open("GET", filename, false);
    xmlHTTP.send(null);
    }
    catch (e) {
        window.alert("Unable to load the requested file.");
        return;
    }

    return xmlHTTP.responseText;
}

function getType(x, y) {
    return tilemap[y][x].tileType;
}

function getXOffset(tileType) {
    var col = tileType % tileMapHorizontalEntries;
    return col * (tileHeight + tileMargin);
}

function getYOffset(tileType) {
    var row = Math.floor(tileType / tileMapHorizontalEntries);
    return row * (tileHeight + tileMargin);
}

function drawTile(x, y) {
    var tileType = getType(x, y);
    var tileX = getXOffset(tileType);
    var tileY = getYOffset(tileType);
    image(tilemapImage, x * tileWidth, y * tileHeight, tileWidth, tileHeight, tileX, tileY, tileWidth, tileHeight);
}

function drawTiles() {
    for(var y = 0; y < 50; y++) {
        for(var x = 0; x < 50; x++) {
            drawTile(x, y);
        }
    }
}

function changeTile(pX, pY) {
    if(pX > 800) {
        updateTileEditor(pX, pY);
        return;
    }

    var x = Number(pX / tileWidth).toFixed(0) - 1;
    var y = Number(pY / tileHeight).toFixed(0) - 1;

    if(brushSize == 0) {
        tilemap[y][x].tileType = currentPaintTile;
    } else {
        for(var dy = Math.max(y - brushSize, 0); dy < Math.min(y + brushSize, 50); dy++) {
            for(var dx = Math.max(x - brushSize, 0); dx < Math.min(x + brushSize, 50); dx++) {
                tilemap[dy][dx].tileType = currentPaintTile;
            }
        }
    }

}

let currentPaintTile = 0;
let brushSize = 1;

function drawTileEditor() {
    image(tilemapImage, 800, 0);
    var tileX = getXOffset(currentPaintTile);
    var tileY = getYOffset(currentPaintTile);
    stroke(255, 0, 0);
    noFill();
    rect(800 + tileX, tileY, tileWidth, tileHeight, 10);

    var x = Number(mouseX / tileWidth).toFixed(0) - 1;
    var y = Number(mouseY / tileHeight).toFixed(0) - 1;

    if(brushSize == 0) {
        stroke(255, 0, 0);
        noFill();
        rect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    } else { 
        for(var dy = Math.max(y - brushSize, 0); dy < Math.min(y + brushSize, 50); dy++) {
            for(var dx = Math.max(x - brushSize, 0); dx < Math.min(x + brushSize, 50); dx++) {
                stroke(255, 0, 0);
                noFill();
                rect(dx * tileWidth, dy * tileHeight, tileWidth, tileHeight);
            }
        }
    }

}

function updateTileEditor(pX, pY) {
    var tileFocus = true;

    if(pY > 400)
        tileFocus = false;

    if(pX > 800 + 150) 
    {
        if(tileFocus)
            currentPaintTile++;
        else
            brushSize++;
    } else {
        if(tileFocus)            
            currentPaintTile--;
        else
            brushSize--;    
    }
}