class CharacterAnimation {
    constructor(
        spriteSheet,
        spritesPerHeight,
        spritesPerWidth,
        spriteProportion,
        xScreenPosition,
        frameSkip
    ) {

        this.spriteSheet = spriteSheet;
        this.spriteHeight = (this.spriteSheet.height / spritesPerHeight);
        this.spriteWidth = (this.spriteSheet.width / spritesPerWidth);
        this.spriteProportion = spriteProportion;

        this.sheetX = 0;
        this.sheetY = 0;

        this.spriteSizeWidth = this.spriteWidth / this.spriteProportion;
        this.spriteSizeHeight = this.spriteHeight / this.spriteProportion;

        this.xScreenPosition = xScreenPosition;
        this.yScreenPosition = height - (this.spriteHeight / this.spriteProportion);
        this.yInitialScreenPosition = height - (this.spriteHeight / this.spriteProportion);

        this.frameSkip = frameSkip;
        this.currentFrame = 0;

        this.gravity = 2;
        this.jumpSpeed = 0;
        this.jumpCount = 0;

        this.hitBox = .6;
    }

    draw() {
        image(
            this.spriteSheet,

            this.xScreenPosition,
            this.yScreenPosition,

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

        if (this.frameSkip > 0) {
            this.currentFrame++;
            if (this.currentFrame > this.frameSkip) {
                this.currentFrame = 0;
            }
        }

        if (this.currentFrame === 0) {
            this.sheetX += this.spriteWidth;
            if (this.sheetX > (this.spriteSheet.width - this.spriteWidth)) {
                this.sheetX = 0;
                this.sheetY += this.spriteHeight;
                if (this.sheetY > (this.spriteSheet.height - this.spriteHeight)) {
                    this.sheetY = 0;
                }
            }
        }
    }

    applyGravity() {

        this.yScreenPosition += this.jumpSpeed;
        this.jumpSpeed += this.gravity;

        if (this.yScreenPosition > this.yInitialScreenPosition) {
            this.yScreenPosition = this.yInitialScreenPosition;
            this.jumpCount = 0;
        }

    }

    isColliding(target) {
        this.debug(this);
        this.debug(target);
        return collideRectRect(
            20 + this.xScreenPosition,
            this.yScreenPosition,
            (this.spriteWidth / this.spriteProportion) * this.hitBox,
            this.spriteHeight / this.spriteProportion,

            20 + target.xScreenPosition,
            target.yScreenPosition,
            target.spriteWidth / this.spriteProportion,
            target.spriteHeight / this.spriteProportion
        );
    }

    debug(target){
        noFill();
        rect(
            20 + target.xScreenPosition,
            target.yScreenPosition,
            (target.spriteWidth / target.spriteProportion) * target.hitBox,
            target.spriteHeight / target.spriteProportion);
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