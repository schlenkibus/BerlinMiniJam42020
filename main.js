function setup() {
    var cnv = createCanvas(800 + 500, 800);
    cnv.style('display', 'block');
    loadTilemap();
    tilemapImage = loadImage(tilemap_path);
    createMap();

    enemySprites = [
        loadImage("resources/enemy/up_stand.png"),
        loadImage("resources/enemy/down_stand.png"),
        loadImage("resources/enemy/left_stand.png"),
        loadImage("resources/enemy/right_stand.png")
    ];

    createAgent(100, 200, aiType.follow);
    createAgent(300, 200, aiType.follow);
    createAgent(400, 200, aiType.follow);
}

function draw() {


    background(220);
    drawTiles();
    drawTileEditor();
    
    agents.forEach(agent => {
        agent.draw();
    });

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