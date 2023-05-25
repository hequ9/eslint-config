interface Person {
  name: string
  age: number
  gender: 0 | 1
}

const person: Person = {
  name: 'hequ9',
  age: 26,
  gender: 0,
}

console.log(`hi im ${ person.name } and im ${ person.age } years old`)
