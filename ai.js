let agents = [];

let enemySprites;

class Agent {
    constructor(x, y, type) {
        this.pos = createVector(x, y);
        this.orientation = direction.DOWN;

        switch(type) {
            case aiType.avoid:
                this.calculateVelocity = () => {
    
                };
                break;
            case aiType.follow:
                this.calculateVelocity = () => {
                    var dist = getPlayerDistance(this); 
                    if(dist >= 40) {
                        var ret = createVector();
                        var pp = getPlayerPositon();
                        ret.x =  pp.x - this.pos.x;
                        ret.x *= (0.02 + (random()) * 0.01);
                        ret.y =  pp.y - this.pos.y;
                        ret.y *= (0.02 + (random()) * 0.01);
                        return ret;
                    } else {
                        return {x: 0, y: 0};
                    }
                };
                break;
            case aiType.roam:
                this.calculateVelocity = () => {
    
                };
                break;
        }
    }

    draw() {
        this.update();
        image(this.getSprite(), this.pos.x, this.pos.y);
    }

    update() {
        var vel = this.calculateVelocity();
        this.pos.x += vel.x;
        this.pos.y += vel.y;
    }

    getSprite() {
        return enemySprites[Number(this.orientation)];
    }
}

function getPlayerDistance(agent) {
    var pp = getPlayerPositon();
    var p = agent.pos;
    return Math.abs(pp.x - p.x) + Math.abs(pp.y - p.y);
}

function getPlayerPositon() {
    return player.pos;
}

function createAgent(x, y, type) {
    agents.push(new Agent(x, y, type));
}