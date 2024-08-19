import { yarg } from './config/plugins/args.plugin';
import fs from 'fs';

const value: number = yarg.b;

const header: string = `
  ======================
  Tabla del ${value}
  ====================== \n
`;

const maxValue: number = yarg.l;
let counter: number = 0;
let output: string = '';

while (counter <= maxValue) {
  output += `\n ${counter} x ${value} = ${counter * value}`
  counter++
}

output = header + output;

if(yarg.s) console.log(output);

const outputPath = fs.mkdirSync(`outputs/`, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${value}.txt`, output);
console.log('File created')
