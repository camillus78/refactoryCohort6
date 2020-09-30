function bed(shape,type,size,material,height,color){
    this.shape=shape;
    this.type=type;
    this.size=size;
    this.material=material;
    this.height=height
    this.color=color;
    this.weight=weight;
}
var bed1= new bed("rectangle", "canopy", "king size", "wood", 4.11, "red", 500);
var bed2= new bed("circle", "crib", "small", "metal", 5.2, "blue", 350);

console.log(bed2.color);

function cat(gender,breed,color,size,owner,weight,age){
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.size=size;
    this.owner=owner;
    this.weight=weight;
    this.age=age;
}
var cat1= new cat("male", "persian", "brown", "small", "farmer", 20, 4);
var cat2= new cat("female", "siamese", "black", "farmer", 18, 3);

console.log(cat2.breed);

function house(type,material,height,owner,color,rooms,size){
    this.type=type;
    this.material=material;
    this.height=height;
    this.owner=owner;
    this.color=color;
    this.rooms=rooms;
    this.size=size;
}
var house1= new house("bungaloo", "brick", 10.8, "agency", "white", 8, "big");
var house2= new house("bungaloo", "brick", 9.8, "agency", "black", 6, "big");

console.log(house2.color);

function person(name,age,color,height,gender,weight){
    this.name=name;
    this.age=age;
    this.color=color;
    this.height=height;
    this.gender=gender;
    this.weight=weight;
}
var person1=new person("john", 21, "black", "5.8", "male", 55);
var person2=new person("yvonne", 18, "black", 5.6, "female", 28);

console.log(personal1.color);

function camel(breed,color,height,size,owner,gender,age){
    this.breed=breed;
    this.color=color;
    this.height=height;
    this.size=size;
    this.owner=owner;
    this.gender=gender;
    this.age=age;
}
var camel1= new camel("bagri", "brown", 8.12, "big", "shephard", "male", 18);
var camel2= new camel("camel", "white", 8.8, "big", "shephard", "male", 40);

console.log(camel1.size);

function fish(type,color,size,gender,){
    this.type=type;
    this.color=color;
    this.size=size;
    this.gender=gender;
}
var fish1= new fish("goldfish", "orange", 28, "male");
var fish2= new fish("guppy", "blue", 40, "male");

console.log(fish1.type);

function trouser(color,size,make,fabric,length,name,){
    this.color=color;
    this.size=size;
    this.make=make;
    this.fabric=fabric;
    this.length=length;
    this.name=name;
}
var trouser1= new trouser("pink", 24, "nike", "cotton", 37, "khakis");
var trouser2= new trouser("blue", 34, "nike", "leather", 38, "sweatpants");

console.log(trouser2.fabric);






