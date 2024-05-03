interface Person {
  name: String,
  age: number
}

export function greet(person: Person): String{

  return ("Your age is" + person.age )
}