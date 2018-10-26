import escapeError from './escapeError'

export default () => {
  // Different declaration key words:
  // var: allows mutability, scope is the function
  // let: allows mutability, scope is the block
  // (defined by curly brackets: { scope })
  // const: disallows mutability, scope is the block
  if (true) {
    var bar = 'bar'
    const baz = 'baz'
    let bat = 'bat'

    console.log(bar) // 'bar'
    console.log(baz) // 'baz'
    console.log(bat) // 'bat'

    bar = 'bar2'
    escapeError(() => (baz = 'baz2'))
    // Error: baz is read only
    bat = 'bat2'
  }

  console.log(bar) // 'bar2'
  escapeError(() => console.log(baz)) // Error: baz is not defined
  escapeError(() => console.log(bat)) // Error: bat is not defined

  // With arrays and objects, const means you can't reassign
  // But it doesn't block property updates
  const foo = []
  foo.push('foo') // ok
  console.log(foo) // ['foo']

  const bar = {}
  bar.bar = 'bar' // ok
  console.log(bar) // { bar: 'bar' }

  // Always prefer const to let and switch to let only when you need to reassign.
  // Never use var.
}
