//Initializing a function aeroplane with parameters.
function aeroplane(color, name, size, owner, weight, country, propellant) {
    //Properties for the function aeroplane and their respective values passed to them.
    this.make = color;
    this.name = name;
    this.size = size;
    this.owner = owner
    this.weight = weight;
    this.country = country;
    this.propellant = propellant;
    //Adding fly method.
    this.fly = function() {
        console.log("This aeroplane flys inter-continental.");
    }
}
//Initiating the instantiated object aeroplane by the constructor new.
var aeroplane1 = new aeroplane("white", "Jumbojet", "Medium", "5000 tons", "Fly Emirates", "United Arab Emirates", "Electric power");
var aeroplane2 = new aeroplane("grey", "Airbus", "Large", "7000 tons", "Kenya Airways", "Kenya", "Jet fuel");
//Accessing properties for aeroplane1 and prints it.
console.log(aeroplane1);
//Accessing the properties of object aeroplane1 and prints it.
aeroplane1.fly();



//Initializing a function shoe with parametrs.
function shoe(color, name, model, owner, size, year, material) {
    //Properties for the function shoe and their respective values passed to them.
    this.color = color;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.year = year;
    this.material = material;
    //Adding wear method.
    this.wear = function() {
        console.log("He loves wearing those shoes.")
    }
}
//Initiating the instantiated object shoe by the constructor new. 
var shoe1 = new shoe("Brown", "Sneaker", "Nike", "Rino", "42", "2017", "Suade ");
var shoe2 = new shoe("Black", "Mocassin", "Zara", "George", "45", "2020", "Leather");
//Accessing properties for shoe2 and prints it.
console.log(shoe2);
//Accessing the wear property of object shoe and prints it.
shoe2.wear();



//Initialising a function bicycle with parameters.
function bicycle(color, material, name, model, owner, size, weight) {
    //Properties for the function bicycle and their respective values passed to them.
    this.color = color;
    this.material = material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    //Adding ride method.
    this.ride = function() {
        console.log("She likes riding that bicycle.")
    };
}
//Initilizing the instantiated object bicycle by the constrctor new.
var bicycle1 = new bicycle("Green", "Metal", "Hero ", "2003-4", "Chris", "Big", "20 kg");
var bicycle2 = new bicycle("Red", "Carbon-fibre ", "Master ", "2007-20 ", " Jane", "Medium ", "24 kg ");
//Accessing properties for bicycle1 and prints them.
console.log(bicycle1);
//Accessing the ride property of object bicycle1 and prints it.
bicycle1.ride();



//Initialising a function cup with paramaters.
function cup(color, material, shape, capacity, owner, size, weight) {
    //Properties for the function cup and their respective values passed to them.
    this.color = color;
    this.material = material;
    this.shape = shape;
    this.capacity = capacity;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    //Adding drink method.
    this.drink = function() {
        console.log("I always drink from that cup.");
    }
}
//Initializing the instantiated object cup by the constructor new.
var cup1 = new cup("Blue", "Melamine", "circular", "500 ml ", "Rino", "Big", "200 gm");
var cup2 = new cup("Yellow", "Plastic ", "Heart", "200 ml ", "Brian ", " Small", "100 gm ");
//Accessing properties for cup2 and prints them.
console.log(cup2);
//Accessing the drink property of object cup and prints it.
cup2.drink();



//Initialising a function shorts with parameters.
function shorts(color, material, name, model, owner, size, length) {
    //Properties for the function shorts and their respective values passed to them.
    this.color = color;
    this.material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.weight = length;
    //Adding wear method.
    this.wear = function() {
        console.log("He wears this pair of shorts every weekend.")
    }
}
//Initiialising the instantiated object shorts by the constructor new.
var shorts1 = new shorts("Brown", "Linen", " Prada", "204", "Micheal", "Big", "70 cm");
var shorts2 = new shorts("Grey", "Cotton", "Dockers", "236 ", " Simon", "Medium ", "50 cm ");
//Accessing properties for shorts1 and prints them.
console.log(shorts1);
//Accessing the wear property of object shorts1 and prints it.
shorts1.wear();



//Initialising a function pen with parameters.
function pen(color, material, name, model, owner, size, type) {
    //Properties for the function pen and their respective values passed to them.
    this.color = color;
    this.material = material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.type = type;
    //Adding write method.
    this.write = function() {
        console.log("This pen writes clearly.");
    }
}
//Initialising the instantiated object pen by the constructor new.
var pen1 = new pen("Red", "Plastic", "Bic ", "X23", "Emma", "Small", "Ball point");
var pen2 = new pen("Blue", "Metallic ", "Nataraj ", "25Z ", " Elijah", "Midium", "Fountain");
//Accessing properties for pen1 and prints them.
console.log(pen2);
//Accessing the write property of pen1 and prints it.
pen1.write();



//Initializing a function ball with parameters.
function ball(color, material, make, sport, owner, size, weight) {
    //Properties for the function ball and their respective values passed to them.
    this.color = color;
    this.material = material;
    this.make = make;
    this.sport = sport;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    //Adding play method.
    this.play = function() {
        console.log("This ball is played every game.");
    }
}
//Initialising the istantiated object ballby the constructor new.
var ball1 = new ball("white", "leather", "Nike ", "Football", "Ozil", "Medium", "900 gm");
var ball2 = new ball("yellow", "Rubber ", "Puma ", "Tennis ", " Federer", "Small", "200 gm ");
//Accessing properties for ball1 and prints them.
console.log(ball1);
//Accessing the play property of object ball1 and prints it.
ball1.play();