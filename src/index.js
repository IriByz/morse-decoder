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
    // write your solution here
    let origExpr = String(expr);
    let resStr = "";
    let letter = "";

    do {
        letter = origExpr.substring(0, 10);
        origExpr = origExpr.substring(10, origExpr.length);
        if (letter == "**********") {
            resStr = resStr + " ";
        } else {
            let dashAndDots = "";
            for (let i = 0; i < 5; i++) {
                let symbol = letter.substring(0,2);
                switch (symbol) {
                    case "10":
                        dashAndDots = dashAndDots + ".";
                        break;
                    case "11":
                        dashAndDots = dashAndDots + "-";
                        break;
                    default:
                        break;
                }    
                letter = letter.substring(2,letter.length);
            }
            resStr = resStr + MORSE_TABLE[dashAndDots];
        }
    } while (origExpr.length > 0);
    return resStr;
}

module.exports = {
    decode
}