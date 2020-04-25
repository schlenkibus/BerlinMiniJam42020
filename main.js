function setup() {
    var cnv = createCanvas(800 + 500, 800);
    cnv.style('display', 'block');
    loadTilemap();
    tilemapImage = loadImage(tilemap_path);
}

function draw() {
    background(220);
    drawTiles();
    drawTileEditor();
}

function mousePressed() {
    changeTile(mouseX, mouseY);
}