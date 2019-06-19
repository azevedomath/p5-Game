var gravity = 1;
var Player = new Player();

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0);
    fill(255);
    ellipse(width/2, height/2, 16, 16);
   // Player.show();
    stroke(255);
    
    rect(30, 20, 55, 55);
}
