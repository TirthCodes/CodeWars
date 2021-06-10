function XO(str) {
  let countX = 0;
  let countO = 0;
  
    for(let letter of str.toLowerCase()){
      if (str.includes("x")) {
        countX++;
      }
      if (str.includes("o")) {
        countO++;
      }
    }
  return countX == countO;
}

XO(xxxo); // returns false | countX = 3, countO = 1 | 3 != 1
XO(OOxX); // returns true
