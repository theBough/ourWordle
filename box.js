function Box(x,y,w,h,letter){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.letter = letter;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }//end display
}//end Box
