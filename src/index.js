const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let i = 0;
  let letter = "";
  let symbol = "";
  let result = "";
  let letterStr = "";

  while (i <expr.length) {
    while (letterStr.length < 10 & expr[i]!= "*" & expr[i]!= "") {
      letterStr = letterStr + expr[i];
      i++;
    }
    /*
        while (letterStr.length < 10) {
          Доработать: добавление нулей в начале у короткого слова
         }
    */
  let j = 0;
  while (j < 10) {
    switch (letterStr.substr(j,2)) {
        case "00": symbol = "";break;
        case "10": symbol = ".";break;
        case "11": symbol = "-";break;
      }
    j = j+2;
    letter = letter + symbol;
    symbol = "";
  }

  if (MORSE_TABLE.hasOwnProperty(letter)) {
    result = result + MORSE_TABLE[letter];
  }
  letter = "";
  letterStr = "";

  if (expr[i]== "*") {
      i=i+10;
      result = result + " ";
    }
  }
  return result;
}

module.exports = {
    decode
}
