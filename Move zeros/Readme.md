# Move Zeroes

##### We have to solve this problem in two ways using two pointers

- First is either we have 0 move on to the right side
- Second is we have non zeros numbers to the left side

##### Third method:

- The idea is that we go through the array and gather all zeros on our road.

##### First Method:

## Code:

var moveZeroes = function(nums) {
let n= nums.length;
let left=0;

    for (let right = 0; right < n; right++) {
        if(nums[right] !=0) {
            let temp=nums[right];
            nums[right] = nums[left];
            nums[left]= temp;
            left++;
        }
    }
    return nums;

};

##### Second Method:

## Code:

var moveZeroes = function(nums) {
let n= nums.length;
let right=n-1;

    for (let left = n-1; left >= 0; left--) {
        if(nums[left] == 0) {
            let temp=nums[left];
            nums[left] = nums[right];
            nums[right]= temp;
            right--;
        }
    }
    return nums;

};

##### Third method:

## Code :

var moveZeroes = function(nums) {
let snowBallSize = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]==0) {
            snowBallSize++;
        }
        else if (snowBallSize > 0) {
            let t = nums[i];
            nums[i]=0;
            nums[i-snowBallSize]=t;
        }
    }
    return nums;

};
