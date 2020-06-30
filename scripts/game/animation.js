class CharacterAnimation {
    constructor(
        spriteDefinition,
        xScreenPosition,
        yScreenVariation
    ) {

        this.spriteDefinition = spriteDefinition;
        this.spriteSheet = null;
        this.spriteFramesProportion = spriteDefinition.spriteFramesProportion;
        this.yScreenVariation = yScreenVariation;
        this.spriteHeight = 0;
        this.spriteWidth = 0;

        this.sheetX = 0;
        this.sheetY = 0;

        this.spriteSizeWidth = this.spriteWidth * this.spriteFramesProportion;
        this.spriteSizeHeight = this.spriteHeight * this.spriteFramesProportion;

        this.xScreenPosition = xScreenPosition;
        this.yScreenPosition = 0;
        this.yInitialScreenPosition = this.yScreenPosition;

        this.frameSkip = spriteDefinition.frameSkip;
        this.currentFrame = 0;

        this.gravity = 2;
        this.jumpSpeed = 0;
        this.jumpCount = 0;

        this.hitBox = .6;
        this.visible = true;
    }

    setup() {

        this.spriteHeight = (this.spriteSheet.height / this.spriteDefinition.spriteFramesHeight);
        this.spriteWidth = (this.spriteSheet.width / this.spriteDefinition.spriteFramesWidth);

        this.spriteSizeWidth = this.spriteWidth * this.spriteFramesProportion;
        this.spriteSizeHeight = this.spriteHeight * this.spriteFramesProportion;


        this.yScreenPosition = height - (this.spriteHeight * this.spriteFramesProportion) - this.yScreenVariation;
        this.yInitialScreenPosition = this.yScreenPosition;
    }

    preLoad() {
        this.spriteSheet = loadImage(this.spriteDefinition.sheet);
    }

    draw() {
        if (this.visible) {
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
            this.applyGravity();
        }
    }

    characterAnimation() {

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

        return collideRectRect(
            this.myRectangle().x,
            this.myRectangle().y,
            this.myRectangle().width,
            this.myRectangle().height,

            target.myRectangle().x,
            target.myRectangle().y,
            target.myRectangle().width,
            target.myRectangle().height
        );
    }

    isOutOfBounds() {
        this.visible = !(this.xScreenPosition < -this.spriteSizeWidth);
        return !this.visible;
    }

    myRectangle() {
        return {
            x: 20 + this.xScreenPosition,
            y: this.yScreenPosition + 30,
            width: (this.spriteWidth * this.spriteFramesProportion) * this.hitBox,
            height: (this.spriteHeight * this.spriteFramesProportion) - 30
        }
    }

    debug() {
        text(this.spriteDefinition.name, this.myRectangle().x + this.myRectangle().width + 15, this.myRectangle().y - 15);
        //rect(this.myRectangle().x,this.myRectangle().y,this.myRectangle().width,this.myRectangle().height);
    }

}