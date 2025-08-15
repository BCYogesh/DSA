var searchInsert = function(nums,target) {
  let low= 0;
  let middle;
  let high = nums.length;

  if(target < nums[0]) return 0;

  while(low <= high) {
    middle = (low+high) /2;
    if(nums[middle]=== target) {
      return middle;
    }
    if(target < nums[middle]) {
      high = middle-1;
    } else {
      low= middle+1;
    }
  }
  return low;


}

console.log(searchInsert([2,8,10,15,21,25],7));
