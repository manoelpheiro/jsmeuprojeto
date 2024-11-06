let emotions = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    emotions.push(new Emotion('Alegria', color(255, 223, 0), width/4, height/2));
    emotions.push(new Emotion('Tristeza', color(0, 0, 255), width/2, height/2));
    emotions.push(new Emotion('Medo', color(128, 0, 128), width/1.5, height/2));
    emotions.push(new Emotion('Raiva', color(255, 0, 0), width/1.2, height/2));
    emotions.push(new Emotion('Nojinho', color(0, 255, 0), width, height/2));
}

function draw() {
    background(220);
    for (let emotion of emotions) {
        emotion.move();
        emotion.display();
    }
}

class Emotion {
    constructor(name, col, x, y) {
        this.name = name;
        this.col = col;
        this.x = x;
        this.y = y;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    display() {
        fill(this.col);
        ellipse(this.x, this.y, 50, 50);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.name, this.x, this.y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);