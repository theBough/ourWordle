let b = [];
let words = [];
/*
these two variables will keep track of 
where the current guess letter is.
*/
let activeX, activeY;
let secretWord;

function preload() {
  /*loadString() will load words
  from a file and RETURN an array 
  of words. Make sure you have a file in 
  your directory.
  */
  words = loadStrings("list.txt");
}
function setup() {
  createCanvas(400, 600);
  activeX = 0;
  activeY = 0;
  //Randomly grab a word from our word list.
  secretWord = random(words);
  secretWord = secretWord.toLowerCase();
  console.log(secretWord);
  for (var i = 0; i < 5; i++) {
    b[i] = [];
    for (var j = 0; j < 6; j++) {
      b[i][j] = new Box(20 + i * 55, 20 + j * 55, 50, 50, "", 255);
    } //end inside ForLoop
  } //end for loop
} //end Setup
makeKeyboard();
function draw() {
  background(0);
  for (j = 0; j < 3; j++) {
    for (i = 0; i < 10; i++) {
      k[j][i].draw();
    } //end i loop
  } //end j loop

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 6; j++) {
      b[i][j].display();
    }
  } //end for loop
}
function keyReleased() {
  /*this function gets called automatically
  everytime a key on the keyboard is released
  */
  if (
    ((key.charCodeAt(0) > 64 && key.charCodeAt(0) < 91) ||
      (key.charCodeAt(0) > 96 && key.charCodeAt(0) < 123)) &&
    key.length < 2
  ) {
    b[activeX][activeY].letter = key;
    activeX += 1;
  } //end if checking letters
  if (keyCode == 8) {
    //the backspace has been pressed.
    if (activeX > 0) {
      activeX -= 1;
      b[activeX][activeY].letter = "";
    }
  }
  if (keyCode == 13) {
    //the player has pressed the enter key
    checkRow();
  }
} //end keyReleased
function checkRow() {
  /*
  Check Row is going to the letters guessed and 
  turn into a word and compare agaisnt the
  secret word.
  */
  var theirGuess = "";
  for (i = 0; i < 5; i++) {
    theirGuess += b[i][activeY].letter;
  } //end loop
  console.log(theirGuess);
  //thisLetter is going the letter we are checking
  //in the solution
  for (i = 0; i < b.length; i++) {
    let thisLetter = b[i][activeY].letter;
    if (secretWord.indexOf(thisLetter) > -1) {
      if (secretWord.indexOf(thisLetter) == i) {
        //they got the right letter
        //in the right spot
        console.log("Right letter, right spot.");
        b[i][activeY].col = "#4CAF50";
      } else {
        console.log("Right Letter, wrong spot.");
        b[i][activeY].col = "#FFEB3B";
      }
    } else {
      b[i][activeY].col = 100;
    }
  } //end for loop
} //end checkRow
