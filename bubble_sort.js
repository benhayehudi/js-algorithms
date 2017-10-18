function bubbleSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                let temp = array[i - 1]
                array[i - 1] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}

/* Bubble sort is a way to sort data. In this case it is sorting it in a descending order. The algorithm compares each two neighboring numbers to see which one is larger. If the first one is larger than the second one than they are swapped. This is continued until all numbers have been iterated through. */