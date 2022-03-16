let b = [];
let words = [];
/*
these two variables will keep track of 
where the current guess letter is.
*/
let activeX, activeY

function preload(){
  /*loadString() will load words
  from a file and RETURN an array 
  of words. Make sure you have a file in 
  your directory.
  */
  words = loadStrings("list.txt");
}
function setup() {
  createCanvas(400, 400);
  activeX =0;
  activeY = 0;  
  for(var i =0 ; i<5 ; i++){
    b[i] = [];
    for(var j=0 ; j<6; j++){
      b[i][j] = new Box(20 + i *55,20+j*55,50,50,"");
    }//end inside ForLoop
  }//end for loop
}//end Setup
function draw() {
  background(220);
  for(var i =0 ; i<5 ; i++){
    for(var j=0 ; j<6 ; j++){
      b[i][j].display()
    }
  }//end for loop
  
}
function keyReleased(){
  /*this function gets called automatically
  everytime a key on the keyboard is released
  */
  b[activeX][activeY].letter = key;
  activeX += 1
}//end keyReleased
