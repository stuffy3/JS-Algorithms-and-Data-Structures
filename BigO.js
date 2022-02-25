//time complexity of O(n)
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

//objects are quick, they're fast with whatever they are doing
let instructor = {
    firstName: "Tanner",
    isInstructor: true,
    favNumber: 11,
}

//arrays are good for order
//push, pop are o(1) shift unshift are o(n) concat, slice and  splice are o(n) sort is o(n * log n) forEach/map/filter/reduce/ect. are o(n) 
let names = ["Michael", "Melissa", "Andre"]

let values =  [ true, {}, []]

