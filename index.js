/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// var sortBy = function(arr, fn) {
//     return arr.sort((a,b) => fn(a) - fn(b))
// };

// Custom Quick Sort Implementation
var sortBy = function(arr, fn) {
   return quickSort(arr,fn);
};

function quickSort(arr,fn){
 if(arr.length <2){
        return arr;
    } else {
        const pivot = arr[0]; // We can change that to be random as it will improve the efficiency of the quicksort algorithm
        const less = [];
        const greater = [];

        for(let i =1; i<arr.length; i++){
            if(fn(arr[i])<fn(pivot)){
                less.push(arr[i])
            } else {
                 greater.push(arr[i])
                }
        }
        return[...quickSort(less,fn), pivot, ...quickSort(greater,fn)]
    }
}
