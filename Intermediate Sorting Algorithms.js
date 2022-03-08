//Merge Sort O(n log n) Spce = O(n)- splits up the array and continues to split until all numbers are split into 1 element. It's a divide and conquer 
//In order to implement merge sort its useful to first implement a function responsible for merging two sorted arrays 
//given two arrays  which are sorted , this helper function shuld create a new array which is also sorted and consists of all of the elements in the two input arrays
//This function should run in O(n + m)time and O(n + m) space and should not modify the parameters passed to it

//create an empty array that you will return in the end
//While there are still values we havent looked at
//  if the value in the first array is smaller than the vaule in the second array, push the value in the first array into our results and move on to the next value in the first array
//  if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move onto the next value in the second array
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



