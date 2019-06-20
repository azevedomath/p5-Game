var socket;
let player ;

var x = 100;
var y = 100;

function setup(){
    createCanvas(400, 400);
    player = new Player();
    socket = io.connect('http://localhost:3000');
}
let value = 0;
function draw(){
    background(0);
    fill(255);
   
    player.update();
    player.show();
   
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        player.jump();
    }
}