var rotateArray = function (nums, k) {
  let n = nums.length;
  k = k % n;

  var reverse = function(left,right) {
    while(left < right) {
        [nums[left],nums[right]]= [nums[right],nums[left]];
        left++;
        right--;
    }
  } 

  reverse(0,n-1);
  reverse(0,k-1);
  reverse(k,n-1);
  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
