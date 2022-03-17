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
  createCanvas(400, 400);
  activeX = 0;
  activeY = 0;
  //Randomly grab a word from our word list.
  secretWord = random(words);
  secretWord = secretWord.toLowerCase();
  console.log(secretWord);
  for (var i = 0; i < 5; i++) {
    b[i] = [];
    for (var j = 0; j < 6; j++) {
      b[i][j] = new Box(20 + i * 55, 20 + j * 55, 50, 50, "");
    } //end inside ForLoop
  } //end for loop
} //end Setup
function draw() {
  background(220);
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
  if (((key.charCodeAt(0) > 64 && key.charCodeAt(0) < 91) ||
      (key.charCodeAt(0) > 96 && key.charCodeAt(0) < 123)) &&
     key.length < 2) {
    b[activeX][activeY].letter = key;
    activeX += 1;
    if (activeX == 5) {
      checkRow();
    }
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
} //end checkRow
