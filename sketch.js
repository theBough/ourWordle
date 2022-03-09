let b = [];
function setup() {
  createCanvas(400, 400);
  for(var i =0 ; i<5 ; i++){
    b[i] = [];
    for(var j=0 ; j<6; j++){
      b[i][j] = new Box(20 + i *55,20+j*55,50,50);
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
  
  textSize(20)
  text(key,30,30);
}
