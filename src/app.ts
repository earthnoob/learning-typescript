// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
};

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
};

interface Walkable {
  walk(): void;
};

interface Greetable extends Named, Walkable {
  greet(phrase: string): void;
};

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string,) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase, this.name);
    } else {
      console.log('Hi!');
    }
  }

  walk(): void {
    console.log("I'm walking.");
  }
}

let john: Greetable;
john = new Person();

john.greet('Hi there - I\m John!');
john.walk();
// john.name = 'Janet';
console.log(john);
