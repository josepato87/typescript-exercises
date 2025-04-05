function isPalindrome(x: number): boolean {
  const arr: Array<String> = Array.from(String(x));
  const length: number = arr.length;
  let tempArr: Array<String> = [];
  let count: number = 0;

  for (let i = length - 1; i >= 0; i--) {
    tempArr[count] = arr[i];
    count++;
  }

  return arr.join('') === tempArr.join('');
};

console.log(isPalindrome(1221));