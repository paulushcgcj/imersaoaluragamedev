class GameManager {
    constructor(definitions) {
        this.currentEnemy = 0;
        this.points = 0;
        this.gameOverImage;
        this.gameOverSound;
        this.definitions = definitions;
        this.gameEnded = false;
    }

    setup() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
    }

    preLoad() {
        this.gameOverSound = loadSound(this.definitions.gameOverSound);
        this.gameOverImage = loadImage(this.definitions.gameOver);
    }

    draw() {
        text(parseInt(this.points), width - 50, 50);
    }

    addPoints() {
        this.points += .2;
    }

    scorePoint(points) {
        this.points += points;
    }

    gameOver() {
        this.gameEnded = true;
        image(this.gameOverImage, width / 2 - 200, height / 2);
        this.gameOverSound.play();
        noLoop();
    }

}