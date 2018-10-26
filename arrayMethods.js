export default () => {
  const animals = [
    { id: 1, name: 'Red-winged hawk' },
    { id: 2, name: 'Southern tamandua' },
    { id: 3, name: 'Pig-tailed macaque' },
    { id: 4, name: 'Fox, north american red' },
    { id: 5, name: 'Brush-tailed phascogale' },
    { id: 6, name: 'African bush squirrel' },
    { id: 7, name: 'Genet, common' },
    { id: 8, name: 'Godwit, hudsonian' },
    { id: 9, name: 'Grey fox' },
    { id: 10, name: 'Dove, emerald-spotted wood' }
  ]

  // a simple iteration
  animals.forEach(animal => {
    console.log(`Beware of the ${animal.name.toLowerCase()}!`)
  })
  // Beware of the red-winged hawk!
  // Beware of the southern tamandua!
  // Beware of the pig-tailed macaque!
  // Beware of the fox, north american red!
  // Beware of the brush-tailed phascogale!
  // Beware of the african bush squirrel!
  // Beware of the genet, common!
  // Beware of the godwit, hudsonian!
  // Beware of the grey fox!
  // Beware of the dove, emerald-spotted wood!

  // Map is usefull to get an array of same length contaning values differents but inherited from an array
  const smallAnimals = animals.map(({ name }) => name.toLowerCase())
  console.log(
    `I just saw a ${smallAnimals
      .slice(0, -1)
      .join(', a ')} and a ${smallAnimals.slice(-1)}!`
  )
  // I just saw a red-winged hawk, a southern tamandua, a pig-tailed macaque, a fox, north american red, a brush-tailed phascogale, a african bush squirrel, a genet, common, a godwit, hudsonian, a grey fox and a dove, emerald-spotted wood!

  // Filter returns a filtered array (pretty obvious)
  const redAnimals = animals.filter(({ name }) =>
    name.toLowerCase().includes('red')
  )
  console.log(redAnimals)

  // Reduce is used to get value of any type from an array
  // It can be given a second argument which is the value of acc on the first iteration, if not provided, the first item of the array will be used
  const longuestNameAnimal = animals.reduce(
    (longuestName, { name }) =>
      (name.length > longuestName.length ? name : longuestName),
    ''
  )
  console.log(`The animal with the longuest name is the ${longuestNameAnimal}`) // The animal with the longuest name is the Dove, emerald-spotted wood
}
