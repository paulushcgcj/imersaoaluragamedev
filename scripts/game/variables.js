let definitions = {
    character: {
        sheet: 'images/character/player-run.png',
        jumpSound: 'sounds/jump.ogg',
        spriteFramesHeight: 1,
        spriteFramesWidth: 6,
        spriteFramesProportion: 5,
        frameSkip: 3,
        name: 'Foxy'
    },
    enemies: [
        {
            sheet: 'images/enemies/oposum.png',
            spriteFramesHeight: 1,
            spriteFramesWidth: 6,
            spriteFramesProportion: 3,
            moveSpeed: 5,
            frameSkip: 7,            
            name: 'Jr'
        },
        {
            sheet: 'images/enemies/droplet.png',
            spriteFramesHeight: 7,
            spriteFramesWidth: 4,
            spriteFramesProportion: 1,
            moveSpeed: 2.5,
            frameSkip: 1,
            name: 'Poppa'
        },
        {
            sheet: 'images/enemies/eagle-attack.png',
            spriteFramesHeight: 1,
            spriteFramesWidth: 4,
            spriteFramesProportion: 3,
            moveSpeed: 7,
            frameSkip: 4,
            name: 'Frank',
            groundHeight: 150
        }
    ],
    map: {
        sheet: 'images/scenes/forest.png',
        bgMusic: 'sounds/gamesound.ogg',
        groundHeight: 30,
        mapSpeed: 3
    },
    overal:{
        gameOverSound: 'sounds/gameover',
        gameOver: 'images/assets/game-over.png'
    }
};


let scene = new GameScene(definitions);