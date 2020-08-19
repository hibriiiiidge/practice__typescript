// ジェネリクス
// 型を引数で受け取ることができる
// function copy<T>(value: T): T {
//   return value;
// }

// console.log(copy<string>("hello"));

function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}

console.log(copy({ name: "Jack", age: 38 }, "name"));
// type K = keyof { name: string, age: number }

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
// stringLightDatabase.add(10);
stringLightDatabase.remove("banana");
console.log(stringLightDatabase.get());

// interface TmpDatabase<T> {
//   id: number;
//   data: T[];
// }

// const tmpDatabase: TmpDatabase<number> = {
//   id: 3,
//   data: [33]
// }


interface Todo {
  title: string;
  text: string;
}

// TS が内蔵しているジェネリクスの utility
// Partial => optional になる（?がつく）
type Todoable = Partial<Todo>
// interface Todo {
//   title?: string;
//   text?: string;
// }

type Todoable = Readonly<Todo>
// interface Todo {
//   readonly title?: string;
//   readonly text?: string;
// }

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
})

fetchData.then(data => {
  data.toUpperCase();
})

// const vegetables: string[] = ["Tomato", "Pumpkin", "Asparagus"]
const vegetables: Array<string> = ["Tomato", "Pumpkin", "Asparagus"];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;
