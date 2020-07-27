// const human: {
//   name: string,
//   age: number
// } = {
//   name: "Jack",
//   age: 30
// }
var Developer = /** @class */ (function () {
    function Developer(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.greeting = function (message) {
        console.log("hello!!");
    };
    return Developer;
}());
// abstract と implements
// implements は実装されていない
// abstract は実装されている
