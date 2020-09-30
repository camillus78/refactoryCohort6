/**
I wanted you to use funtion style with parameters as properties.
Your code is missing comments.


*/

var phone ={
    brand:"Redmi",
    color:"black",
    screenSize:"2.5inch",
    screenResolution:"blue",
    storage:"260Gb",
    ram:"16Gb",
    battery:"10000mAh",



}
console.log(phone.brand)
var goat ={
    breed:"somalia",
    color:"brown",
    gender:"male",
    production:"milk",
    eyeType:"horizontal pupil",
    weight:"30kg",
    height:"20inchs",



}
var rabbit ={
    breed:"chinchilla",
    color:"white",
    gender:"female",
    production:"meat",
    weight:"15kg",
    height:"10inch",
    kingdom:"animalia",



}

var poultry ={
    bird:"Guinea fowl",
    color:"white",
    ancestor:"Helmeted guineafowl",
    utilzation:"meat",
    domestication:"Africa",
    height:"5inch",
    kingdom:"animalia",



}
var cat ={
    breed:"panthera",
    color:"black",
    gender:"male",
    domestication:"africa",
    weight:"80kg",
    height:"30inch",
    kingdom:"animalia",



}




var computer = {

    brand:"",
    model:"",
    ram:"",
    gen:"",
    rom:"",
    processor:"",
    screenSize:"",
    
name :function () {
        console.log("computer") 
    }   
    }


computer.brand="Dell";
computer.model="inspiron";
computer.ram="2Gb";
computer.gen="2nd";
computer.rom=120;
computer.processor="celeron";
computer.screenSize="1366 x 768";


    console.log(computer.model)    


    function car(brand, model, year, transmission, fuelType, color, driveSide) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.transmission = transmission;
        this.fuelType = fuelType;
        this.color = color;
        this.driveSide = driveSide;
      }
      const car1 = new car('Mercedes Bens', 'G-Wagon', 2019, 'manual', 'petrol', 'black', 'right');

      const car2 = new car('Mercedes Bens', 'G-Wagon', 2019, 'manual', 'petrol', 'black', 'right');

      console.log(car1)
