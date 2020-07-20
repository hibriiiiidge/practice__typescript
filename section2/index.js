var hasValue = true;
var count = 10;
// count = 'hello'
var float = 3.14;
var minus = -10;
var single = 'hello';
var hello;
hello = 'hello';
var person = {
    name: 'Jack',
    age: 22
};
var person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 22
};
// array
var fruits = ['Apple', 'Banana', 'Grape'];
// tuple
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.GRANDE);
var anything = true;
anything = 'hello';
var banana = 'banana';
banana = anything;
// any の型は banana という String にも入れれる
var unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
var unionTypes = [21, 'hello'];
var apple = 'apple';
// リテラル型 const であることがポイント
var lemon = 'lemon';
var clothSize = "small";
// enum みたいに使える
var cloth = {
    color: "white",
    size: clothSize
};
cloth.size = 'large';
function add2(num1, num2) {
    return num1 + num2;
}
function sayHello2() {
    console.log('Hello!');
    return;
}
// return がある場合のみ undefined が使える
function sayHello3() {
    console.log("Hello!");
    return;
}
console.log(sayHello2());
// 関数の型注釈は矢印 =>
// 関数の型定義はコロン :
var anotherAdd = add2;
// 無名関数
var anotherAdd2 = function (num1, num2) {
    return num1 * num2;
};
var anotherAdd3 = function (num1, num2) {
    return num1 * num2;
};
var anotherAdd4 = function (num1, num2) {
    return num1 * num2;
};
// アロー関数
// 1
var doubleNumber1 = function (num) { return num * 2; };
var doubleNumber1_1 = function (num) {
    return num * 2;
};
// 2
var doubleNumber2 = function (num) { return num * 2; };
// 3
var doubleNumber3 = function (num) { return num * 2; };
// callback
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// callback が void => 何も返さない
function doubleAndHandle2(num, cb) {
    var doubleNum = cb(num * 2);
    // if(doubleNum)
    console.log(doubleNum);
}
doubleAndHandle2(21, function (doubleNum) {
    return doubleNum;
});
// unknown
var unknownInput;
var anyInput;
var text;
// text = unknownInput;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never
function error(message) {
    throw new Error(message);
}
// void は undefined を返す
