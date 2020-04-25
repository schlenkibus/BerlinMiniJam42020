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


    createAgent(400, 500, aiType.follow);
    createAgent(100, 200, aiType.avoid);
    createAgent(300, 200, aiType.avoid);
    createAgent(400, 200, aiType.avoid);

    setInterval(() => {
        createAgent(400, 400, aiType.roam);
    }, 2000);
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