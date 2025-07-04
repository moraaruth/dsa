function twoSum(nums, target){
    const map = {}

    for(let i = 0; i <= nums.length; i++){
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];

        }

        map[nums[i]] = i;
    }

}