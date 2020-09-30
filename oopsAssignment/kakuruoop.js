function apple(color, height, make, taste, type, use, shape) {
    this.color = color;
    this.height = height;
    this.make = make;
    this.taste = taste;
    this.type = type;
    this.use = use;
    this.shape = shape;
    this.sell = function() {
        console.log("this apple will be selled in church")
    }
}
var apple1 = new apple("red", "twoinches", "grown", "juicy", "fruit", "vitamins", "round");
console.log(apple1);
apple1.sell();


//second object.

function tree(height, makeup, produce, color, age, type, use) {
    this.height = height;
    this.makeup = makeup;
    this.produce = produce;
    this.color = color;
    this.age = age;
    this.type = type;
    this.use = use;
    this.cut = function() {
        console.log("this tree will be cut for its timber");
    }
}
var tree1 = new tree("thirtyfeet", "wood", "fruits", "brown", "fiffteen", "pine", "timber");
console.log(tree1.age);

//Object three.

function car(name, color, model, type, age, engine, country) {
    this.name = name;
    this.color = color;
    this.model = model;
    this.type = type;
    this.age = age;
    this.engine = engine;
    this.country = country;
    this.sell = function() {
        console.log("this car will be selled to the highest payer")
    }
}
var car1 = new car("mustang", "green", 25, "ecoboost", "fith generation", "threehundred horsepower", "america");
var car2 = new car("ferrari", "red", 2001, "spider", "nineteen years", "v eight engine", "italy");
console.log(car1.name);
console.log(car2.name);

///Object four.

function chair(type, color, capacity, fabric, price, height, shape) {
    this.type = type;
    this.color = color;
    this.capacity = capacity;
    this.fabric = fabric;
    this.price = price;
    this.height = height;
    this.shape = shape;
    this.sell = function() {
        console.log("this chair will be bought for office use")
    }
}
var chair1 = new chair("exceutive", "black", "one hundred kilos", "changable", "fourtyfive dollars", "three feet", "curvy");

var chair2 = new chair("heigh back", "brown", "one hundred pounds", "none changable", "fiftysix dollars", "two feet", "customized");
console.log(chair1.fabric);
console.log(chair2.shape);

//object five.
function phone(type, model, color, OS, RAM, battery, screen) {
    this.type = type;
    this.color = color;
    this.model = model;
    this.OS = OS;
    this.RAM = RAM;
    this.battery = battery;
    this.screen = screen;
    this.sell = function() {
        console.log("this phone will be used by high end users")
    }
}
var phone1 = new phone("LG V-thirty", "vthirty", "silver", "android", "four gigarbyte", "six thousand mAh", "pro phablet-sized display");
var phone2 = new phone("samsung M's", 2019, "black", "android", "eight gigabyte", "six thousand five hundred mAh", "HD");
console.log(phone1.screen);
console.log(phon2.battery);