var firstLargest = function(nums) {
    let n = nums.length;
    let firstBig = -Infinity;

    for (let i = 0; i < n; i++) {
        if(nums[i] > firstBig) {
            firstBig= nums[i]
        }
    }
    return firstBig;
};

var secondLargest = function(nums) {

    let n = nums.length;

    if(n<2) {
        return "Array should have minimum 2 values"
    }

    let firstBig = -Infinity;
    let secondBig = -Infinity;
    
    for (let i = 0; i < n; i++) {
        if(nums[i] > firstBig) {
            secondBig=firstBig;
            firstBig=nums[i]
        } else if(nums[i]> secondBig && firstBig != nums[i]) {
            secondBig= nums[i]
        }
    }
    return secondBig;
}
console.log(secondLargest([20,20,10]));
