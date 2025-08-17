# Maximum Average Subarray I (LeetCode 643)

## Problem

Given an array `nums` and an integer `k`, find the contiguous subarray of length `k` that has the maximum average value. Return this value.

---

## Brute Force Approach (O(n \* k)) - First Approach

### Logic

1. We need to check **every possible subarray of size `k`**.
2. For each starting index `i`, compute the sum of the next `k` elements.
3. Track the **maximum sum** found so far.
4. Finally, divide the maximum sum by `k` to return the maximum average.

---

## Code:

```javascript
var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let maxAvg = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= n - k; i++) {
    let current_sum = 0;

    for (let j = 0; j < k; j++) {
      current_sum += nums[i + j];
    }

    maxAvg = Math.max(current_sum, maxAvg);
  }

  return maxAvg / k;
};
```

## Optimized Sliding Window Approach (O(n)) - Second approach

### Logic

1. First, calculate the sum of the **first `k` elements**.
   - This forms the **initial window**.
2. Set `maxSum = sum` as the starting maximum.
3. Slide the window one element at a time:
   - **Remove** the leftmost element of the previous window.
   - **Add** the new element on the right.
4. Update `maxSum` with the maximum of current sum and previous max.
5. After processing all windows, return `maxSum / k`.

## Code:

```javascript
var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let sum = 0;

  // Step 1: Initial window sum
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  // Step 2: Slide the window
  for (let j = k; j < n; j++) {
    sum += nums[j] - nums[j - k];
    maxSum = Math.max(sum, maxSum);
  }

  // Step 3: Return maximum average
  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// Output: 12.75
```
