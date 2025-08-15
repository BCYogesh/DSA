
var singleNumber = function(nums) {
    let n = nums.length;
    let answer = nums[0];
    for (let i = 1; i < n; i++) {
      answer ^= nums[i]  
    };
    return answer;
};

console.log(singleNumber([2]));
