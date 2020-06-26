class CharacterAnimation {
    constructor(
        spriteSheet,
        spriteHeight,
        spriteWidth,
        spriteProportion,
        xScreenPosition) {

        this.spriteSheet = spriteSheet;
        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;
        this.spriteProportion = spriteProportion;

        this.sheetX = 0;
        this.sheetY = 0;

        this.spriteSizeWidth = this.spriteWidth / this.spriteProportion;
        this.spriteSizeHeight = this.spriteHeight / this.spriteProportion;

        this.xScreenPosition = xScreenPosition;
    }

    draw() {
        image(
            this.spriteSheet,

            this.xScreenPosition,
            height - (this.spriteHeight / this.spriteProportion),

            this.spriteSizeWidth,
            this.spriteSizeHeight,

            this.sheetX,
            this.sheetY,

            this.spriteWidth,
            this.spriteHeight
        );
        this.characterAnimation();
    }

    characterAnimation() {
        this.sheetX += this.spriteWidth;
        if (this.sheetX > (this.spriteSheet.width - this.spriteWidth)) {
            this.sheetX = 0;
            this.sheetY += this.spriteHeight;
            if (this.sheetY > (this.spriteSheet.height - this.spriteHeight)) {
                this.sheetY = 0;
            }
        }
    }

    /*
        this.spriteX = 
        (this.nFrame % this.columns)
        * this.width;

        this.spriteY = 
        (Math.floor(this.nFrame / this.columns))
        * this.height;

        this.nframe++;
        this.nframe = this.nframe % this.spriteCount;*/
    /*
    console.log(
        (this.sheetX + this.spriteWidth) % (this.spriteSheet.width - this.spriteWidth)
    ,
        (this.sheetY + this.spriteHeight) % (this.spriteSheet.height - this.spriteHeight)
    );*/
}