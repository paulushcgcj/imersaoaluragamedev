class Character extends CharacterAnimation {
    constructor(        
        definitions,
        xScreenPosition,
        yScreenVariation) {
        super(            
            definitions,
            xScreenPosition,
            yScreenVariation
        );

        this.jumpSound = null;

    }

preLoad(){
    super.preLoad();
    this.jumpSound = loadSound(this.spriteDefinition.jumpSound);
}

    jump() {
        if(this.jumpCount < 2){
            this.jumpSpeed = -30;            
            this.jumpCount++;
        }
    }

    playerControl(){
        if (key == 'ArrowUp') {
            if(this.jumpCount < 2)    
                this.jumpSound.play();
            this.jump();        
          }
    }
    

}