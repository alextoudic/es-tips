import escapeError from './escapeError'

export default () => {
  const foo = { bar: 'bar' }

  // Assign a variable by extracting a property from an array or object
  const { bar } = foo
  console.log(bar) // { bar: 'bar' }

  // The variable can be named differently than the field it's created from
  const { bar: baz } = foo
  console.log(baz) // 'bar'

  const [a, b] = [1, 2, 3, 4]
  console.log(a) // 1
  console.log(b) // 2
  // values are assigned from left to right

  // We can mix to access deepest properties
  // (sometimes making it hard to read!)
  const [{ bag: [{ name: rickGun }] }] = [
    {
      name: 'Rick',
      bag: [
        {
          id: 0,
          name: 'Portal Gun'
        }
      ]
    },
    {
      name: 'Morty',
      bag: []
    }
  ]
  console.log(rickGun) // 'Portal Gun'
  // bag is just here to target the property and isn't assigned
  escapeError(() => console.log(bag)) // bag is not defined

  // It can be used in arguments of a function
  const formatFoo = ({ bar: baz }) => `baz: ${baz}`
  console.log(formatFoo(foo))

  // And assigned a default value
  const greet = ({ name = 'anonymous' }) => `Hello ${name}!`

  console.log(
    greet({
      name: 'Rick'
    })
  ) // 'Hello Rick!'

  // The default value is applied to name property only not the argument
  escapeError(() => greet()) // TypeError: Cannot read property 'name' of undefined

  console.log(greet({})) // 'Hello anonymous!'
}
