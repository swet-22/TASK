// Task - 1
let numbers = []

for (let i = 0; i <= 50; i++) {
  numbers.push(i)
}

console.log(numbers)

if (numbers.includes(22)) {
  console.log("22 number is founded in array.")
}
else {
  console.log("22 number is not founded in array.")
}


// Task - 2
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]

let num = a.concat(b)

console.log(num)