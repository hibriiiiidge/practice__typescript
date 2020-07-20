let hasValue = true;
let count: number = 10;
// count = 'hello'
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

let anything: any = true;
anything = 'hello';

let banana = 'banana';
banana = anything;
// any の型は banana という String にも入れれる

let unionType: number | string = 10;
// unionType.toUpperCase();
unionType = 'hello'
unionType.toUpperCase();
let unionTypes: (number | string)[] = [21, 'hello']


const apple = 'apple';
// リテラル型 const であることがポイント
let lemon = 'lemon';

type ClothSize = 'small' | 'medium' | 'large'

let clothSize: ClothSize = "small";
// enum みたいに使える

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: clothSize,
};

cloth.size = 'large'

function add2(num1: number, num2: number): number {
  return num1 + num2;
}

function sayHello2(): void {
  console.log('Hello!');
  return;
}

// return がある場合のみ undefined が使える
function sayHello3(): undefined {
  console.log("Hello!");
  return;
}

console.log(sayHello2());

// 関数の型注釈は矢印 =>
// 関数の型定義はコロン :
const anotherAdd: (n1: number, n2: number) => number = add2;

// 無名関数
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 * num2;
}

const anotherAdd3 = function (num1: number, num2: number): number {
  return num1 * num2;
}

const anotherAdd4: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 * num2;
}


// アロー関数
// 1
const doubleNumber1 = num => num * 2
const doubleNumber1_1 = function (num) {
  return num * 2;
}

// 2
const doubleNumber2 = (num: number): number => num * 2;


// 3
const doubleNumber3: (num: number) => number = num => num * 2;

// callback
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum;
});

// callback が void => 何も返さない
function doubleAndHandle2(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  // if(doubleNum)
  console.log(doubleNum);
}
doubleAndHandle2(21, (doubleNum) => {
  return doubleNum;
});


// unknown
let unknownInput: unknown;
let anyInput: any;
let text: string;

// text = unknownInput;
text = anyInput;

if (typeof unknownInput === 'string') {
  text = unknownInput;
}


// never
function error(message: string): never {
  throw new Error(message);
}
// void は undefined を返す
