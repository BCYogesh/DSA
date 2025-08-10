var twoSum = function(nums, target) {
    let n= nums.length;
    const map = new Map();
    
    for (let i = 0; i < n; i++) {
        let complement = target - nums[i];

        if(map.has(complement)){
            return [i, map.get(complement)]
        }
        map.set(nums[i],i)
    }
};



console.log(twoSum([3,3],6));


