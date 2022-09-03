const { binarySearch } = require("@lah/algo");

const array = [3, 2, 1, 5, 2, 5, 21, 543, 321, 21, 332, 51, 5, 5, 1, 2, 1, 31, 5, 656, 234, 65, 46, 3456, 4, 56, 5345, 6345, 6];
console.log(binarySearch(array, 543, array[0], array[array.length]));
