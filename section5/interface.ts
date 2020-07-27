// const human: {
//   name: string,
//   age: number
// } = {
//   name: "Jack",
//   age: 30
// }

// type Human = {
//   name: string,
//   age: number
// }

// const human: Human = {
//   name: "Jack",
//   age: 30
// }

// let developer: Human;

// interface Human {
//   name: string,
//   age: number
// }

// const human: Human = {
//   name: "Jack",
//   age: 30
// }

// let developer: Human;

// type と interface
// interface はオブジェクトのみを扱うので分かりやすい

// type は以下のようにかける
// type Hoge = {
//   name: string,
//   age: number
// } | string


// interface Human {
//   name: string;
//   age: number;
//   // greeting: (message: string) => void;
//   greeting(message: string): void;
// }

// const human = {
//   name: "Jack",
//   age: 30,
//   greeting(message: string) {
//     console.log(message);
//   }
// }

// let tmpFunc: (message: string) => void; かける
// let tmpFunc(message: string): void; かけない

// type addFunc = (num1: number, num2: number) => number;

// section 68 関数の型
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  name?: string;
  nickName?: string;
}

const nameable: Nameable = {
  nickName: "N"
}

// section 64
interface Human extends Nameable {
  age: number;
  // greeting: (message: string) => void;
  greeting(message: string): void;
}

// type Nameable = {
//   name: string;
// }

// // section 64
// type Human {
//   name: string;
//   age: number;
//   // greeting: (message: string) => void;
//   greeting(message: string): void;
// } & Nameable
// ↑ はできる


class Developer implements Human {
  name?: string
  constructor(public age: number, public experience: number) {
  }
  greeting(message?: string) {
    console.log(message);
  }
}

// abstract と implements
// implements は実装されていない
// implements は object が生成する形を表している
// abstract は実装されている

const tmpDeveloper = {
  name: "Jose",
  age: 38,
  experience: 6,
  greeting(message: string) {
    console.log(message);
  }
}
const user2: Human = tmpDeveloper;

// const user: Human = new Developer("Jose", 38, 5);
// Human の型が満たされていれば OK (experience がなくても良い)

// ↓ はNG,
// 直接書くとNG
// const user3: Human = {
//   name: "Jose",
//   age: 38,
//   experience: 6,
//   greeting(message: string) {
//     console.log(message);
//   },
// };

// const user3 = new Developer("Jose", 38, 5);
// user3.name = "hoge";


const tmpUser = new Developer(38, 2);
tmpUser.greeting();
