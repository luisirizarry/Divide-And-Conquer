function findRotationCount(array) {
  return findN(array);
}

function findN(array, leftIndex, rightIndex){
    rightIndex = array.length - 1;
    leftIndex = 0;

    while(leftIndex <= rightIndex){
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        
        if (midIndex === 0 || (array[midIndex] < array[midIndex - 1])) {
            return midIndex;
        }

        if (midIndex < array.length - 1 && array[midIndex + 1] < array[midIndex]) {
            return midIndex + 1;
        }

        if (array[midIndex] >= array[leftIndex]) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
        
    }
    return 0;
}

module.exports = findRotationCount