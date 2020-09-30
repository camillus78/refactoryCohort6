function aeroplane(color, name, size, owner, weight, country, propellant) {
    this.make = color;
    this.name = name;
    this.size = size;
    this.owner = owner
    this.weight = weight;
    this.country = country;
    propellant = propellant;
    this.fly = function() {
        console.log("This aeroplane flys inter-continental.");
    }
}
var aeroplane1 = new aeroplane("white", "Jumbojet", "Medium", "5000 tons", "Fly Emirates", "United Arab Emirates", "Electric power");
var aeroplane2 = new aeroplane("grey", "Airbus", "Large", "7000 tons", "Kenya Airways", "Kenya", "Jet fuel");
console.log(aeroplane1);
aeroplane1.fly();



function shoe(color, name, model, owner, size, year, material) {
    this.color = color; //this.color is a property for this function and value
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.year = year;
    this.material = material;
    this.wear = function() {
        console.log("He loves wearing those shoes.")
    }
}
var shoe1 = new shoe("Brown", "Sneaker", "Nike", "Rino", "42", "2017", "Suade ");
var shoe2 = new shoe("Black", "Mocassin", "Zara", "George", "45", "2020", "Leather");
console.log(shoe2);
shoe2.wear();



function bicycle(color, material, name, model, owner, size, weight) {
    this.color = color;
    this.material = material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.ride = function() {
        console.log("She likes riding that bicycle.")
    };
}
var bicycle1 = new bicycle("Green", "Metal", "Hero ", "2003-4", "Chris", "Big", "20 kg");
var bicycle2 = new bicycle("Red", "Carbon-fibre ", "Master ", "2007-20 ", " Jane", "Medium ", "24 kg ");
console.log(bicycle1);
bicycle1.ride();



function cup(color, material, shape, capacity, owner, size, weight) {
    this.color = color;
    this.material = material;
    this.shape = shape;
    this.capacity = capacity;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.drink = function() {
        console.log("I always drink from that cup.");
    }
}
var cup1 = new cup("Blue", "Melamine", "circular", "500 ml ", "Rino", "Big", "200 gm");
var cup2 = new cup("Yellow", "Plastic ", "Heart", "200 ml ", "Brian ", " Small", "100 gm ");
console.log(cup2);
cup2.drink();



function shorts(color, material, name, model, owner, size, length) {
    this.color = color;
    this.material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.weight = length;
    this.wear = function() {
        console.log("He wears this pair of shorts every weekend.")
    }
}
var shorts1 = new shorts("Brown", "Linen", " Prada", "204", "Micheal", "Big", "70 cm");
var shorts2 = new shorts("Grey", "Cotton", "Dockers", "236 ", " Simon", "Medium ", "50 cm ");
console.log(shorts1);
shorts1.wear();



function pen(color, material, name, model, owner, size, type) {
    this.color = color;
    this.material = material;
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.size = size;
    this.type = type;
    this.write = function() {
        console.log("This pen writes clearly.");
    }
}
var pen1 = new pen("Red", "Plastic", "Bic ", "X23", "Emma", "Small", "Ball point");
var pen2 = new pen("Blue", "Metallic ", "Nataraj ", "25Z ", " Elijah", "Midium", "Fountain");
console.log(pen2);
pen1.write();



function ball(color, material, make, sport, owner, size, weight) {
    this.color = color;
    this.material = material;
    this.make = make;
    this.sport = sport;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.play = function() {
        console.log("This ball is played every game.");
    }
}
var ball1 = new ball("white", "leather", "Nike ", "Football", "Ozil", "Medium", "900 gm");
var ball2 = new ball("yellow", "Rubber ", "Puma ", "Tennis ", " Federer", "Small", "200 gm ");
console.log(ball1);
ball1.play();