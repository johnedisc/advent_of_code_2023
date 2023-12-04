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
function loadFile(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pathName = path.join('./', fileName);
        const file = yield fs.readFile(pathName, ({ encoding: 'utf8' }));
        return file;
    });
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
    }
    console.log(totalPoints);
});
