/**
Nice work, but you missed full stop at the end of the comments!

*/


// Create 7 objects and initialize at least two 
// Instances using the constructor new
//Each should have at least 7 properties
//Should be submited by Wednesday today 9:00pm
//book,  school, hospital, speaker, restaurant, piano, singer


//Creating the object book
function book(color, noOfpages, weight, owner, typeOfcover,title, author){
    //this.color is a property for this function and value
    this.color = color;
    this.noOfpages = noOfpages;
    this.weight = weight;
    this.owner = owner;
    this.typeOfcover = typeOfcover;
    this.title = title;
    this.author = author;
    this.content = function(){
        console.log("Personal Development material about success")
    };
    this.publisher = function(){
        console.log("Sylvyz Publications")
    }
}
var book1 = new book("White", 300, "0.5lbs", "Sylvia", "Hard Cover", "Mindset", "Carol Dweck");
var book2 = new book("Yellow", 447, "02lbs", "Jacob", "Soft Cover", "Eloquent JavaScript", "Marijn Haverbeke");
console.log(book2);



//Creating object school
function school(name, headteacher, noOfstudents, director, noOfteachers, highestLevel, location){
    //this.color is a property for this function and value
    this.name = name;
    this.headteacher = headteacher;
    this.noOfstudents = noOfstudents;
    this.director = director;
    this.noOfteachers = noOfteachers;
    this.highestLevel = highestLevel;
    this.location = location;
    this.registration = function(){
        console.log("Click here to register")
    };
    this. application= function(){
        console.log("Click here to apply for the next academic year")
    }
}
var school1 = new school("Buganda Road P.S.", "Mr. Mukandori", "800", "G.O.U", "75", "Primary 7", "Kampala");
var school2= new school("Makerere University", "Dr. Nawangwe", "30,000", "G.O.U", "850", "Ph.D", "Makerere");
console.log(school2);


//Creating object hospital
function hospital(name, Superitendant, noOfDoctors, noOfBeds, noOfNurses, accreditation, location){
    //this.color is a property for this function and value
    this.name = name;
    this.Superitendant = Superitendant;
    this.noOfDoctors = noOfDoctors;
    this.noOfBeds = noOfBeds;
    this.noOfNurses = noOfNurses;
    this.accreditation = accreditation;
    this.location = location;
    this.patientAdmission = function(){
        console.log("Click here to book admission for your patient")
    };
    this. bloodDonation = function(){
        console.log("Flow these steps on how you can donate blood")
    }
}
var hospital1 = new hospital("Mulago Hospital.", "Dr. Magara James", "80", "1200", "485", "Health Center VII", "Kampala, Mulago");
var hospital2= new hospital("Joy Hospital", "Dr. Orem", "5", "Deliverance Church Uganda", "15", "Health Center IV", "Ndeeba");


//Creating object speaker
function speaker(color, type, weight, owner, make, batteryLife, cost){
    //this.color is a property for this function and value
    this.color = color;
    this.type = type;
    this.weight = weight;
    this.owner = owner;
    this.make = make;
    this.batteryLife = batteryLife;
    this.cost = cost;
    this.usage = function(){
        console.log("Used playing audio or amplifying sound")
    };
    this.itemsConnected = function(){
        console.log("Phone, microphones")
    }
}
var speaker1 = new speaker("Black", "Bluetooth Speaker", "50lbs", "Immaculate", "Dr.Lee", "72hrs", "$100");
var speaker2 = new speaker("White", "Monitor", "100lbs", "Rino", "Yamaha", "0hrs", "$1000");
console.log(speaker1);


//Creating object piano
function piano(color, type, weight, owner, make, length, cost){
    //this.color is a property for this function and value
    this.color = color;
    this.type = type;
    this.weight = weight;
    this.owner = owner;
    this.make = make;
    this.length = length;
    this.cost = cost;
    this.hire = function(){
        console.log("Click here to hire this piano")
    };
    this.sound = function(){
        console.log("strings, bed")
    }
}
var piano1 = new piano("Black", "Keyboard", "100lbs", "Elvis", "Yamaha MORTIFF 8", "1.5m", "$4000");
var piano2 = new piano("Gray", "Organ", "100lbs", "Samuel", "Roland ", "2.5m", "$10,000");
console.log(piano1);


//Creating object singer
function singer(name, genre, bandName, gender, nationality, basedIn, noOfAlbums){
    //this.color is a property for this function and value
    this.name = name;
    this.genre = genre;
    this.bandName = bandName;
    this.gender = gender;
    this.nationality = nationality;
    this.basedIn = basedIn;
    this. noOfAlbums= noOfAlbums;
    this.concert = function(){
        console.log("Once a year")
    };
    this.bookSinger = function(){
        console.log("To make your function colorful")
    }
}
var singer1 = new singer("Corazine Onenarach", "Contemporary Gospel", "City Fest Band", "Female", "Ugandan", "Okhlahoma, USA", "2");
var singer2 = new singer("Sandra Suubi", "RnB", "Xabu", "Female", "Ugandan", "Uganda", "4");
console.log(singer2);

//Creating object restaurant
function restaurant(name, owner, manager, noOfChefs, noOfWaiters, foodType, drinksType){
    //this.color is a property for this function and value
    this.name = name;
    this.owner = owner;
    this.manager = manager;
    this.noOfChefs = noOfChefs;
    this.noOfWaiters = noOfWaiters;
    this.foodType = foodType;
    this.drinksType = drinksType;
    this.makeAnOrder = function(){
        console.log("Order your lunch, breakfast")
    };
    this.outsideCatering = function(){
        console.log("Booking for birthdays, weddings")
    }
}
var restaurant1 = new restaurant("KFC", "Mutesi Joanne", "Mutesi Joanne", "3", "15", "Fast Food", "Soft Drinks");
var restaurant2 = new restaurant("Maama Ken", "Namukwaya", "Namutebi", "2", "3", "Local Food", "None");
console.log(restaurant2);
