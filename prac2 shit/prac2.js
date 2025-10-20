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

document.getElementById('analyze').addEventListener('click', () => {
  const numInput = document.getElementById('numbers').value
  const nameInput = document.getElementById('username').value

  // convert string -> array of numbers
  const numArray = numInput
    .split(',') //"1, 2, 3, abc, 5" → ["1", " 2", " 3", " abc", " 5"]
    .map((n) => parseFloat(n.trim())) //["1", " 2", " 3", " abc", " 5"] → [1, 2, 3, NaN, 5]
    .filter((n) => !isNaN(n)) // [1, 2, 3, NaN, 5] → [1, 2, 3, 5]

  const sum = sumOfArray(numArray)
  const avg = averageOfArray(numArray)
  const greeting = formatString(nameInput || 'User')

  document.getElementById('sum-output').textContent = `Sum: ${sum}`
  document.getElementById('avg-output').textContent = `Average: ${avg}`
  document.getElementById('greet-output').textContent = greeting
})
