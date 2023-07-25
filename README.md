# leetCode-Sort-By

# Description

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

 

**Example 1:**

```
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
```
**Example 2:**

```
Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
```
**Example 3:**
```
Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1. 
 ```

**Constraints:**
```
- arr is a valid JSON array
- fn is a function that returns a number
- 1 <= arr.length <= 5 * 105
```

# Intuition

The custom Quick Sort implementation is advantageous for a stable sorting algorithm or requires high customization with different comparison functions. I am comparing it to the built-in 'array sort' function.


# Complexity
- Time complexity:
  The average-case time complexity of Quick Sort is O(n log n), and the worst-case time complexity is O(n^2) when the pivot selection is not optimized. The built-in sort() method typically uses a variant of Quick Sort, which has an average-case time complexity of O(n log n). 

- Space complexity:
  The custom Quick Sort implementation uses O(log n) additional memory due to the recursive calls on the call stack. The space complexity of 'arr.sort()' is implementation-dependent and can vary across different JavaScript engines.

