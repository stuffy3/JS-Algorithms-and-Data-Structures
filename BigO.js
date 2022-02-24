function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

//Allows you to check how much time elapsed
let t1 = new Date().getTime();
console.log(addUpTo2(1000000000000))
let t2 = new Date().getTime()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
