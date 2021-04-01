
var box, surface1,surface2,surface3,surface4;


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,180,30);
    surface1.shapeColor="pink";

    surface2 = createSprite(300,580,180,30);
    surface2.shapeColor="blue";

    surface3 = createSprite(500,580,180,30);
    surface3.shapeColor="green";

    surface2 = createSprite(700,580,180,30);
    surface2.shapeColor="orange";

    box = createSprite(90,50,40,40);
    box.shapeColor="yellow";
   
    //create box sprite and give velocity

}

function draw() {

    drawSprites();
    
    
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="pink";
    }
  
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
      box.shapeColor="blue";
  }
  
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
      box.shapeColor="green";
  }
  
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
      box.shapeColor="orange";  
  }

  

     //add condition to check if box touching surface and make it box
}
