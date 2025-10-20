function sumOfArray(nums) {
  return nums.reduce((acc, n) => acc + n, 0)
}

function averageOfArray(nums) {
  if (nums.length === 0) return 0
  let total = sumOfArray(nums)
  return total / nums.length
}

function formatString(str) {
  return `Hello, ${str}!`
}

const arr1 = [1, 2, 3]
console.log(sumOfArray(arr1))
console.log(sumOfArray([2, 4, 6])) // 12
console.log(averageOfArray([2, 4, 6])) // 4
console.log(formatString('Dio')) // "Hello, Dio!"
