
// var moveZeroes = function(nums) {
// let n= nums.length;
// let left=0;

//     for (let right = 0; right < n; right++) {
//         if(nums[right] !=0) {
//             let temp=nums[right];
//             nums[right] = nums[left];
//             nums[left]= temp;
//             left++;
//         }
//     }
//     return nums;

// };
var moveZeroes = function(nums) {
let snowBallSize = 0; 
    for (let i=0;i<nums.length;i++){
        if (nums[i]==0){
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

console.log(moveZeroes([0,1,0,3,12]));
