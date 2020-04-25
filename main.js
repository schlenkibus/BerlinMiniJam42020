function setup() {
    var cnv = createCanvas(800, 800);
    cnv.style('display', 'block');
    loadTilemap();
    tilemapImage = loadImage('resources/tilemap.png');
}

function draw() {
    background(220);
    drawTiles();
}