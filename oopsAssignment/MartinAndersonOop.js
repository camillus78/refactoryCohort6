function farmer(name, crop, gardenSize, income, pests) {
    this.name = name;
    this.crop = crop;
    this.gardenSize = gardenSize;
    this.income = income;
    this.spray = function () {
        console.log("pests killed");
    this.pests = pests;
    
    }

}

var Muleme = new farmer("Muleme paul", "beans", "40hec", "30m", "bean weevels",)
var Kawadwa = new farmer("Kawadwa Simon", "rice", "6hec", "8m", "rice skipper")
Muleme.spray();


function fruit(type, shape,colour, status) {
    this.type =type;
    this.shape =shape;
    this.colour =colour;
    this.status = status;
    this.sweetness = function () {
        console.log("Awwww!!!");
    }

}

var mango= new fruit("Mango", "Oval", "yellow", "ripe")
var apple = new fruit("apple", "circle", "green", "fresh")
mango.sweetness();


function friend(name, age, skinColor, height, job) {
    this.name = name;
    this.age = age;
    this.skinColor = skinColor;
    this.height = height;
    this.job = job;
    this.meet = function () {
        console.log("Any gossip bro?!");
    }

}

var Hanington = new friend("Sserunkuma Hanington", 22, "brown", "4ft", "student")
var Moris = new friend("Ssekandi Moris", 23, "chocolate", "6ft", "Businessman")
Moris.meet();



function shoe(type,color, size, gender) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.gender = gender;
    this.jump = function () {
        console.log("do-do-do");
    }

}

var addidas= new shoe("sneakers", "white", 41, "Male")
var nike = new shoe("casual", "black", "34", "Female")
addidas.jump();



function bag(size, manufacturer, handle,) {
    this.size=size;         
    this.manufacturer= manufacturer;
    this.handle=handle;
    this.holdBag = function () {
        console.log("Eeeeh so heavy");
    }

}

var schoolBag = new bag("21inch", "Japan", "back")
var handBag = new bag("19inch", "China", "hands")
handBag.holdBag();


function goat(breed, variety, color, size, weight) {
    this.breed = breed;
    this.variety = variety;
    this.color = color;
    this.size= size;
    this.weight = weight;

    this.sound = function () {
        console.log("Mee-Mee");
    }

}

var hegoat = new goat("Local", "black & white", "white", "medium", "40kg")
var sheGoat = new goat("excotic", "white", "white", "big", "60kg")
hegoat.sound();



function book(name, subject, color) {
    this.name = name;
    this.subject =subject;
    this.color = color;
    this.read = function () {
        console.log("passing through book content");
    }

}

var Romeo_Juliet = new book("Romeo and Juliet", "Literature", "red")
var bible = new book("holy bible", "CRE", "brown")
bible.read();
