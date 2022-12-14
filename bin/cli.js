#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "../lib/roll.js";  

//assign sides(6), dice(2), and rolls (1) to arguments or original values
const args = minimist(process.argv.slice(2))

const sides = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;

console.log(JSON.stringify( roll(sides, dice, rolls))); 
