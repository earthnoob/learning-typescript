interface Greetable {
  name: string;

  greet(phrase: string): void;
};

class Person implements Greetable {
  constructor(public name: string, public age: number) {
    this.name = name;
  }

  greet(phrase: string): void {
      console.log(phrase, this.name);
  }
}

let john = new Person('John', 20);
console.log(john);
