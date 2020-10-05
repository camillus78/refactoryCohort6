/**
Readable code but, you are missing comments in the code it would a perfect work

*/


//OBJECT EXERCISE
//Declaring a function cake with the parameters below.
function cake(name, flavor, typeOfmix, fillings, toppings, size, bakeTime){
//Initializing the property of the function with values.
    this.name = name;
    this.flavor = flavor;
    this.typeOfmix = typeOfmix;
    this.fillings = fillings;
    this.toppings = toppings;
    this.size = size;
    this.bakeTime = bakeTime;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
//Using the constructor new to initialize an instantiated object of cake with different parameters.
var cake1 = new cake("Chocolate Cake","Chocolate", "Brownie mix", "Buttercream", "Chocolate chips","9", "2 hours");
var cake2 = new cake("Vanilla Icecream Cake", "French Vanilla", "Vanilla mix","Blueberries & Cream", "Syrup","12", "3 hours");
//Print out the values for cake 1 on the console.
console.log(cake1.name);
//Display the function availableAt in the console
cake1.availableAt();


function jacket(owner, type, size, color, material, designer, design){
    this.owner = owner;
    this.type = type;
    this.size = size;
    this.color = color;
    this.material = material;
    this.designer = designer;
    this.design = design;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var jacket1 = new jacket("Sheena", "Leather Jacket", "Medium", "Black", "Leather & Polyester", "Marks & Spencer", "Urban chic");
var jacket2 = new jacket("Tushabe", "Denim Jacket", "Large", "Blue", "Denim & Cotton", "Forever21", "Distressed collection");
console.log(jacket2);


function book(name, author, illustrator, publisher, publishingYear, genre, targetMarket){
    this.name = name;
    this.author = author;
    this.illustrator = illustrator;
    this.publisher = publisher;
    this.publishingYear = publishingYear;
    this.genre = genre;
    this.targetMarket = targetMarket;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var book1 = new book("Javascript for Beginners", "Ozzy O", "Tushabe", "JS Publishers", "Sept 2020", "Non-Fiction", "Beginner Programmers");
var book2 = new book("Weather", "Roderick Hunt", "Alex Brytcha", "Oxford University Press", "2012", "Children's Non-Fiction", "Ages 4 - 6");
console.log(book1);


function lotion(name, type, brand, collection, size, scent, mainIngredients){
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.collection = collection;
    this.size = size;
    this.scent = scent;
    this.mainIngredients = mainIngredients;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var lotion1 = new lotion("A Thousand Wishes", "hand lotion", "Bath 7 Body Works", "Ultra Shea", "226g", "Pink Prosecco", "Aloe Butter & Cocoa Butter");
var lotion2 = new lotion("Warm Vanilla Sugar", "body lotion", "Body Luxuries", "Signature collection", "500mL", "Vanilla Absolute", "Aloevera & Mineral Oil");
console.log(lotion2);


function toy(type, size, material, stuffing, color, make, yearOfmake){
    this.type = type;
    this.size = size;
    this.material = material;
    this.stuffing = stuffing;
    this.color = color;
    this.make = make;
    this.yearOfmake = yearOfmake;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var toy1 = new toy("Teddy Bear", "XXL", "Fur", "Cotton balls", "Brown", "Made in China", "2019");
var toy2 = new toy("Car", "S", "Plastic", "None", "Blue", "Made in Uganda", "2020");
console.log(toy1);

function cup(color, type, collection, material, make, size, owner){
    this.color = color;
    this.type = type;
    this.collection = collection;
    this.material = material;
    this.make = make;
    this.size = size;
    this.owner = owner;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var cup1 = new cup("Purple", "Thermos cup", "Breakfast collection", "Metal", "Nice House", "&50mL", "Sheena");
var cup2 = new cup("Grey", "Normal", "Breakfast set", "Ceramic", "Mukwano", "300mL", "Sheena");
console.log(cup2);


function blankie(type, color, material, stuffing, make, size, yearOfmake){
    this.type = type;
    this.color = color;
    this.material = material;
    this.stuffing = stuffing;
    this.make = make;
    this.size = size;
    this.yearOfmake = yearOfmake;
    this.availableAt = function(){
        console.log("Sheena T multi-store")
    }
}
var blankie1 = new blankie("duvet", "white", "wool", "cotton", "Kikuubo", "6X6", "2018");
var blankie2 = new blankie("throw blanket", "green", "wool", "none", "China", "4X6", "2020");
console.log(blankie1);
