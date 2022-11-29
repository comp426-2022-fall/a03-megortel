#!/usr/bin/env node
import minimist from 'minimist';
import {roll} from "/lib/roll.js";  

//assign sides(6), dice(2), and rolls (1) to arguments or original values
const args = minimist(process.argv.slice(2))
const sides = args.sides ? args.dice: 6;
const dice = args.dice ? args.dice: 2;
const rolls = args.rolls ? args.rolls: 1;
const results = roll(sides, dice, rolls);

console.log(JSON.stringify(results)); 
process.exit(0); 
