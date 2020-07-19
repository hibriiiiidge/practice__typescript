let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let minus: number = -10;
let single: string = 'hello';
let hello: string;
hello = 'hello'


const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 22
}

const person2 = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 22,
};

// array
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

// tuple
const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.GRANDE);

