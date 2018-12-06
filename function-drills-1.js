function getYearofBirth(age) {
  if (age < 0) throw new Error('Age can not be negative');
  return 2018 - age;
}

function createGreeting(name, age) {
  if (!name || !age) throw new Error('Arguments not valid');
  if (typeof name !== 'string') throw new TypeError('Argument is not a string');
  if (typeof age !== 'number') throw new TypeError('Argument is NaN');
  const yearOfBirth = getYearofBirth(age);
  return `Hi, my name is ${name} and I'm ${age}. I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Jordan', 26);
} catch (e) {
  console.log(e);
}
