let k = []

function makeKeyboard(){
  for(i = 0 ; i<10 ; i++){
    k[i] = new Clickable();
    k[i].locate(20 + i * 25,400)
  }
  
}//end makeKeyboard
