import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; 

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication base number'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: 'Multiplication limit number'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Show multiplication table'
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    demandOption: false,
    default: 'multiplication-table',
    describe: 'Name the table file'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    demandOption: false,
    default: 'outputs',
    describe: 'Change output destination'
  })
  .check(( argv, options ) => {
    if (argv.b < 1) throw 'Base must be greater than 0';

    return true;
  })
  .parseSync()
