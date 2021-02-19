class drops{
    constructor(x,y,width,height){
        var options={
            restituition:0.1,
            friction:0.1
        }
        this.rain = Bodies.rectangle(x, y, 5, 7, options);
        
        this.height= 7
        this.width= 5
        World.add(world,this.rain)

    }

   updateY(){     
    if(this.rain.position.y > 700){

        Matter.Body.setPosition(this.rain, {x:random(0,700), y:random(0,400)})
    }
}

showDrop(){
    fill("blue")
    ellipseMode(CENTER);
    ellipse(this.rain.position.x,this.rain.position.y,this.width,this.height);
}
}

    


