var jose = {
    name: 'Jose',
    role: 'frontend',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadoworker) {
    console.log(nomadoworker.name);
    if ('role' in nomadoworker) {
        console.log(nomadoworker.role);
    }
    if ('follower' in nomadoworker) {
        console.log(nomadoworker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.speak = function () {
        console.log('bow-bow');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.speak = function () {
        console.log('tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if ('fly' in pet) {
        pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
havePet({ speak: function () { console.log('hello'); }, fly: function () { console.log('not fly'); } });
