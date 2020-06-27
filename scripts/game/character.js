class Character extends CharacterAnimation {
    constructor(
        spriteSheet,
        spritesPerHeight,
        spritesPerWidth,
        spriteProportion,
        xScreenPosition,
        frameSkip) {
        super(
            spriteSheet,
            spritesPerHeight,
            spritesPerWidth,
            spriteProportion,
            xScreenPosition,
            frameSkip
        );

        
    }

    jump() {
        if(this.jumpCount < 2){
            this.jumpSpeed = -30;            
            this.jumpCount++;
        }
    }

    

}