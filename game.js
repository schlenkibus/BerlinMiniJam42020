const direction = Object.freeze({"UP":0, "DOWN":1, "LEFT":2, "RIGHT":3})
const aiType = Object.freeze({"roam":0, "follow":1, "avoid":2})

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
        moveCycle: false,
        currentKey: [],
        currentMoveAnim: false,
        animationDelta: 0,
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
                default:
                    player.moving = false;
            }

            image(player.getSprite(), player.pos.x, player.pos.y);
        },
        getSprite: () => {
            var index = Number(player.orientation) * 2;
            if(player.moving && player.moveCycle){
                index++;
            }
            return playerSprites[index];
        },
        onKeyPressed: (keyCode) => {
            player.currentKey = keyCode;
        },
        onKeyRelease: (keyCode) => {
            if(player.currentKey == keyCode) {
                player.currentKey = null;
                player.moving = false;
            }
        },
        move: (d) => {
            player.moving = true;

            if(d == player.orientation) {
                var speed = 2;

                switch(d) {
                    case direction.UP:
                        player.pos.y = Math.max(0, player.pos.y - speed);
                        break;
                    case direction.DOWN:
                        player.pos.y = Math.min(49 * tileHeight, player.pos.y + speed);
                        break;
                    case direction.LEFT:
                        player.pos.x = Math.max(0, player.pos.x - speed);
                        break;
                    case direction.RIGHT:
                        player.pos.x = Math.min(49 * tileWidth, player.pos.x + speed);
                        break;
                }
                player.moving = true;
            } else {
                player.orientation = d;
            }
        }
    };

    setInterval(() => {
        player.moveCycle = !player.moveCycle;
    }, 200);
}

function placeEnemies() {

}

function update() {

}
