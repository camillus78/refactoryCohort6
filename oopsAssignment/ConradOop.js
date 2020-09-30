/**
You miss intepreted the assignment. i wanted you to used the 'this'.....
 key word with a function as an object, and the 'new ' keyword on instantiating objects
 
 */





// create/identify seven objects with at least 7 properties and one method and initialise at least two instances using the constructor new.
//Object1.
var ball = {
    //List of properties.
    type: "basketball",
    size:"7",
    league:"NBA",
    gender:"Male",
    isVerified:"true",
    price:"100,000Ugx",
    hasGrip: "true",
    //Method.
    durability: function () {
        console.log ("18 months.")
    }
}
ball.durability();


//Object2.
let phone = {
    //List of properties.
    name: "Iphone",
    model: "XR",
    display: "Liquid retina HD",
    sizeWidth: "2.98in",
    sizeLength: "5.94in",
    sizeDepth: "0.33in",
    Camera: "12MP",
    //Method.
    videoRecording: function () {
        console.log(' 4k.')
    }
}
     phone.videoRecording();


//Function being changed to an object.
function bike(color, make, mileage, price, model, transmission, engineCapacity) {
    this.color = color;
    this.make = make;
    this.mileage = mileage;
    this.price = price;
    this.model = model;
    this.transmission = transmission;
    this.engineCapacity = engineCapacity;
}
//2 instances using the constructor new.
var bike1 = new bike("Gray", "Yamaha", "1000 km", "10,000,000", "FZ", "manual", "1000 cc");
let bike2 = new bike("Black", "Bajaj", "500km", "5,000,000", "RS", "manual", "650 cc");
console.log(bike1.make, bike2.make);

var city = {
    country: "Uganda",
    name:"Fort Portal",
    population: "479,877",
    location: "West",
    subRegion: "Toro-subregion",
    district: "Kabarole",
    noOfCounties: "2",

    commonLanguage: function () {
        console.log("Lutooro");
    }
}
city.commonLanguage();


let fruit = {
    name: "Orange",
    size: "Big",
    color: "Orange",
    type: "Citrus",
    taste: "Sweet",
    price: "500ugx",
    popularity: "Very Popular",
    acidity: function () {
        console.log("Distinctly acidic.");
    }
}
fruit.acidity();


var shape = {
    name :"circle",
    area: "pi*R**2",
    circumference: "2*pi*R",
    size: "large",
    nature: "round",
    depth: "flat",
    parts: "8",
    tangent: function () {
        console.log("Line that touches a circle at one point.")
    }
}
shape.tangent();

var language = {
    name: "Javascript",
    popularity: "Very popular",
    easeOfLearning: "Medium",
    orientation: "Object oriented",
    usage: "Web design",
    founder:"Brendan Eich",
    firstAppearance: "Dec 4, 1995.",
    dynamics: function () {
        console.log("Makes web pages more interactive and dynamic.")
    }
}
language.dynamics();


const church = {
    name: "Watoto Church",
    location: "Ntinda",
    religion: "Born Again",
    congregationSize: "Large",
    headOfStaff: "Pastor Gary",
    prayertimes: "Saturday evening, Sunday",
    mediator: "The Almighty",
    prayer: function () {
        console.log("Demon chasing and life changing.");
    }
}
church.prayer();
