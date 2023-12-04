import * as fs from 'node:fs/promises';
import * as path from 'node:path';

function evaluateStr(str:string, numPosition:number[]) {
  if (numPosition[0] < 2 && numPosition[numPosition.length-1] ) {
  }
}

async function loadFile(fileName:string) {
    const pathName = path.join('./', fileName);
    const file = await fs.readFile(pathName, ({ encoding: 'utf8' }));
    return file;
}

function parseCalNumbers(line:string):number {
  if (line.length === 1) {
    return parseInt(line + line);
  } else if (line.length === 2) {
    return parseInt(line);
  } else {
    const numberChars = line[0] + line[line.length-1];
    return parseInt(numberChars);
  }
}

function readChar(string:string) {
  let tempStr = '';

  for (let i=0;i<string.length;i++) {
    const char = string[i];
    if (char !== '\n' && char !== ' ' && i!==string.length-1) {
      tempStr += char;
    } else {
      tempStr = '';
    }
  }
}

function findChar(str:string, delimiter:string) {
  for (let i=0;i<str.length;i++) {
    const char = str[i];
    if (char === delimiter) {
      return i;
    }
  }
}

function sumM(line:string) {
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
    console.log(wins, cardPoints, totalPoints);
  }
    console.log(totalPoints);
})

