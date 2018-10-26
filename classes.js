export default () => {
  class Animal {
    static isAnAnimal (maybeAnAnimal) {
      return '_animal' in maybeAnAnimal && Boolean(maybeAnAnimal._animal)
    }

    // initialisation of class properties
    _animal = true
    type = 'unknown'

    constructor ({ name = 'unnamed' }) {
      this.name = name
    }

    shout () {
      const { name } = this
      console.log(`Hey! I'm ${this.name}`)
    }

    // Allows to automatically binds this on eat method
    eat = () => {
      console.log(`${this.name} just ate.`)
    }
  }

  class Dog extends Animal {
    constructor (options) {
      super(options)
      this.type = 'dog'
    }

    shout () {
      console.log('Waf!')
      super.shout() // calls the method from the parent class
    }
  }

  const aSadPet = new Animal({})
  console.log(
    `Is ${aSadPet.name} an animal? ${Animal.isAnAnimal(aSadPet) ? `yes it's a ${aSadPet.type}` : 'no'}`
  ) // Is unnamed an animal? yes it's a unknown
  aSadPet.shout() // Hey! I'm unnamed
  aSadPet.eat() // unnamed just ate.

  const fluffykins = new Dog({ name: 'Fluffykins' })
  console.log(
    `Is ${fluffykins.name} an animal? ${Animal.isAnAnimal(fluffykins) ? `yes it's a ${fluffykins.type}` : 'no'}`
  ) // Is Fluffykins an animal? yes it's a dog
  fluffykins.shout()
  // Waf!
  // Hey! I'm Fluffykins

  setTimeout(fluffykins.eat)
  // Fluffykins just ate.
}
