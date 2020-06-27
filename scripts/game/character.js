class Character extends CharacterAnimation {
    constructor(
        spriteSheet,
        spriteDefinition,
        xScreenPosition,
        yScreenVariation,
        frameSkip) {
        super(
            spriteSheet,
            spriteDefinition,
            xScreenPosition,
            yScreenVariation,
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