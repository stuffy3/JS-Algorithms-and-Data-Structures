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
 let start = 0
 let end = arr.length - 1
 let middle = Math.floor((start + end) / 2)

 while(arr[middle]  !== num && start <= end) {
     if(num < arr[middle]) end = middle-1
     else start = middle + 1
     middle = Math.floor((start + end) / 2)
 }
 return arr[middle] === num ? middle : -1
}

binarySearch([2,5,6,8,9,10,11,14,15,16,17,19,36,57], 16)