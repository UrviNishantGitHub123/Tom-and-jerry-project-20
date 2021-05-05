var bgimg;
var cat_img2,mouse_img2,cat_img1,mouse_img1;
var lastimg_mouse,lastimg_cat;
var cat, mouse;

function preload() {
    bgimg = loadImage("images/garden.png");
     cat_img1= loadImage("images/cat1.png");
     cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
     mouse_img1 = loadImage("images/mouse1.png");
     mouse_img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    lastimg_cat = loadImage("images/cat4.png");
    lastimg_mouse = loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600,10,10);
    cat.addAnimation("catstill", cat_img1);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mousestanding",mouse_img1);
    mouse.scale = 0.15;

    
}

function draw() {

    background(bgimg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("lastImg", lastimg_cat);
       cat.changeAnimation("lastImg")
       cat.x  = 300;
       cat.scale = 0.2;

       mouse.addAnimation("lastimagemouse",lastimg_mouse);
       mouse.changeAnimation("lastimagemouse");
       mouse.scale = 0.15;
    }

    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
     cat.velocityX=-5;
     mouse.addAnimation("mouse_teasing",mouse_img2);
     mouse.changeAnimation("mouse_teasing");
   
     cat.addAnimation("cat_running", cat_img2);
     cat.changeAnimation("cat_running");

     mouse.frameDelay = 25;
 }
  //For moving and changing animation write code here


}
