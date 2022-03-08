let b = [];
function setup() {
  createCanvas(400, 400);
  for(var i =0 ; i<5 ; i++){
    b.push(new Box(10+i*55,200,50,50));
  }//end for loop
  
}

function draw() {
  background(220);
  for(var i =0 ; i<5 ; i++){
    b[i].display();
  }//end for loop
  
  textSize(20)
  text(key,30,30);
}
