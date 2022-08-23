function equalSums(list) {
    let hasFoundResult = false;
    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIdx = 0; leftIdx < i; leftIdx++) {
            let currentNumber = list[leftIdx];
            leftSum += currentNumber;
        }

        for (let rightIdx = i + 1; rightIdx < list.length; rightIdx++) {
            let currentNumber = list[rightIdx];
            rightSum += currentNumber;
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        } else {

        }
    }

    if (hasFoundResult === false) {
        console.log("no");
    }
}

//equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
//equalSums([1, 2, 3]);
//equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);