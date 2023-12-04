import * as fs from 'node:fs/promises';
import * as path from 'node:path';

function checkNum(char:string):Boolean {
  if (char === '0' || char === '1' || char === '2' || char === '3' || char === '4' ||
      char === '5' || char === '6' || char === '7' || char === '8' || char === '9') {
       return true;
     }
     return false;
}

const numbers = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'zero': 0
}

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
  const numPosition = [];

  for (let i=0;i<string.length;i++) {
    const char = string[i];
    if (char !== '\n' && char !== ' ' && i!==string.length-1) {
      if (checkNum(char)) {
        numPosition.push(tempStr.length);
      }
      tempStr += char;
    } else {
      evaluateStr(tempStr, numPosition);
      tempStr = '';
    }
  }
}


const fileName = process.argv[2];
let sum:number = 0;
const data = loadFile(fileName);
data.then((chunk) => {
  const answer = readChar(chunk);
  console.log(answer);
})

