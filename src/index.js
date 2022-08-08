function decode(expr) {
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
    const splited = expr.match(/.{1,10}/g);

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
        return result;
    };
    const pointsAndDashes = splited.map(y => toMorse(y.substring(y.indexOf('1'))));

    const findKeys = (obj, expectedValue) => {
        let result = [];
        const entries = Object.entries(obj);
        for (const [key, value] of entries) {
            if (key === expectedValue) {
                result.push(value);
            }
        }
        return result.join();
    };
    const textDecoded = pointsAndDashes.map(x => findKeys(MORSE_TABLE, x));

    const replaceInArray = function (str) {
        return str.replaceAll(/^$/g, " ")
    }

    const oneString = textDecoded.map(replaceInArray).join('');
    return oneString;
}

module.exports = {
    decode
}







