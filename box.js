function Box(x,y,w,h,letter){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.letter = letter;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
    textSize(26);
    text(this.letter, this.x +5, this.y + 5)
  }//end display
}//end Box
