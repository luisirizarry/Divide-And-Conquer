function findRotatedIndex(array, num) {
    return findNum(array, num);
}

function findRotatedIndex(array, num) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (array[midIndex] === num) {
            return midIndex;
        }

        if (array[leftIndex] <= array[midIndex]) { 
            if (num >= array[leftIndex] && num < array[midIndex]) {
                rightIndex = midIndex - 1; 
            } else {
                leftIndex = midIndex + 1; 
            }
        } else { // Right half is sorted
            if (num > array[midIndex] && num <= array[rightIndex]) {
                leftIndex = midIndex + 1; 
            } else {
                rightIndex = midIndex - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex