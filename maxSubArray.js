var maxSubArray = function(nums) {
  let maxCur = nums[0]
  let maxSub = nums[0]
  
  for(let i = 1; i < nums.length; i++) {
    maxCur = Math.max(nums[i], maxCur + nums[i])
    maxSub = Math.max(maxSub, maxCur)
  }
  return maxSub
}

