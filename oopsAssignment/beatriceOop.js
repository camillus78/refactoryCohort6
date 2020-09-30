//1. Cars
function car(make, model, year, wheels, topSpeed, engineCylinders, gearSpeeds) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.engineCylinders = engineCylinders;
    this.gearSpeeds = gearSpeeds;

    this.engineStart = function () {
        console.log("Vroom Vroom");
    }

}

var car1 = new car ("Ford", "Mustang", "1969", "4", "180","4","5")
var car2 = new car("Toyota", "Land Cruiser", "2010", "4", "260","8","8")

console.log(car1.wheels);
console.log(car2.model);

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

var restaurant1 = new restaurant("Olives", "Kamwokya", "2010", "18", "InterContinental","20","8")
var restaurant2 = new restaurant("Javas", "Ntinda", "2015", "43", "Indian","50","7")

console.log(restaurant1.cuisine);
console.log(restaurant2.hoursOpen);

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

