export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    let lastGood = 0;
    let brokenAt = breaks.length;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i] === true) {
            brokenAt = i;
            break;
        }
        lastGood = i;
    }
    
    for (let x = lastGood; x <= brokenAt; x++) {
        if (breaks[x] === true) {
            return x;
        }
    }
    return -1;
}