import * as fs from 'node:fs/promises';
import * as path from 'node:path';

async function loadFile(fileName:string) {
    const pathName = path.join('./', fileName);
    const file = await fs.readFile(pathName, ({ encoding: 'utf8' }));
    return file;
}

const fileName = process.argv[2];
const data = loadFile(fileName);
data.then((chunk) => {
  let totalPoints = 0;
  const lines:string[] = chunk.trim().split('\n');
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
          if (wins === 1) cardPoints++;
          else cardPoints *= 2;
        }
      }
    });
    totalPoints += cardPoints;
 }
    console.log(totalPoints);
})
