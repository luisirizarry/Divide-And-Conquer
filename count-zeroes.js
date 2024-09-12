function countZeroes(array) {
    const firstZeroIndex = fndFirstZero(array);
    if (firstZeroIndex === -1) {
        return 0;
    } else {
        return array.length - firstZeroIndex;
    }
}

function fndFirstZero(array) {
    let rghtIndex = array.length - 1;
    let lftIndex = 0;

    while (lftIndex <= rghtIndex) {
        const midIndex = Math.floor((lftIndex + rghtIndex) / 2);
        
        if (array[midIndex] === 0 && (midIndex === 0 || array[midIndex - 1] === 1)) {
            return midIndex;
        } else if (array[midIndex] === 1) {
            lftIndex = midIndex + 1;
        } else {
            rghtIndex = midIndex - 1;
        }
    }
    return -1;
}


module.exports = countZeroes