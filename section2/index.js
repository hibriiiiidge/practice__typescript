var hasValue = true;
var count = 10;
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
