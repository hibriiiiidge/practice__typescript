// ジェネリクス
// 型を引数で受け取ることができる
// function copy<T>(value: T): T {
//   return value;
// }
// console.log(copy<string>("hello"));
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "Jack", age: 38 }, "name"));
// type K = keyof { name: string, age: number }
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.add(10);
stringLightDatabase.remove("banana");
console.log(stringLightDatabase.get());
