//Built in JavaScript Sort
function numberCompare(num1, num2){
    return num1 - num2;
}
[6,5,2,6,3,15,3].sort(numberCompar)

//Bubble Sort How to swap two items in an array

function swap(arr, index1, index2){
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const swaping = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Bubblesort Psuedocode
// 1 start looping from with a called i the endo of the array towards the beginning
//start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1] swap those values
//return the sorted array

//important optimizaion?
//just check with the last time through to see if there were any swaps

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < arr.length; j++){
            arr[j] > arr[j + 1]
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
    return arr
}

function bubblesort(arr){
    let noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        noSwaps = false
    }
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j+1) 
            }
        }
        if(noSwaps) break;
    }
    return arr
}

//Selection Sort
//Store the first element as the smalled value you've seen so far/
//compare this item to the next item in the array unti; you find a smaller number
//if a smaller number is found, designate he smaller number to be the new minimum and continue until the end f he array 
//if the minimum us not the value(index) you initially began with, swap the two values
//repeat this with the next element in the array until the array is sorted.

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            } 
        }
        if( i !== lowest){
            let temp = arr[i]
                arr[i] = arr[lowest]
                arr[lowest] = temp
        }
    }
    return arr
}

selectionSort([34,35,22,14,3,16,77])

//Insertion Sort

//start by picking the second element in the array compare it to the one before, swap if nessesarry
//continue to the next element and if it is in the incorrect order, ierate through the sorted portion(left place) to place he element in the correct place.
//Reapeat until the array is sorted


function insertionSort(arr){
for( let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }

    return arr
}

insertionSort([2,1,9,76,3,5])