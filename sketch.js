
function preload() {
    tomimg1=loadAnimation("images/cat1.png");
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3=loadAnimation("images/cat3.png");
    jerryimg1=loadAnimation("images/mouse1.png");
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryimg3=loadAnimation("images/mouse4.png");
    bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tomimg1);
    tom.scale=0.2;
    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",jerryimg1);
    jerry.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
     if (tom.x-jerry.x<(tom.width-jerry.width)/2){
         tom.velocityX=0;
         tom.addAnimation("tomlastImage",tomimg3);
         tom.x=300;
         tom.scale=0.2;
         tom.changeAnimation("tomlastImage")
         jerry.addAnimation("jerrylastImage",jerryimg3)
         jerr.scale=0.1;
         jerry.changeAnimation("jerrylastImage")


     }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomimg2);
    tom.changeAnimation("tomrunning");
    jerry.addAnimation("jerryteasing",jerryimg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryteasing");

}
  


}
