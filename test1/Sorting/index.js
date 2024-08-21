function sorting(arr, order='asc') {
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr.length; j++) {
            if (order === 'asc') {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            } else if (order === 'desc') {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    return arr
}

module.exports = sorting;