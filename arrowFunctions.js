export default () => {
  function add (a, b) {
    return a + b
  }
  console.log(add(1, 2)) // 3

  const add2 = (a, b) => {
    return a + b
  }
  console.log(add2(1, 2)) // 3

  const add3 = a => a + 1
  console.log(add3(2)) // 3
  // parentheses and return statement can be omitted when the function is only one instruction

  const add4 = a => b => a + b
  console.log(add4(1)(2)) // 3
  // add4 is a function taking an argument a, returning a function wating for an argument b and returning a + b

  // We can provide default values
  const add5 = (a, b = 2) => a + b
  console.log(add5(1)) // 3 - b is missing so 2 is used
  console.log(add5(1, 4)) // 5

  // Default values are used from right to left, that's why we have to set default values from right to left too

  const add6 = (a, b = 2, c = 3) => a + b + c // ok
  console.log(add6(1)) // 6

  const add7 = (a, b = 2, c) => a + b + c // not ok
  console.log(add7(1, 3)) // NaN
}
