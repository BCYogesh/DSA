# Rotate Array

### How to rotate array

- If the array has 5 values last number put it into first index
- Similarly remaining numbers shift to one index.

### What was K?

- If k can 1 which means we have to rotate array by 1 position
- Example: [1,2,3,4,5]=> [5,1,2,3,4]
- Suppose k to be 6 after rotating 5 times initial array will be came.
- After the 6th rotation we will get output : [5,1,2,3,4]
- So, if you note this we have to waste of time iteration 5 times
- So, simply we have to use reminder (n % k)

### First approach:

- we have to create a new array and fill the value as 0
- Each and very index add the value based on (i + k) % n
- Then we have to copy in the nums array

## Code:

```javascript
var rotateArray = function (nums, k) {
  let n = nums.length;
  let tempArray = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    tempArray[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = tempArray[i];
  }
  return nums;
};
```

### Second approach:

- We have to take the reminder from k using array length
- After we have to use slice method to get -k elements in this array.
- After getting this array we have concat the remaining values.

## Code:

```javascript
var rotateArray = function (nums, k) {
  let n = nums.length;
  k = k % n;

  if (k !== 0) {
    nums = nums.slice(-k).concat(nums.slice(0, -k));
  }
  return nums;
};
```

### Third approach:

if K=3;

- We have to take the reminder from k using array length
- We have to use three times reverse function
- First one is 0 -> n which means [7,6,5,4,3,2,1];
- Second one is 0 -> k-1 which means [5,6,7,4,3,2,1];
- Third one is k -> n which means [5,6,7,1,2,3,4]
- This our expected result.

## Code:

```javascript
var rotateArray = function (nums, k) {
  let n = nums.length;
  k = k % n;

  var reverse = function (left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  return nums;
};
```
