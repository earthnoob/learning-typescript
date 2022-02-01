// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
};

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
};

interface Walkable {
  walk(): void;
};

interface Greetable extends Named, Walkable {
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

  walk(): void {
    console.log("I'm walking.");
  }
}

let john: Greetable;
john = new Person('John', 20);

john.greet('Hi there - I\m John!');
john.walk();
// john.name = 'Janet';
console.log(john);
