var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // private はクラス内のみ、継承先では使えない
    // protected はクラスと継承先で使える
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello, My name is " + this.name + ", I am " + this.age + " years old");
        this.explainJob();
    };
    Person.species = "Homo sapiens";
    return Person;
}());
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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error("this is no subject");
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error("this is no subject");
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Daniel", 39, "English");
        return Teacher.instance;
    };
    Teacher.prototype.explainJob = function () {
        console.log("I am teacher and I teach " + this.subject);
    };
    return Teacher;
}(Person));
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
var teacher = Teacher.getInstance();
var teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
