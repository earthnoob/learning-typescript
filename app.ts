const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string],
} = {
  name: 'Johnathan',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
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