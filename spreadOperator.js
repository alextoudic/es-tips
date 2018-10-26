export default () => {
  // Spread operator is wrote `...`, means "spread every values from an iterable" and have multiple uses

  const arr = ['a', 'b', 'c']

  const arr2 = arr
  arr2.push('d') // arr is modified too

  // used to copy an array
  const arr3 = [...arr]
  arr3.push('e')

  console.log(arr) // ['a', 'b', 'c', 'd']
  console.log(arr2) // ['a', 'b', 'c', 'd']
  console.log(arr3) // ['a', 'b', 'c', 'd', 'e']

  const obj = {
    a: 1,
    b: 2,
    c: 3
  }

  const obj2 = obj
  obj2.d = 4

  // used to copy an object
  const obj3 = { ...obj }
  obj3.e = 5

  console.log(obj) // { a: 1, b: 2, c: 3, d: 4 }
  console.log(obj2) // { a: 1, b: 2, c: 3, d: 4 }
  console.log(obj3) // { a: 1, b: 2, c: 3, d: 4, e: 5 }

  // Really convenient to deal with immutability
  const arr4 = [1, 2, 3]

  const arr5 = [...arr4, 4] // like push without modifying arr4
  console.log(arr5) /// [1, 2, 3, 4]

  const arr6 = [...arr4.slice(0, 1), ...arr4.slice(2)] // like splice without modifying arr4
  // splice remove the value, slice isn't destructive and return a new array
  console.log(arr6) // [1, 3]

  console.log(arr4) // [1, 2, 3]

  // It can be used in a function's declaration to specify an infinite list of arguments which will be assigned in an array
  const addX = (...values) => values.reduce((acc, x) => acc + x)
  console.log(addX(1, 2)) // 3
  console.log(addX(1, 2, 3)) // 6
  console.log(addX(1, 2, 3, 4, 5, 6)) // 21

  // The spread operator can be with other named arguments but must be the last
  // foo(bar, ...baz) ok
  // foo(...bar, baz) not ok

  // It can be used with desctructuring and means "every property not already listed"
  const { foo, ...rest } = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  }
  console.log(foo) // 'foo'
  console.log(rest) // "{ bar: 'bar', baz: 'baz' }"

  const [foo2, ...rest2] = ['foo', 'bar', 'baz']
  console.log(foo2) // 'foo'
  console.log(rest2) // "[ 'bar', 'baz' ]"

  // It can be used to concatenate multiple arrays or objects

  // Concatenating objects, if a same field is duplicated, only the last will be kept.
  // Which allows the following use case:
  const defaultOptions = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  }
  const receivedOptions = {
    foo: 'foo2'
  }
  const appliedOptions = {
    ...defaultOptions,
    ...receivedOptions
  }
  console.log(appliedOptions) // { foo: 'foo2', bar: 'bar', baz: 'baz' }
}
