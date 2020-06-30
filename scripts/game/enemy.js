class Enemy extends CharacterAnimation {
    constructor(        
        definitions,
        xScreenPosition,
        yScreenVariation) {
        super(            
            definitions,
            xScreenPosition,
            yScreenVariation
        );

        this.moveSpeed = definitions.moveSpeed;

    }

    setup(){
        super.setup();
        this.xScreenPosition = width + this.spriteSizeWidth;        
    }

    move() {
        if (this.visible) {
            this.xScreenPosition -= this.moveSpeed;

            if (this.isOutOfBounds()) {                
                this.xScreenPosition = width + (this.spriteSizeWidth * 2);
            }
        }
    }
}