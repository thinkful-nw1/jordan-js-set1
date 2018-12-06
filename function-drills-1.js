function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Jordan', 26);
console.log(greeting1);
