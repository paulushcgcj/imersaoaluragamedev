class GameScene extends Scene {
    constructor(gameDefinitions) {
        super(gameDefinitions.map);
        this.map = gameDefinitions.map;

        this.xPositionSecondBG = 0;

        this.currentEnemy = 0;
        this.gameManager = new GameManager(gameDefinitions.overal);

        this.character = new Character(gameDefinitions.character, 0, gameDefinitions.map.groundHeight);

        this.enemies = gameDefinitions.enemies.map(enemy => new Enemy(enemy, 0, enemy.groundHeight ? enemy.groundHeight : gameDefinitions.map.groundHeight));

        
    }

    setup() {
        super.setup();
        this.xPositionSecondBG = width;
        this.gameManager.setup();
        this.character.setup();

        console.log(this.enemies);

        this.enemies.forEach(element => element.setup());
    }

    preLoad() {
        super.preLoad()
        this.gameManager.preLoad();
        this.character.preLoad();
        this.enemies.forEach(element => element.preLoad());
        
    }

    draw() {

        this.drawGameScreen();

        this.gameManager.draw();
        this.gameManager.addPoints();

        //this.character.debug();
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
        //theEnemy.debug();
        theEnemy.draw();
        theEnemy.move();

        if(theEnemy.isColliding(this.character)){
            this.bgSound.setVolume(.1);
            this.gameManager.gameOver();
        }

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