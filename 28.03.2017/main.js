// function Something(a, b) {
//     this.a = a;
//     this.b = b;
//     console.log(this + "constructor");

//     function mul() {
//         console.log(this + 'mul');
//         return this.a * this.b;
//     }

//     function sum() {
//         console.log(this + "sum");
//         return this.a + this.b
//     }
//     this.mulMet = mul;
//     this.sumMet = sum;
// }

// Something.prototype.fna = function() {
//     console.log(this.a + "this.a");
//     alert(this.a);
// };

// Something.prototype.fnb = function() {
//     console.log(this.b + 'this.b');
//     alert(this.b);
// };

// function AnotherThing(a, b) {
//     Something.apply(this, arguments);
//     this.sumMulMet = function() {
//         return (this.a + this.b) * this.a * this.b;
//     };
// }

// AnotherThing.prototype = create(Something.prototype);
// AnotherThing.prototype.constructor = AnotherThing;

// function create(proto) {
//     function F() {}
//     F.prototype = proto;
//     var obj = new F;
//     return obj;
// }

// Something.prototype.age = 22;
// var a = new AnotherThing(3, 2);
// var b = new Something(1, 2);
// console.log(b.mulMet);

function Div(option) {
    this.width = option.width || 200;
    this.height = option.width || 200;
    this.bgColor = option.bgColor || 'black';
    this.tagName = option.tagName || 'div';
    this.parent = option.parent || document.body;
    this.elem = document.createElement(this.tagName);
    this.elem.style.width = this.width + "px";
    this.elem.style.height = this.height + "px";
    this.elem.style.backgroundColor = this.bgColor;
    this.parent.appendChild(this.elem);

}

Div.prototype.klikle = function(fn) {
    this.elem.addEventListener('click', fn);
};

var newDiv = new Div({
    width: 500,
    height: 500,
    bgColor: 'red',
    tagName: 'div',
    parent: document.body
});

var newDiv2 = new Div({
    width: 300,
    height: 200,
    bgColor: 'blue',
    tagName: 'section',
    parent: document.body
});

newDiv.klikle(function(e) {
    this.style.border = "2px solid black";
});

newDiv2.klikle(function(e) {
    this.style.border = "4px solid gray";
});