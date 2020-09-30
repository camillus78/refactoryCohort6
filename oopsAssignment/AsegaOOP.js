/**
this is nice work but you woukd have added more comments mainly where you used the new key word
(where you instantiated objects)

*/


//Object One:- bag
function bag(make, color, size, type, stripe, zips, rollers){
    this.make = make;
    this.color = color;
    this.size = size;
    this.type = type;
    this.stripe = stripe;
    this.zips = zips;
    this.roller = rollers;
}

var bag1 = new bag("gucci","black","big","suitcase","no","6","yes");
var bag2 = new bag("channel","green","small","wallet","no","1","no");

console.log(bag1);
console.log(bag2);

//Object Two:- man
function man(height, weight, haircolor, skincolor, tribe, status, profession){
    this.height = height;
    this.weight = weight;
    this.haircolor = haircolor;
    this.skincolor = skincolor;
    this.tribe = tribe;
    this.status = status;
    this.profession = profession;
}

var man1 = new man("5ft","65kgs","black","brown","muganda","married","software engineer");
var man2 = new man("6ft","50kgs","black","black","musoga","single","scrum master");

console.log(man1);
console.log(man2);

//Object Three:- bucket
function bucket(size, make, color, handle_type, cover_type, shape, transparent){
    this.size = size;
    this.make = make;
    this.color = color;
    this.handle_type = handle_type;
    this.cover_type = cover_type;
    this.shape = shape;
    this.transparent = transparent;
}

var bucket1 = new bucket("big","egale","green","bail plastic","round lid","round","yes");
var bucket2 = new bucket("small","kenlop","black","steel","square lid","square","no");

console.log(bucket1);
console.log(bucket2);

//Object Four:- book
function book(size, type, cover_color, manufacturer, paper_type, pages, binding_type){
    this.size = size;
    this.type = type;
    this.cover_color = cover_color;
    this.manufacturer = manufacturer;
    this.paper_type = paper_type;
    this.pages = pages;
    this.binding_type =binding_type;
}

var book1 = new book("small","exercise book","green","picfare","ruled","96","spiral");
var book2 = new book("big","graph book","blue","musana","graph","48","staples");

console.log(book1);
console.log(book2);

//Object Five- laptop
function laptop(make, model,cpu, display, color, generation, ram){
    this.make = make;
    this.model = model;
    this.cpu = cpu;
    this.display = display;
    this.color = color;
    this.generation = generation;
    this.ram = ram;
}

var laptop1 = new laptop("dell","latitude 3340","i3","15inch","black","g3","8GB");
var laptop2 = new laptop("hp","Notebook 8569","i5","17inch","silver","g8","8GB");

console.log(laptop1);
console.log(laptop2);

//Object Four:- book
function book(size, type, cover_color, manufacturer, paper_type, pages, binding_type){
    this.size = size;
    this.type = type;
    this.cover_color = cover_color;
    this.manufacturer = manufacturer;
    this.paper_type = paper_type;
    this.pages = pages;
    this.binding_type =binding_type;
}

var book1 = new book("small","exercise book","green","picfare","ruled","96","spiral");
var book2 = new book("big","graph book","blue","musana","graph","48","staples");

console.log(book1);
console.log(book2);

//Object Six- laptop
function laptop(make, model,cpu, display, color, generation, ram){
    this.make = make;
    this.model = model;
    this.cpu = cpu;
    this.display = display;
    this.color = color;
    this.generation = generation;
    this.ram = ram;
}

var laptop1 = new laptop("dell","latitude 3340","i3","15inch","black","g3","8GB");
var laptop2 = new laptop("hp","Notebook 8569","i5","17inch","silver","g8","8GB");

console.log(laptop1);
console.log(laptop2);

//Object Six:- house
function house(type, no_of_bedrooms, no_of_bathrooms, floors, garages, location, for_rent){
    this.type = type;
    this.no_of_bathrooms = no_of_bathrooms;
    this.no_of_bedrooms = no_of_bedrooms;
    this.floors = floors;
    this.garages = garages;
    this.location = location;
    this.for_rent= for_rent;
}

var house1 = new house("bangalow","3","2","3","1","kisaasi","yes");
var house2 = new house("flat","5","3","6","3","ntinda","no");

console.log(house1);
console.log(house2);

//Object Seven- bottle
function bottle(type, color, size, litres, straws, handle, make){
    this.type = type;
    this.color = color;
    this.size = size;
    this.litres = litres;
    this.straws = straws;
    this.handle = handle;
    this.make = make;
}

var bottle1 = new bottle("metal","silver","big","1.5ltr","3","metal","kenlop");
var bottle2 = new bottle("plastic","blue","small","1ltr","1","rubber","camera");

console.log(bottle1);
console.log(bottle2);
