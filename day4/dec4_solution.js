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
function evaluateStr(str, numPosition) {
    if (numPosition[0] < 2 && numPosition[numPosition.length - 1]) {
    }
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
    let tempStr = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char !== '\n' && char !== ' ' && i !== string.length - 1) {
            tempStr += char;
        }
        else {
            tempStr = '';
        }
    }
}
function findChar(str, delimiter) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === delimiter) {
            return i;
        }
    }
}
function sumM(line) {
    console.log(line);
    return;
    //  let tempStr = '';
    //  const numPosition = [];
    //
    //  for (let i=0;i<line.length;i++) {
    //    const char = line[i];
    //    if (char === ':') {
    //
    //    }
    //    if (char !== '\n' && char !== ' ' && i!==line.length-1) {
    //      if (checkNum(char)) {
    //        numPosition.push(tempStr.length);
    //      }
    //      tempStr += char;
    //    } else {
    //      evaluateStr(tempStr, numPosition);
    //      tempStr = '';
    //    }
    //  }
}
const fileName = process.argv[2];
const data = loadFile(fileName);
data.then((chunk) => {
    let totalPoints = 0;
    const lines = chunk.trim().split('\n');
    for (let line of lines) {
        let cardPoints = 0;
        let wins = 0;
        const allNumbers = line.split(':')[1].trim();
        const targetNumbers = allNumbers.split('|')[0].trim().split(' ');
        const elfNumbers = allNumbers.split('|')[1].trim().split(' ');
        targetNumbers.map((el) => {
            if (el !== '' && el !== ' ') {
                if (elfNumbers.indexOf(el) > -1) {
                    ++wins;
                    if (wins === 1)
                        cardPoints++;
                    else
                        cardPoints *= 2;
                }
            }
        });
        totalPoints += cardPoints;
        console.log(wins, cardPoints, totalPoints);
    }
    console.log(totalPoints);
});
