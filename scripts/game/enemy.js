class Enemy extends CharacterAnimation {
    constructor(
        spriteSheet,
        spriteDefinition,
        xScreenPosition,
        yScreenVariation) {
        super(
            spriteSheet,
            spriteDefinition,
            xScreenPosition,
            yScreenVariation
        );

        this.moveSpeed = spriteDefinition.moveSpeed;
    }

    move(){
        this.xScreenPosition -= this.moveSpeed;

        if(this.xScreenPosition < -(this.spriteSizeWidth * 2)){
            this.xScreenPosition = width + (this.spriteSizeWidth * 2);
        }
    }
}