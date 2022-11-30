#!/usr/bin/env node

export function roll(side, die, roll){
    
    var res = [];
    for(let x = 0; x < roll; x++){
        var n = 0;
        for(let y = 0; y < die; y++){
            n += Math.floor(Math.random() * side) + 1;
        }
        res.push(n)
    }

    const a = {
        "sides":side,
        "dice": die, 
        "rolls": roll,
       "results": res
    }

    return a;
}
