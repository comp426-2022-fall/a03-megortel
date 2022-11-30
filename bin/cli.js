#!/usr/bin/env node
import {roll} from '/lib/roll.js';  
import minimist from "minimist";

//assign sides(6), dice(2), and rolls (1) to arguments or original values
const args = minimist(process.argv.slice(2))

const sides = args.sides ? args.sides: 6;
const dice = args.dice ? args.dice: 2;
const rolls = args.rolls ? args.rolls: 1;

console.log(JSON.stringify( roll(sides, dice, rolls))); 
process.exit(0); 
