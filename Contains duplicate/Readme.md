# Contains Duplicate

### Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

###### Input: nums = [1,2,3,1]

###### Output: true

###### Explanation: The element 1 occurs at the indices 0 and 3.

## Brute Force

- Using two loops one is pointing to first element and another is move on next numbers
- also compared to both number if both numbers is matching return true else return false

## Code

var containsDuplicate = function(nums) {
let n = nums.length;
if(n < 1) {return true};

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;

};

## Analyse optimal solution

- The array have a numbers we need to use set because of if any duplicate contains
- It will get uniques values from this array. And then easily compared to using length
- Property have a original array length and removed duplicate array length is not matches
- The array contains duplicate right then return true or else return false.

## Code

var containsDuplicate = function(nums) {
let n = nums.length;
if(n < 1) {return true};

    return ([...new Set(nums)].length === n) ? false : true;

};
