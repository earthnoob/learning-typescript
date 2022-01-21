const userName = "John";
// userName = "Johnathan";

let age = 30;
age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);
// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: string | number) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'John',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
};

const addedNumbers = add(5, 10, 18, 8.9);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name: firstName, age: personAge } = person;
console.log(firstName, personAge);
