console.clear();

const log = console.log;
var nums = [2, 7, 11, 15],
  target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = Object.create(null);
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    const num = nums[i];
    const rest = target - num;
    if (cache[rest] !== undefined) {
      return [cache[rest], i];
    } else {
      cache[num] = i;
    }
  }
  return [];
};

log(twoSum(nums, target));
