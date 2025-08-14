# Check if Array Is Sorted and Rotated

##### First of all how do we know this array has been sorted

## My First idea is :

- First element is compared to second element it is obviously big number or same number
- Similaryly second number compared to third elmennt as well
- Every time it will meet an condition I have to add the variable to increment the count
- Once the array will be done I have to compare with count and array length
- If both are matches the array was sorted array or else it is unsorted array.

## Code:

```javascript
var isSorted = function (nums) {
  let checkCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      checkCount++;
    }
  }
  return checkCount === nums.length ? true : false;
};
```

## Now How do we check if the array is rotated sorted array is non decreasing number

- Example : [3,4,5,1,2]

- If you clearly see that pattern is if you compare with first element and second element
  \_ It will decrease only one time if you see that arr[2] > arr[3].
- And also similary i want to compare with last index and first index.
- 2 > 3. if you see that if you rotate an array 1 position last number will be positioned as firstIndex
- So before rotate the array the first index number will be also big if it is small that array is not a rotated sorted array

## Code:

```javascript
var isSorted = function (nums) {
  let n = nums.length;
  if (n <= 1) {
    return true;
  }

  let count = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
    }
  }

  if (nums[n - 1] > nums[0]) {
    count++;
  }

  return count <= 1;
};
```
