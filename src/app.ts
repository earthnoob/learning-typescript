interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let john: Person;
john = {
  name: 'John',
  age: 20,
  greet(phrase) {
    console.log(phrase, this.name);
  }
};
