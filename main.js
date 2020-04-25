function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    loadTilemap();

    loadImage('resources/tilemap.png', img => {
        image(img, 0, 0);
      });
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }