function getYearofBirth(age) {
  return 2018 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearofBirth(age);
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Jordan', 26);
console.log(greeting1);
