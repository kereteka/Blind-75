//loop through forward and backward except the number itself then multiply the results
var productExceptSelf = function(nums) {
  let arr = []
  let start = 1;
  for(let i = 0; i < nums.length; i++) {
    arr.push(start)
    start = start * nums[i]
  }
  let end = 1; 
  for(let i = nums.length; i > 0; i--) {
    arr[i] = end*arr[i];
    end = end*nums[i]
  }
  return arr
}
