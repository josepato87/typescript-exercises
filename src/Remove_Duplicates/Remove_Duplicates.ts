function removeDuplicates(nums: (number | string)[]): number {
  const numsLength: number = nums.length;

  if (numsLength === 0) return 0;

  let k: number = 1;

  for (let i: number = 0; i < numsLength; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++
    }
  }

  return k;

};

console.log(removeDuplicates([1, 1, 2]));