class GameManager {
    constructor() {
        this.currentEnemy = 0;
        this.points = 0;

    }

    setup() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
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



    gameOver(theEnemy, character, gameOverSound, gameOverImage) {
        console.log(theEnemy.spriteDefinition.name, 'collided with', character.spriteDefinition.name);
        image(gameOverImage, width / 2 - 200, height / 2);
        if (hasSound)
            gameOverSound.play();
        noLoop();
    }

}