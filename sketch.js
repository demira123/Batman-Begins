const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella1
var thunder1, thunder2, thunder3, thunder4

var maxDrops=100;
var drops1 = []

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png")
    thunder2=loadImage("images/thunderbolt/2.png")
    thunder3=loadImage("images/thunderbolt/3.png")
    thunder4=loadImage("images/thunderbolt/4.png")
    
    
    

}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;


    //drops1 = new drops(600,height,1200,20);
   

    umbrella1 = new umbrella(200,500,70,70);
    
    if(frameCount % 150 === 0 ){

        for(var i=0;i<maxDrops;i++){
            drops1.push(new drops(random(0,700),random(0,700)))
        }
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    //drops1.display();
    
    umbrella1.display();
  
    var rand=round(random(1,4))
    if(frameCount % 200===0){
        thunder =createSprite(random(10,370),random(10,370),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1)
            break;
            case 2:thunder.addImage(thunder2)   
            break;
            case 3:thunder.addImage(thunder3) 
            break;
            case 4:thunder.addImage(thunder4)
        }
        thunder.scale=0.3
        

    }

        //displaying rain drops
        for(var i = 0; i<maxDrops; i++){
            drops1[i].showDrop();
            //drops1[i].updateY()
            
        }
    
        drawSprites();

}   
