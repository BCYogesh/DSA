var isSorted = function(nums) {
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

console.log(isSorted([3,4,5,1,2]));
