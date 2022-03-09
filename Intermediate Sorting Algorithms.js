//ALL COMPARISON SORT

//Merge Sort O(n log n) Spce = O(n)- splits up the array and continues to split until 
//all numbers are split into 1 element. It's a divide and conquer 
//In order to implement merge sort its useful to first implement a function responsible 
//for merging two sorted arrays 
//given two arrays  which are sorted , this helper function shuld create a new array which 
//is also sorted and consists of all of the elements in the two input arrays
//This function should run in O(n + m)time and O(n + m) space and should not modify the parameters passed to it

//create an empty array that you will return in the end
//While there are still values we havent looked at
//  if the value in the first array is smaller than the vaule in the second array, 
//push the value in the first array into our results and move on to the next value in the first array
//  if the value in the first array is larger than the value in the second array, 
//push the value in the second array into our results and move onto the next value in the second array
//  once we exhause one array, push in all remaining values from the other array


//mergeSort Psudo
//Break up the array into halves until ou have arrays that are epty or have 1 element- using array.slice
//once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//once the array has been merged back together, returnthe merged and sorted array

function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        }else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    console.log(results)
    return results
}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

mergeSort([1,4,67,7,52,6,9,3,44,56,73,36,45,25,74,87,99,65,34,12,123,42,143,511,434])

//QUICK SORT
//uses the fact that arrays of 0 or 1s are always sorted
//works by selecting one element called the pivot and finding he index where the pivot should end up in the sorted array
//Pivot Helper

//in order to implement gerge sort, it's useful to first implement a function responsible 
//arranging elements in an array on either side of the pivot
//given an array this helper function shuld designate an element as the pivot
//it should then rearrange elements in the array so that all the values less than the pivot 
//are moved to the right of the pivot, and all the values greater than the pivot are moved to the right

//picking the pivot
//the runtime of quick sort depends in part on how one selects the pivot
//ideally the pivot should be chosen so that its roughly the median value in the data set you're sorting 
//for simplicity we'll always choose the pivot to be the first element


//PIVOT PSEUDOCODE
//it will help to accept three arguments: an array, a start index,
//and an end index(these can default to 0 and the array length minus 1)
//grab the pivot from the start of the array
//store the current pivot index in a variable until the end
//  if the pivot is grater than the current element, increment the pivot index variuable 
//and then swap the current element with the element at the pivot index
//swap the startig element (ie the pivot) with the pivot index
//return the pivot index

//Quicksort Pseudocode O(n log n) worstcase O(n2) depending on pivot point
//call the pivot helper on the array
//when the helper returns to you the updated pivot index, recursively call the 
//pivot helper on the subarray to the left on that index and the subarray to the righ of that index.

function pivot(arr, start=0, end=arr.length+1){
    const swap = (arr, idx1, idx2) => { 
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    //assume pivot is the first element
    var pivot = arr[start];
    var swapIdx = start
    
    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    //swap the pivot deom the start of the swapPoint
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left=0, right=arr.length - 1){
    if(left < right){
    let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr,left,pivotIndex-1)
    //right side
    quickSort(arr,pivotIndex+1, right)
    }
    return arr
}


//NOT MAKING COMPARISONS  ONLY WORKS ON NUMBERS
//RADIX SORTS O(nK) n = length of array k = number of digits(average)
//it never makes comparisons between elements
//it exploits the fact that information about the size of a number is encoded in the number of digits
//more digits means a bigger number

//RadixSortHelper
//gather each digit

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

//returns the number of digits to be able to find how many sorts we need to iterate through
function digitCout(num){
    if(num === 0) return 1
return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}


//RADIX SORT
//define a function that accepts a lis tof numbers
//figure out how many digits the largest number has
//loop thgouh k = 0 up to this largest number of digits 
//for each iteration of the loop
//  create buckets for each digit(0-9)
//  place each number in the correspoding bucket based in its kth digit
//replace our existing array with values in our buckets, starting with 0 and going up to 9
//return the list at the end

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

radixSort([23,45,34,657,67,8,4,25,2546])