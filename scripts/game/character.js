class Character {
    constructor(spriteSheet, spriteHeight, spriteWidth, spriteProportion) {
        this.spriteSheet = spriteSheet;
        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;
        this.spriteProportion = spriteProportion;

        this.sheetX = 0;
        this.sheetY = 0;
        
        this.spriteSizeWidth = this.spriteWidth / this.spriteProportion;
        this.spriteSizeHeight = this.spriteHeight / this.spriteProportion;
    }

    draw() {
        image(
            this.spriteSheet,

            0,
            height - (this.spriteHeight / this.spriteProportion),

            this.spriteSizeWidth,
            this.spriteSizeHeight,

            this.sheetX,
            this.sheetY,

            this.spriteWidth,
            this.spriteHeight
        );
        this.animation();
    }

    animation() {
        this.sheetX += this.spriteWidth;
        if (this.sheetX > (this.spriteSheet.width - this.spriteWidth)) {
            this.sheetX = 0;
            this.sheetY += this.spriteHeight;
            if (this.sheetY > (this.spriteSheet.height - this.spriteHeight)) {
                this.sheetY = 0;
            }
        }
    }

    move() {

    }
}