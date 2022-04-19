function Box(x,y,w,h,letter,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.letter = letter;
  this.col = col
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h);
    textSize(26);
    fill(0)
    text(this.letter, this.x +15, this.y + 30)
  }//end display
}//end Box
