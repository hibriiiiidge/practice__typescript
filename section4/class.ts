abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  // private はクラス内のみ、継承先では使えない
  // protected はクラスと継承先で使える
  constructor(public readonly name: string, protected age: number) {
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello, My name is ${this.name}, I am ${this.age} years old`)
    this.explainJob();
  }
  abstract explainJob(): void;
}
// section 51
// let person2: Person;
// const quill = new Person('Quill', 38);
// quill.incrementAge();
// // quill.age = 45;
// quill.greeting();

// section 50
// let person2: Person;
// const quill = new Person('Quill');
// quill.greeting();
// const anotherQuill = {
//   name: 'aaaa',
//   greeting: quill.greeting
// }
// anotherQuill.greeting();

class Teacher extends Person {
  private static instance: Teacher;

  get subject() {
    if (!this._subject) {
      throw new Error("this is no subject")
    }
    return this._subject;
  }

  set subject(value) {
    if (!value) {
      throw new Error("this is no subject")
    }
    this._subject = value;
  }

  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Daniel", 39, "English")
    return Teacher.instance
  }

  explainJob() {
    console.log(`I am teacher and I teach ${this.subject}`);
  }
}
// section 56
// const teacher = new Teacher('Jack', 29, 'Math');
// teacher.greeting();
// teacher.subject = "hoge";
// console.log(teacher.subject);

// section 57
// console.log(Person.species);
// console.log(Person.isAdult(18));

// section 58
// const teacher = new Teacher('Jack', 29, 'Math')
// teacher.greeting();

// section 59
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
