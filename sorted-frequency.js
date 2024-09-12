function sortedFrequency(array, num) {
    const first = fndFirst(array, num);
    const second = fndLast(array, num);
    if (first === -1 || second === -1) {
        return -1;
    } else {
        return second - first + 1
    }
}

function fndFirst(array, num) {
    let lftIndex = 0;
    let rghtIndex = array.length - 1;

    while (lftIndex <= rghtIndex) {
        const midIndex = Math.floor((lftIndex + rghtIndex) / 2);

        if (array[midIndex] === num) {
            if (midIndex === 0 || array[midIndex - 1] !== num) {
                return midIndex;
            }
            rghtIndex = midIndex - 1;
        } else if (array[midIndex] < num) {

            lftIndex = midIndex + 1;
        } else {
            rghtIndex = midIndex - 1;
        }
    }
    return -1;
}


function fndLast(array, num) {
    let lftIndex = 0;
    let rghtIndex = array.length - 1;

    while (lftIndex <= rghtIndex) {
        const midIndex = Math.floor((lftIndex + rghtIndex) / 2);

        if (array[midIndex] === num) {
            if (midIndex === array.length - 1 || array[midIndex + 1] !== num) {
                return midIndex;
            }
            lftIndex = midIndex + 1;
        } else if (array[midIndex] < num) {
            lftIndex = midIndex + 1;
        } else {
            rghtIndex = midIndex - 1;
        }
    }
    return -1;
}


module.exports = sortedFrequency