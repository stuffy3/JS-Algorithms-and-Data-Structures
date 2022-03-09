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
//Pivot Helper

//in order to implement gerge sort, it's useful to first implement a function responsible arranging elements in an array on either side of the pivot
//given an array this helper function shuld designate an element as the pivot
//it should then rearrange elements in the array so that all the values less than the pivot are moved to the right of the pivot, and all the values greater than the pivot are moved to the right

//picking the pivot
//the runtime of quick sort depends in part on how one selects the pivot
//ideally the pivot should be chosen so that its roughly the median value in the data set you're sorting 
//for simplicity we'll always choose the pivot to be the first element


//PIVOT PSEUDOCODE
//it will help to accept three arguments: an array, a start index,
//and an end index(these can default to 0 and the array length minus 1)
//grab the pivot from the start of the array
//store the current pivot index in a variable until the end
//  if the pivot is grater than the current element, increment the pivot index variuable and then swap the current element with the element at the pivot index
//swap the startig element (ie the pivot) with the pivot index
//return the pivot index

