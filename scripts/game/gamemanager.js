class GameManager {
    constructor() {
        this.points = 0;
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
    }

    draw() {
        
        text(parseInt(this.points), width - 50, 50);
    }

    addPoints(){
        this.points += .2;
    }

    scorePoint(points){
        this.points += points;
    }

}