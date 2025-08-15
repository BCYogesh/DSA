# Single Number

### Question:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Example:

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

## First Approach:

- We have to use hashing method because each time iterate the value we have increase the frequency.
- And then the frequncy as 1 I want return the value.

## Code:

```Javascript
var singleNumber = function(nums) {
    let n = nums.length;

    let map = new Map();
    let appearance = 1;


    for (let i = 0; i < n; i++) {
      if(map.has(nums[i])) {
        map.set(nums[i],map.get(nums[i]) + 1)
      } else{
        map.set(nums[i],appearance)
      }
    }

    for (const [key,value] of map) {
      if(value === 1) return key;
    }
};

```

## Second Approach

- We have to solve using XOR(^) Operation.
- XOR Truth table:

| A   | B   | A ^ B |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 1     |
| 1   | 0   | 1     |
| 1   | 1   | 0     |

- Using XOR Operation it will check all the number appearance.
- Throw in 4 → stays (no partner yet).
- Throw in 1 → stays (no partner yet).
- Throw in 2 → stays (no partner yet).
- Throw in the second 1 → the two 1’s disappear.
- Throw in the second 2 → the two 2’s disappear.
- Now… only 4 is left inside (unique number).
- If appearance twice that number will be erase.
- So it will give only unique value.

## Code:

```Javascript
var singleNumber = function(nums) {
    let n = nums.length;
    let answer = nums[0];
    for (let i = 1; i < n; i++) {
      answer ^= nums[i]
    };
    return answer;
};
```
