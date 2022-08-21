function sum(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let combinationCount = 0;

    let flag = false;
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            combinationCount++;
            if (i + j === c) {
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${i + j})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${combinationCount} combinations - neither equals ${c}`);
    }
}

sum(["1", "10", "5"]);
// sum(["88", "888", "1000"]);
// sum(["88", "888", "1000"]);
// sum(["88", "888", "2000"]);
