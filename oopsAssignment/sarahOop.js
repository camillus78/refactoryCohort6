//Identify 7 objects and initialize atleast 2 instancesusing the constructor new

// Oobject one

function fish (length, weight, owner, lakeName){
    this.length = length;
    this.weight = weight;
    this.owner = owner;
    this.lakeName = lakeName;
    this.swim = function() {
        console.log("This fish flaps when out of water");
    }
}
var fish1 = new fish ("20cm", "tilapia", "0.5kg", "sarah", "Lake Kyoga");
var fish2 = new fish ("2m", "New Perch", "110 kg", "Catherine", "Lake Kyoga")
fish1.swim();
console.log(fish1);
fish2.swim();
console.log(fish2);

// Object two

function bag (color, label, owner, price, size, material){
    this.color = color;
    this.label = label;
    this.owner = owner;
    this.price = price;
    this.size = size;
    this.material = material
    this.handle = function() {
        console.log("Ladies handle bags");
    }
}
var bag1 = new bag("brown", "Versace", "Sarah", "2900 dollars", "medium", "Crocodile skin");
var bag2 = new bag("red", "Gucci", "Rita", "2650 dollars", "small", "leather")
bag1.handle();
console.log(bag1);
bag2.handle();
console.log(bag2);

// Object three

function cup (color, type, owner, price, size){
    this.color = color;
    this.type = type;
    this.owner = owner;
    this.price = price;
    this.size = size;
    this.drink = function() {
        console.log("Humans drink coffee with cups");
    }
}
var cup1 = new cup("White", "Ceramic", "Mark", "5000ugx", "large");
var cup2 = new cup("Grey", "Melamine", "Peter", "3000ugx", "medium");
cup1.drink();
console.log(cup1);
cup2.drink();
console.log(cup2);


// Object four

function shoe(size, color, owner, price, material, label) {
    this.size = size;
    this.color = color;
    this.owner = owner;
    this.price = price;
    this.material = material;
    this.label = label;
    this.wear = function() {
        console.log("Ladies love to wear shoes");
    }
}
var shoe1 = new shoe("7.5", "pink", "Racheal", "955 dollars", "Leather", "Fendi");
var shoe2 = new shoe("9", "peach", "Ruth", "700 dollars", "Leather", "Louis Vuiton");
shoe1.wear();
console.log(shoe1);
shoe2.wear();
console.log(shoe2);


// Object five

function phone(size, color, owner, price, type) {
    this.size = size;
    this.color = color;
    this.owner = owner;
    this.price = price;
    this.type = type;
    this.ring = function() {
        console.log("Phones ring when called");
    }
}
var phone1 = new phone("6.46 inches", "grey", "Peace", "1200 pounds", "iphone 11 pro max");
var phone2 = new phone("6.7 inches", "white", "Patience", "300 dollars", "samsung s20");
phone1.ring();
console.log(phone1);
phone2.ring();
console.log(phone2);


// Object six

function cat(name, weight, color, owner) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.owner = owner;   
    this.cry = function() {
        console.log("cats cry everytime");
    }
}
var cat1 = new cat("blacky", "5 kg", "Black", "Isaac");
var cat2 = new cat("princess", "8 kg", "gray", "Daniel");
cat1.cry();
console.log(cat1);
cat2.cry();
console.log(cat2);

// Object seven

function flower(type, color, owner, price, scent) {
    this.type = type;
    this.color = color;
    this.owner = owner;
    this.price = price;
    this.scent = scent;
    this.gift = function() {
        console.log("Humans love flowers as gifts");
    }
}
var flower1 = new flower("tulip", "orange", "Pinky", "100 dollars", "honey");
var flower2 = new flower("rose", "red", "Rosey", "90 dollars", "lemon");
flower1.gift();
console.log(flower1);
flower2.gift();
console.log(flower2);