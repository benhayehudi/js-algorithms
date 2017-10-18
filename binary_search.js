function binarySearch(array, val) {
    let first = 0,
        last = array.length - 1,
        middle = Math.floor((first + last) / 2);

    while (array[middle] != val && first < last) {
        if (val < array[middle]) {
            last = middle - 1;
        } else if (val > array[middle]) {
            first = middle + 1;
        }
        middle = Math.floor((first + last) / 2);
    }
    return (array[middle] === val) ? val : "not there"
}

/* Binary search is a method to look through a large set of SORTED data by dividing up the data into two halves. The value sought is compared against each half and depending on whether it is either less than or greater the middle point, the halves are redefined thereby eliminating the need to loop through every number and only search the one half where the value is. If the value cannot be found it returns "not there" to the user. */