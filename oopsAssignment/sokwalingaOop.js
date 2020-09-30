/**
Nice work , may be some comments on instatiating is needed.
*/


//My first object yamahaMotorcycle and it is of class Motorcycle.
function yamahaMotorcycle(model, yearOfMake, manufacturer, power, ignition, transmission, engineCapacity) {
    this.model = model;
    this.yearOfMake = yearOfMake;
    this.manufacturer = manufacturer;
    this.power = power;
    this.ignition = ignition;
    this.transmission = transmission;
    this.engineCapacity = engineCapacity;
    this.country = function () {
        console.log("This motorcycle company is based in Japan.");
    }
    this.companyDetails = function () {
        console.log("This company manufactures motorcycles and other motorized products");
    }
}
var yamahaMotorcycle1 = new yamahaMotorcycle("Yamaha YA-1", 1955, "Nippon Gakki Co., Ltd.", "4.1 kW at 5000 rpm", "Dynamo", "Manual 4-speed", "123 cm3");
var yamahaMotorcycle2 = new yamahaMotorcycle("Yamaha XS 650", 1979, "Yamaha Motor Company", "40 kW", "Contact point-pre 1980 TCI-post 1980", "Manual, 5-Speed", "654 cc");
var yamahaMotorcycle3 = new yamahaMotorcycle("Yamaha XSR700", 2016, "MBK Industrie, Rouvroy, France", "55 kW", "Dynamo", "Manual 6-speed", "2-cylinder liquid-cooled four-stroke engine");

console.log(yamahaMotorcycle2.engineCapacity);
yamahaMotorcycle2.companyDetails();
yamahaMotorcycle1.country();


//My second object cat and it is of class animal.

function cat(bodyColor, breed, name, eyeColor, owner, size, weight) {
    this.bodyColor = bodyColor;
    this.breed = breed;
    this.name = name;
    this.eyeColor = eyeColor;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.cry = function () {
        console.log("Meow");
    }
}
var cat1 = new cat("White", "Persian Cat", "Sophy", "blue", "Sam", "Small", "3.5 kg");
var cat2 = new cat("Black", "‎Abyssinian Cat", "Tom", "green", "Jouve", "Medium", "4.5 kg");

console.log(cat1.breed);
cat2.cry();

//Third object Lenovo laptop and it is of class laptops.

function lenovoLaptop(displaySize, processor, weight, displayResolution, operatingSystem, graphics, touchScreen, releaseDate) {
    this.displaySize = displaySize;
    this.processor = processor;
    this.weight = weight;
    this.displayResolution = displayResolution;
    this.operatingSystem = operatingSystem;
    this.graphics = graphics;
    this.touchScreen = touchScreen;
    this.releaseDate = releaseDate;
    this.comment = function () {
        return "These are grand sons and grand daughters of Bill Gates.";
    }
}

var lenovoLegion7i = new lenovoLaptop("15.60-inch", "Core i5", "2.10 kg", "1920x1080 pixels", "Windows 10", "Nvidia GeForce GTX 1660 Ti", "No", "18th August 2020");
var lenovoThinkBook15p = new lenovoLaptop("15.60-inch", "Intel Core and AMD Ryzen 4000", "1.90 kg", "1920x1080 pixels", "Windows 10 Professional", "Nvidia", "None", "29th September 2020");

console.log(lenovoThinkBook15p.displayResolution);
console.log(lenovoLegion7i.comment());


//Fourth object: country musician of class: musicians.

function countryMusician(birthName, countryOfOrigin, dateOfBirth, spouse, numberOfAlbums, yearsActive, instruments) {
    this.birthName = birthName;
    this.countryOfOrigin = countryOfOrigin;
    this.dateOfBirth = dateOfBirth;
    this.spouse = spouse;
    this.numberOfAlbums = numberOfAlbums;
    this.yearsActive = yearsActive;
    this.instruments = instruments;
    this.notes = function () {
        return "Country music is still the best!"
    }
}

let allanJackson = new countryMusician("Alan Eugene Jackson", "USA", "October 17, 1958", "Denise Jackson", 21, "1983–2020", "Vocals and Acoustic guitar");
var blakeShelton = new countryMusician("Blake Tollison Shelton", "USA", "June 18, 1976", "Gwen Stefani", "10 million records sold", "2001–present", "")
console.log(allanJackson.notes());
console.log(blakeShelton);


//Fifth object: fish, class: animal

function fish(name, weight, habitat, food, prey, modeOfBirth, gestationPeriod) {
    this.name = name;
    this.weight = weight;
    this.habitat = habitat;
    this.food = food;
    this.prey = prey;
    this.modeOfBirth = modeOfBirth;
    this.gestationPeriod = gestationPeriod;
    this.locomotion = function () {
        console.log("Fish swim.")
    }
}


let fish1 = new fish("dwarf lanternsharkk", "0.5 ounces ", "Caribean sea", "krill", "bigger sharks", "eggs", "Not specified");
let fish2 = new fish("Tilapia", "2.4kg", "Fresh water lake", "aquatic plants", "humans", "eggs", "4-5 weeks");

console.log(fish1.gestationPeriod);


// Sixth object: goat, class: animal

function goat(bodyColor, breed, name, eyeColor, owner, size, weight) {
    this.bodyColor = bodyColor;
    this.breed = breed;
    this.name = name;
    this.eyeColor = eyeColor;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.sound = function () {
        console.log("Meee");
    }
}
var goat1 = new goat("White", "Boer goat", "Big Ben", "grey", "Sam", "Small", "30 kg");
var goat2 = new goat("Black", "‎Anglo-Nubian goat", "Blackz", "brown", "Jouve", "big", "140 kg");

console.log(goat1.breed);
goat2.sound();

//Seventh object:country class: geographical region

function country(name, continent, population, yearOfIndependence, mainEconomicActivity, nationalLanguage, currency) {
    this.name = name;
    this.continent = continent;
    this.population = population;
    this.yearOfIndependence = yearOfIndependence;
    this.mainEconomicActivity = mainEconomicActivity;
    this.nationalLanguage = nationalLanguage;
    this.currency = currency;
    this.definition = function () {
        console.log("A country is simply a defined geographical area.")
    }
}


var country1 = new country("Uganda", "Africa", 42729036, 1962, "Agriculture", "Swahili", "Ugx");
var country2 = new country("Kenya", "Africa", 52000000, 1961, "Agriculture", "Kiswahili", "Ksh");
var country3 = new country("USA", "North America", 328239523, 1776, "Mining", "American English", "USD");

console.log(country1);
console.log(country3.yearOfIndependence);

country2.definition();
