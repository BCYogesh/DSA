var containsDuplicate = function(nums) {
    let n = nums.length;
    if(n < 1) {return true};

    return ([...new Set(nums)].length === n) ? false : true;
};

console.log(containsDuplicate([1,2,3,1]));
