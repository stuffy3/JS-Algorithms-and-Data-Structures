function  countDown(num){
    if(num <=  0) { //this is the Base Case and you must have the return value
        console.log("All Done!")
        return
    }
    console.log(num)
    num--;
    countDown(num)
}
// countDown(4)

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1)
}



//Factorial --non recusrive function below

function factorial(num){
    let total = 1
    for(let i = num; i < 0; i++){
        total *= i
    }
    return total
}

function factor(num) {
    if(num === 1 ) return 1; //basecase
    return num * factorial(num-1)
}



//Helper Method Recursion

function collectOddValues(arr) {
    let results = []
    function helper(helperInput){
        if(helperInput.length === 0) {
            return
        }

        if (helperInput[0] % 2 !== 0) {
            results.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    console.log(results)
    return results
} 




function collectOddValues2(arr) {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !==  0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)))
    console.log(newArr)
    return newArr;
}

// collectOddValues2([1,2,4,5,3,6,8,7,6,3,7,8,5,7,2,6,23,77,45,36,765,563,6456,1,5145,6345727,15246473])

function power(base, exp){
    if (exp === 0) return 1;
    let results = base * power(base, exp-1);
    console.log(results)
    return results
}

power(2,6)