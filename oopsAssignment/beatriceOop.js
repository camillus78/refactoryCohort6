?**
    Please include comments and dont use plural names!
    
    
    */





//1. chocolates
function chocolate(name, type, countryOfOrigin, flavor, manufacturyDate, expiryDate, price) {
    this.name = name;
    this.type = type;
    this.countryOfOrigin = countryOfOrigin;
    this.flavor = flavor;
    this.manufacturyDate = manufacturyDate;
    this.expiryDate = expiryDate;
    this.price = price;
    this.eat = function () {
        console.log("Munch Munch!!! 😋 😋 😋");
    }

}

var chocolate1 = new chocolate("Rum & Raisins", "Cadbury", "South Africa", "Brown", "19/08/2020", "19/01/2021", "$2.5");
var chocolate1 = new chocolate("White with Almond Milk", "Toblerone", "Switzerland", "White", "19/08/2020", "19/01/2021", "$5.99");


//2. Restaurants
function restaurant(name, location, year, customerCapacity, cuisine, parkingSpace, hoursOpen) {
    this.name = name;
    this.location = location;
    this.year = year;
    this.customerCapacity = customerCapacity;
    this.cuisine = cuisine;
    this.parkingSpace = parkingSpace;
    this.hoursOpen = hoursOpen;
    this.service = function () {
        console.log("The main services provided are food and beverages");
    }
}

var restaurant1 = new restaurant("Olives", "Kamwokya", "2010", 18, "InterContinental", 20, 8);
var restaurant2 = new restaurant("Javas", "Ntinda", "2015", 43, "Indian", 78, 7);


//3 Pets
function pets(name, color, age, sound, weight, legs, breed) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.sound = sound;
    this.weight = weight;
    this.legs = legs;
    this.breed = breed;
    this.makeSound = function () {
        console.log(this.sound);
    }
}

var dog = new pets("Milo", "White", 3, "Bark", 9, 4, "Smooth Fox Terrier");
var cat = new pets("Dumb Dumb", "Brown", 1, "Meow", 3, 4, "Persian");


//4 Facebook Profile
function FaceBookProfile(name, friends, messages, pokes, statusUpdates, pictureUploads, totalLikes) {
    this.name = name;
    this.friends = friends;
    this.messages = messages;
    this.pokes = pokes;
    this.statusUpdates = statusUpdates;
    this.pictureUploads = pictureUploads;
    this.totalLikes = totalLikes;
    this.addFriend = function (number) {
        this.friends += number;
    }

}

var profile1 = new FaceBookProfile("Agnes", 5000, "Hey!", 12, 18, 300, 1000);
var profile2 = new FaceBookProfile("Mark", 30, "💥💥💥💥", 1, 0, 10, 2);




//5 Bank Account
function bankAccount(name, balance, openingDate, interestRate, expiryDate, branch, accountType) {
    this.name = name;
    this.balance = balance;
    this.openingDate = openingDate;
    this.interestRate = interestRate;
    this.expiryDate = expiryDate;
    this.branch = branch;
    this.accountType = accountType;
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}

var account1 = new bankAccount("John Doe", 1200, "12/09/2001", 1.8, "12/09/2011", "Colorado Springs", "Fixed Deposit");
var account2 = new bankAccount("Jane Doe", 5000, "17/07/2010", 1.8, "17/07/2020", "Colorado Springs", "Current");

//6 Mobile Phones
function phone(name, Brand, screenSize, memory, processor, storage, camera) {
    this.name = name;
    this.Brand = Brand;
    this.screenSize = screenSize;
    this.memory = memory;
    this.processor = processor;
    this.storage = storage;
    this.camera = camera;
    this.takePicture = function () {
        console.log("Click Cluck!! Picture taken");
    }
}

var iPhone = new phone("iPhone 11 Pro Max", "iPhone", 6.3, "4 GB", "A13 Bionic", "256 GB", "12 MP with ois");
var samsung = new phone("Galaxy NOte 20 Ultra", "Samsung", 6.9, "12 GB", "Snapdragon 855G", "512 GB", "128 MP with ois");


//7 Appliances
function Appliance(name, Brand, price, powerRating, color, plugType, isSmart) {
    this.name = name;
    this.Brand = Brand;
    this.price = price;
    this.powerRating = powerRating;
    this.color = color;
    this.plugType = plugType;
    this.isSmart = isSmart;
    this.turnOn = function () {
        if (this.isSmart) {
            console.log("Worry Not. Your " + this.name + " has already been turned on in your Google Home Routine");
        } else {
            console.log("turning ON " + this.name);
        }
    }
}

var fridge = new Appliance("LG SuperCool H670", "LG", "$2000", 1200, "Silver", "EU", true);
var microwaveOven = new Appliance("Hicense Heat 360", "Hicense", "$187", 1000, "Matt White", "US", false);
