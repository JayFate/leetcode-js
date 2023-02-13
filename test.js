console.clear();

const log = console.log;

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 1,2,3,8,5,7,6,4
  // 交换后
  // 1,2,3,8,6,7,5,4
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };
  for (let i = nums.length - 2; i >= 0; i--) {
    // 找拐点
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          swap(i, j);
          break;
        }
      }
      // 因为拐点之后的数组，必定是从左到右降序的
      // 所以可以对拐点之后的数组，进行一个双指针换位
      let start = i + 1,
        end = nums.length - 1;
      while (start < end) {
        swap(start, end);
        start++;
        end--;
      }
      // 直接结束函数即可
      return;
    }
  }
  // 如果找不到，说明  nums 是从大到小排序的，则将 nums 直接 reverse 一遍
  nums.sort((a, b) => a - b);
  return;
};

var nums = [1, 2, 3];

log(nextPermutation(nums));
log(nums);

// var s = "aba";
// log(validPalindrome(s));

// var s = "eeccccbebaeeabebccceea";
// log(validPalindrome(s));
