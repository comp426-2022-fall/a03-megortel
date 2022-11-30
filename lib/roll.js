export function roll(side, die, roll){
    
    var res = [];
    for(let x = 0; x < roll; x++){
        var n = 0;
        for(let y = 0; y < die; y++){
            var addNum = Math.floor(Math.random() * sides) + 1;
            n += addNum;
        }
        res.push(n)
    }

    const a = {
        sides:side,
        dice: die, 
        rolls: roll,
        results: res
    }

    return a;
}
