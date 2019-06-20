var gravity = 1;



class Player{
   constructor(){
       this.x = 100;
       this.y = 100;
       this.jumpStrengh = 100;
       this.size = 30;
       this.yspeed = 0;
    }

   move(x){
    this.x += x;
   }

   jump(){
       this.y -= this.jumpStrengh;
       //console.log(lerp(this.y, 0, this.jumpStrengh, 0.9));
   }
   
   show(){
        fill(255);
        rect(this.x, this.y, this.size, this.size);
   }
   update(){
       this.yspeed += gravity * 0.5;
        if( this.y + this.yspeed <= height-this.size){
            this.y += this.yspeed;
        }else{
            this.yspeed = 0;
        }
        if (keyIsDown(LEFT_ARROW)) {
            player.move(-10);
        }
        if (keyIsDown(RIGHT_ARROW)) {
              player.move(10);
        }
        
    }
}