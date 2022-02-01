interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
};

class Person implements Greetable {
  name: string;

  constructor(n: string, public age: number) {
    this.name = n;
  }

  greet(phrase: string): void {
      console.log(phrase, this.name);
  }
}

let john: Greetable;
john = new Person('John', 20);

john.greet('Hi there - I\m John!');
// john.name = 'Janet';
console.log(john);
