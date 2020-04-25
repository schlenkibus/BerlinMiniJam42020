function setup() {
    var cnv = createCanvas(800 + 500, 800);
    cnv.style('display', 'block');
    loadTilemap();
    tilemapImage = loadImage(tilemap_path);
    createMap();
}

function draw() {


    background(220);
    drawTiles();
    drawTileEditor();
    player.draw();
}

function mousePressed() {
    changeTile(mouseX, mouseY);
}

function keyPressed() {
    player.onKeyPressed(keyCode);
}

function keyReleased(){
    player.onKeyRelease(keyCode);
}