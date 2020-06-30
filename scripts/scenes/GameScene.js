class GameScene extends Scene {
    constructor(map, character, enemies) {
        super(map.sheet);
        this.map = map;

        this.xPositionSecondBG = 0;

        this.currentEnemy = 0;
        this.gameManager = new GameManager();

        this.character = new Character(character, 0, map.groundHeight);

        this.enemies = enemies.map(enemy => new Enemy(enemy, 0, map.groundHeight));
    }

    setup() {
        this.xPositionSecondBG = width;
        this.gameManager.setup();
        this.character.setup();

        console.log(this.enemies);

        this.enemies.forEach(element => element.setup());
    }

    preLoad() {
        super.preLoad()
        this.character.preLoad();
        this.enemies.forEach(element => element.preLoad());
    }

    draw() {

        this.drawGameScreen();

        this.gameManager.draw();
        this.gameManager.addPoints();

        this.character.debug();
        this.character.draw();
        this.drawEnemies();

    }

    drawGameScreen() {
        super.draw();
        image(this.image, this.xPositionSecondBG, 0, width, height);
        this.paralax();
        
    }

    drawEnemies() {
        let theEnemy = this.enemies[this.currentEnemyIndex()];        
        theEnemy.debug();
        theEnemy.draw();
        theEnemy.move();

        if (!theEnemy.visible) {
            this.enemies[this.nextEnemyIndex()].visible = true;
        }
    }

    paralax() {
        this.xPosition -= this.map.mapSpeed;
        this.xPositionSecondBG -= this.map.mapSpeed;

        if (this.xPosition < -width)
            this.xPosition = width;

        if (this.xPositionSecondBG < -width)
            this.xPositionSecondBG = width;
    }

    currentEnemyIndex() {
        return this.currentEnemy;
    }

    nextEnemyIndex() {
        this.currentEnemy++;

        if (this.currentEnemy >= this.enemies.length) {
            this.currentEnemy = 0;
        }

        return this.currentEnemyIndex();
    }

    sceneInputs() {
        this.character.playerControl();
    }
}