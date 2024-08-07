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
    let decodedMessage = ''

    for (let i = 0; i < expr.length; i += 10) {
        const segment = expr.slice(i, i + 10)

        if (segment === '**********') {
            decodedMessage += ' '
            continue
        }

        let morseSymbol = ''
        for (let j = 0; j < 10; j += 2) {
            const pair = segment.slice(j, j + 2)
            if (pair === '10') {
                morseSymbol += '.'
            } else if (pair === '11') {
                morseSymbol += '-'
            }
        }

        decodedMessage += MORSE_TABLE[morseSymbol] || ''
    }

    return decodedMessage
}

module.exports = {
    decode
}