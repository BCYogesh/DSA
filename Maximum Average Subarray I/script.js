var findMaxAverage = function(nums, k) {
    let n=nums.length;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let j = k; j < n; j++) {
        sum += nums[j] - nums[j-k]
        maxSum = Math.max(sum,maxSum)
    }
    return maxSum /k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));
