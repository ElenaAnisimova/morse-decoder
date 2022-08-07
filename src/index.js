const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
const expr = '00101010100000000010001011101000101110100000111111';

const splited = expr.match(/.{1,10}/g);
const withoutZeros = splited.map(y => y.substring(y.indexOf('1')));
const toMorse = (str) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        if ((i + 1) % 2 === 0 && str[i] === '0') {
            result = `${result}${'.'}`;
        } else if ((i + 1) % 2 === 0 && str[i] === '1') {
            result = `${result}${'-'}`;
        }
        i++;
    }
    return result
};
const pointsAndDashes = withoutZeros.map(toMorse);

console.log(pointsAndDashes);










