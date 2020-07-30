interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const jose: EngineerBlogger = {
  name: 'Jose',
  role: 'frontend',
  follower: 1000
}

// type tmp = string & number;
// never

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;


// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

const upperHello = toUpperCase('Hello');
// const upperHello = toUpperCase(22);

type NomadoWorker = Engineer | Blogger;

function describeProfile(nomadoworker: NomadoWorker) {
  console.log(nomadoworker.name);
  if ('role' in nomadoworker) {
    console.log(nomadoworker.role);
  }

  if ('follower' in nomadoworker) {
    console.log(nomadoworker.follower);
  }
}


class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-bow');
  }
}


class Bird {
  kind: "bird" = "bird";

  speak() {
    console.log("tweet");
  }

  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  // if ('fly' in pet) {
  //   pet.fly();
  // }
  // if (pet instanceof Bird) {
  //   pet.fly();
  // }
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
}

havePet(new Bird());
// havePet({ speak() { console.log('hello') }, fly() { console.log('not fly') } });

// 型アサーション
// 手動で型を上書きする

// HTMLElement
// nullable
// JSX との相性が悪い
// const input = <HTMLInputElement>document.getElementById("input");
// const input = document.getElementById("input") as HTMLInputElement; // JSX のときはこっちでかく
// input.value = 'initial input value';

// (document.getElementById("input") as HTMLInputElement).value = "initial input value";

// non null assertion operator
// const input = document.getElementById('input')!;

// インデックスシグネチャー
// 基本的には使わない
interface Designer {
  name: string;
  [index: string]: string;
}

// interface Designer {
//   name: string;
//   age: number とは出来ない
//   [index: string]: string;
// }

const designer: Designer = {
  name: 'Jack',
  role: 'hoge',
}

// console.log(designer.noError);


// optional chaining
interface DounloadedData {
  id: number;
  user: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const downloadedData: DounloadedData = {
  id: 1
}

console.log(downloadedData.user?.name?.first);


// nullish coalescing
const userData = downloadedData.user ?? "no-user"
// const userData = downloadedData.user || "no-user";
// ?? と || の違いは
// ?? null と undefined の時にだけ右辺がセットされる
// || は 0 や空文字でも右辺がセットされる

type id = DounloadedData["id"]
// type id = DounloadedData["id" | "user"]
type user = DounloadedData["user"]["name"]


let target: string = "hello";
let source: "hello" = "hello";
target = source;

// ↓ はいけない
// let target2: "hello" = "hello";
// let source2: string = "hello";
// target2 = source2;


enum Color {
  RED,
  BLUE
}

let target3 = Color.RED;
let source3 = 100;
target3 = source3;
// number と enum は相互に入れ替えが可能
