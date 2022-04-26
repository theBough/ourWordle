let k = [];
let order = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function makeKeyboard() {
  for (j = 0; j < 3; j++) {
    k[j] = []
    for (i = 0; i < order[j].length; i++) {
      k[j][i] = new Clickable();
      k[j][i].locate(20 + i * 25, 350 + j*55);
      k[j][i].width = 24;
      k[j][i].heigth = 50;
      k[j][i].text = order[j][i]
    } //end i loop
  } //end j loop
} //end makeKeyboard
