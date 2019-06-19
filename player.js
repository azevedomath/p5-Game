class Player{
   constructor(){
       this.x = 100;
       this.y = 100;
       this.jumpStrengh = 0;
       this.size = 30;
   }

   move = function(x){
    this.x += x;
   }

   jump = function(){
       this.y -= this.jumpStrengh;
   }
   
   show = function(){
        fill(255);
        rect(this.x, this.y, this.size, this.size);
   }

}