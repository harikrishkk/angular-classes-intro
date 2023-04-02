## Checklist ( Javascript + es6 )

These are the essentials that help you grow as a JS developer
The fundamentals, concepts, that help you crack interviews & tackle real project code issues.
Open stackblitz and try doing examples.

- let, const, var differences
- Scopes ( global, function, block )
- Data types: ( primitives, reference types )
- Arrow functions. Syntax, "this" problem
- Arrow functions doesnt have their own this 
- variable hoisting, function hoisting.
- Template literals
- Default function parameters
- Spread & rest operator
- Destructuring
- Methods provided by es6 
- Classes ( blueprint to create JS objects )

```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
```
- Promises

```
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('data from backend');
    reject('oops, something isnt right');
  }, 3000);
});

myPromise.then((data) => console.log(data)).catch((err) => console.log(err));
```

### Typescript 

- TypeScript is a syntactic superset of JavaScript which adds static typing.
- adds syntax on top of JavaScript

### Points to learn 

- assigning types
- Implicit / explicit type assigning
- issues with using "any"
- tuples
- Interface, extending interface
- setting optional properties 
- enum 
- union
- typescript classes with visibility ( public, private, protected )
- abstract classes
- generics (Generics with functions help make more generalized methods which more accurately represent the types used and returned.)

```
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

or 

class Person {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}
      
const person = new Person("Jane");
```

- implementing interfaces 

```
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10,20);
```
- using inheritance extends

```
interface Shape {
  getArea: () => number;
}
      
class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
      
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());
```
