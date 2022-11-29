export default function roll(sides, dice, rolls){
    let res = [];
    for(let x = 0; x < rolls; x++){
        let n = 0;
        for(let y = 0; y < dice; y++){
            let addNum = Math.floor(Math.random() * sides) + 1;
            n += addNum;
        }
        res[x] = n;
    }

    let a = {
        sides:sides,
        dice: dice, 
        rolls: rolls,
        results: res
    }

    return JSON.stringify(a);
}
