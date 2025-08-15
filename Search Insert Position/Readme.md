# Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

### Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

### Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

### Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

## First Approach

- First, check if the target value exists in the array.

  - If it exists, return its index immediately.

- If the target is not in the array, find the position where it should be inserted while keeping the array sorted.

- To do this:

  - Track when `nums[i-1] < target` — meaning the target is greater than the previous number. Store this in `tailIndex` as `true`.
  - Track when `target < nums[i]` — meaning the target is smaller than the current number. Store this in `frontIndex` as `true`.

- If all elements in `tailIndex` are `true`, it means the target is greater than all numbers, so return `nums.length` (insert at the end).

- If all elements in `frontIndex` are `true`, it means the target is smaller than all numbers, so return `0` (insert at the beginning).

## Code:

```Javascript
var searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
      if(nums[i] === target){
        return i;
      }
    }
    let frontIndex = new Array(nums.length-1).fill(false);
    let tailIndex = new Array(nums.length-1).fill(false);


    for (let i = 1; i < nums.length; i++) {
      if((nums[i-1] < target) && (target < nums[i])) {
        return i;
      } else if(nums[i-1] < target) {
        tailIndex[i-1] = true;
      } else if(target < nums[i]) {
        frontIndex[i-1] = true;
      }
    }

    let returnTailIndex = tailIndex.every((val)=> val===true);
    let returnFrontIndex = frontIndex.every((val)=> val===true);

    if(returnTailIndex) {
      return nums.length;
    }
    if(returnFrontIndex) {
      return 0;
    }

};
```

## Second Simplified Approach

- First, handle the case where the target is smaller than the first element.

  - If `target < nums[0]`, return `0` because the target should be inserted at the beginning.

- Loop through each element in the array:

  - If `nums[i] === target`, return `i` (target found).
  - If the target is between two numbers (`nums[i-1] < target < nums[i]`), return `i` (insert position found).

- If the loop finishes without finding a position, it means the target is greater than all elements.
  - Return `nums.length` to insert the target at the end.

## Code:

```javascript
var searchInsert = function (nums, target) {
  // handle front case
  if (target < nums[0]) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;

    if (i > 0 && nums[i - 1] < target && target < nums[i]) return i;
  }
  return nums.length;
};
```

## Third Binary Search Approach for Search Insert Position

This solution uses **binary search** to find the target or determine its correct insert position in a sorted array.

### Logic

- Initialize:

  - `low = 0` (start of the array)
  - `high = nums.length` (end of the array index range)
  - `middle` will store the midpoint index during the search.

- Handle the case where the target is smaller than the first element:

  - If `target < nums[0]`, return `0` (insert at the beginning).

- While `low <= high`:

  1. Find the midpoint:
     ```
     middle = (low + high) / 2
     ```
     _(Note: You should use `Math.floor` to ensure an integer index)_
  2. If `nums[middle] === target`, return `middle` (target found).
  3. If `target < nums[middle]`, move the `high` pointer to `middle - 1` (search in the left half).
  4. Else, move the `low` pointer to `middle + 1` (search in the right half).

- If the loop ends without finding the target:
  - Return `low`, which will be the correct insert position.

### Time Complexity

- **O(log n)** — the search range is halved on each iteration.

### Space Complexity

- **O(1)** — only a few variables are used.

## Code:

```Javascript
var searchInsert = function(nums,target) {
  let low= 0;
  let middle;
  let high = nums.length;

  if(target < nums[0]) return 0;

  while(low <= high) {
    middle = (low+high) /2;
    if(nums[middle]=== target) {
      return middle;
    }
    if(target < nums[middle]) {
      high = middle-1;
    } else {
      low= middle+1;
    }
  }
  return low;


}

console.log(searchInsert([2,8,10,15,21,25],7));

```
