
let tilemap = {};
let tileInfo;
let tilemapImage;

let tileinfo_path = "resources/tilemap.txt"
let tilemap_path = "resources/tilemap.png"
let tilemapfile_path = "resources/tiles.json"

let tileWidth = 16;
let tileHeight = 16;
let tileMargin = 1;

let tileMapWidth = 27;
let tileMapHeight = 20;

function loadTilemap() {
    tilemap = getFileContents(tilemapfile_path)
    tileInfo = getFileContents(tileinfo_path);

    tilemap = new Array(50);
    for (var i = 0; i < tilemap.length; i++) {
        tilemap[i] = new Array(50);
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
    return tilemap[y][x];
}

function getXOffset(tileType) {
    var totalWidth = tileMapWidth * (tileWidth + tileMargin);
    return totalWidth % tileType;
}

function getYOffset(tileType) {
    var totalHeight = tileMapHeight * (tileHeight + tileMargin);
    return totalHeight % tileType;
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