const direction = Object.freeze({"UP":0, "DOWN":1, "LEFT":2, "RIGHT":3})

let player;
let playerSprites = [];

function createMap() {

    playerSprites = [
        loadImage("resources/player/up_stand.png"),
        loadImage("resources/player/up_move.png"),
        loadImage("resources/player/down_stand.png"),
        loadImage("resources/player/down_move.png"),
        loadImage("resources/player/left_stand.png"),
        loadImage("resources/player/left_move.png"),
        loadImage("resources/player/right_stand.png"),
        loadImage("resources/player/right_move.png")
    ]

    player =  {
        pos: createVector(0, 0),
        orientation: direction.DOWN,
        moving: true,
        currentKey: [],
        draw: () => {

            switch(player.currentKey) {
                case DOWN_ARROW:
                    player.move(direction.DOWN);
                    break;
                case UP_ARROW:
                    player.move(direction.UP);
                    break;
                case LEFT_ARROW:
                    player.move(direction.LEFT);
                    break;
                case RIGHT_ARROW:
                    player.move(direction.RIGHT);
                    break;
            }

            image(player.getSprite(), player.pos.x, player.pos.y);
        },
        getSprite: () => {
            var index = Number(player.orientation) * 2;
            return playerSprites[index];
        },
        onKeyPressed: (keyCode) => {
            player.currentKey = keyCode;
        },
        onKeyRelease: (keyCode) => {
            if(player.currentKey == keyCode)
            player.currentKey = null;
        },
        move: (d) => {
            if(d == player.orientation) {
                switch(d) {
                    case direction.UP:
                        player.pos.y = Math.max(0, player.pos.y - 1);
                        break;
                    case direction.DOWN:
                        player.pos.y = Math.min(49 * tileHeight, player.pos.y + 1);
                        break;
                    case direction.LEFT:
                        player.pos.x = Math.max(0, player.pos.x - 1);
                        break;
                    case direction.RIGHT:
                        player.pos.x = Math.min(49 * tileWidth, player.pos.x + 1);
                        break;
                }
            } else {
                player.orientation = d;
            }
        }
    };
}

function placeEnemies() {

}

function update() {

}
