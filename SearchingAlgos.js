function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

// linearSearch([34,51,1,2,3,45,56,687], 100)

//Binary Search Psuedocode

//write a function that accepts a sorted array
//create a left pointer at the start then a right poter at the end
//while the left pointer comes before the right pointer 
// 1 create a pointer in the middle
// 2 if you find the value you wwant, return the index
// 3 if the value is too small, move the left pointer up.
// 4 if the value is too large, moe the right pointer down.
//if you never find the value return -1

function binarySearch(arr, num) {
 let start = 0 // sets the starting point middle point and end point
 let end = arr.length - 1
 let middle = Math.floor((start + end) / 2)

 while(arr[middle]  !== num && start <= end) { //loops through the array  changing the pointers
     if(num < arr[middle]) end = middle-1
     else start = middle + 1
     middle = Math.floor((start + end) / 2) //reassigns the middle number  
 }
 return arr[middle] === num ? middle : -1 //if the middle number is equal to the number we are searching for then we return the index else -1
}

binarySearch([2,5,6,8,9,10,11,14,15,16,17,19,36,57], 16)

//Naive String Search
// 1 loop over the longer string
// 2 loop over the shorter string
// 3 if characters don't match, break out of the inner loop
// 4 if characters do match, keep going
// 5 if you complee the inner loop and find a match, increment the count of matches
// 6 return the count

function naiveSearch(long, short) {
    count = 0
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++
        }
    }

}
naiveSearch('lorie loled', 'lol')