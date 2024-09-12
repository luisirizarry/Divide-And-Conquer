function findFloor(array, x) {
    return findTheFloor(array, x)
}

function findTheFloor(array, x) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let floor = -1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (array[midIndex] <= x) {
            floor = array[midIndex];
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }

    }
    return floor;
}

module.exports = findFloor