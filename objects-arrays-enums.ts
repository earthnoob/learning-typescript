// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string],
// } = {
//   name: 'Johnathan',
//   age: 20,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role { ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 200 };

const person = {
  name: 'Johnathan',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// Legal
// person.role.push('admin');

// Illegal
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('Is author');
}