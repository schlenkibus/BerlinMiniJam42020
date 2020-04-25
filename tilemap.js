
let tilemap = {};
let tileInfo;

let tileinfo_path = "resources/tilemap.txt"
let tilemap_path = "resources/tilemap.png"
let tilemapfile_path = "resources/tiles.json"

function loadTilemap() {
    tilemap = getFileContents(tilemapfile_path)
    tileInfo = getFileContents(tileinfo_path);
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