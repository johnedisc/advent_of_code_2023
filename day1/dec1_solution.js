var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
function checkNum(char) {
    if (char === '0' || char === '1' || char === '2' || char === '3' || char === '4' ||
        char === '5' || char === '6' || char === '7' || char === '8' || char === '9') {
        return true;
    }
    return false;
}
function loadFile(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pathName = path.join('./', fileName);
        const file = yield fs.readFile(pathName, ({ encoding: 'utf8' }));
        return file;
    });
}
function parseCalNumbers(line) {
    if (line.length === 1) {
        return parseInt(line + line);
    }
    else if (line.length === 2) {
        return parseInt(line);
    }
    else {
        const numberChars = line[0] + line[line.length - 1];
        return parseInt(numberChars);
    }
}
function readChar(string) {
    let tempNum = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char !== '\n' && char !== ' ' && i !== string.length - 1) {
            if (checkNum(char))
                tempNum += char;
        }
        else {
            const calNum = parseCalNumbers(tempNum);
            sum += calNum;
            tempNum = '';
        }
    }
    return sum;
}
const fileName = process.argv[2];
let sum = 0;
const data = loadFile(fileName);
data.then((chunk) => {
    const answer = readChar(chunk);
    console.log(answer);
});
