export const binarySearch = (array: number[], searched: number, left: number, right: number) => {
	if (left > right) {
		return false;
	}
	const mid = Math.floor((left + right) / 2);
	if (array[mid] === searched) {
		return true;
	} else if (searched < array[mid]) {
		return binarySearch(array, searched, left, mid - 1);
	} else {
		return binarySearch(array, searched, mid + 1, right);
	}
};
