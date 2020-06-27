class Enemy extends CharacterAnimation {
    constructor(
        spriteSheet,
        spriteHeight,
        spriteWidth,
        spriteProportion,
        xScreenPosition,
        frameSkip) {
        super(
            spriteSheet,
            spriteHeight,
            spriteWidth,
            spriteProportion,
            xScreenPosition,
            frameSkip
        );

        this.moveSpeed = 5;
    }

    move(){
        this.xScreenPosition -= this.moveSpeed;

        if(this.xScreenPosition < -(this.spriteSizeWidth * 2)){
            this.xScreenPosition = width + (this.spriteSizeWidth * 2);
        }
    }
}