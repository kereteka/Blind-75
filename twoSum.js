export const twoSum = function(nums,target) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    const el = target - nums[i]
    if(map.has(el)) {
     return [i, map.get(el)]
    } else
      map.set(nums[i], i)
  }
}
