class umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    
     
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Walking Frame/walking_4.png");
        World.add(world, this.body);
    }

 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 350, 350);
    pop();
  }
}