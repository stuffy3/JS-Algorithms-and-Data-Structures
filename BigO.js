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

//Understanding the problem:

//Problem Soving patterns:

//frequency Counter
//write a function called same, which accepts two arrays. the function should return true if tevery value in the array has it's corrisponding square.

function same (arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

//Anagrams

//given two strings, write a function to determin if the second string is an anagram of the first. 
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

  //Multiple Pointers Pattern:

  //write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0
  //Return an array that includes both  values that sun to zero or undefined if a pair does not exist

  function sumZero(arr) {
      let left = 0;
      right = arr.length - 1;
      while(left < right) {
          let sum = arr[left] + arr[right];
          if(sum === 0){
              return [arr[left], arr[right]]
          } else if(sum > 0){
              right --
          } else {
              left ++
          }
      }
  }

 // countUniqueValues
 //implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 //There can be negaive numbers in the array, but it will be sorted.

 function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])

//Sliding Window
//