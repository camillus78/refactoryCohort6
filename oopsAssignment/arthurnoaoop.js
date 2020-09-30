function shoe(color,brand,size,weight,texture,make){
    this.color=color;
    this.brand=brand;
    this.size=size;
    this.weight=weight;
    this.texture=texture;
    this.make=make;
    this.type=function(){
        console.log("sports");
    }
    

}

var shoe1 = new shoe("black","keds","32cm","500g","Germany","leather")
var shoe2 = new shoe("white","clarks","45cm","250g","China","cloth")

console.log(shoe1);
    shoe1.type();


function country(noOftribes,continent,size,population,GDP,currency){
    this.noOftribes=noOftribes;
    this.continent=continent;
    this.size=size;
    this.population=population;
    this.GDP=GDP;
    this.currency=currency;
    this.president=function(){
        console.log("Mukwaya");
    }
    

}

var country1 = new country(5,"Africa","340sqmiles","87.9m","47.9B","kwacha")
var country2 = new country(7,"Asia","100sqmiles","7.6m","90B","dollars")

console.log(country2);
    country2.president();


function team(color,sponsor,nickname,noOfplayers,location,totalwins){
    this.color=color;
    this.sponsor=sponsor;
    this.nickname=nickname;
    this.noOfplayers=noOfplayers;
    this.location=location;
    this.totalwins=totalwins;
    this.coach=function(){
        console.log("Pep");
    }
    

}

var team1 = new team("red","nike","amavubi",34,"kigali","Micho")
var team2 = new team("yellow","adidas","red devils",56,"London","Aaron")

console.log(team1);
    team1.coach();


function hotel(location,noofrooms,rating,noofworkers,owner,size){
    this.location=location;
    this.noofrooms=noofrooms;
    this.rating=rating;
    this.noofworkers=noofworkers;
    this.owner=owner;
    this.size=size;
    this.typeofwifi=function(){
        console.log("public");
    }
    

}

var hotel1 = new hotel("kampala",50,"5star",345,"Kibalamu","43hectares","public")
var hotel2 = new hotel("Gulu",45,"3star",78,"Isaac","2hectares","private")

console.log(hotel2);
    hotel2.typeofwifi();


function fridge(color,brand,weight,powerconsumption,make,shape){
    this.color=color;
    this.brand=brand;
    this.weight=weight;
    this.powerconsumption=powerconsumption;
    this.make=make;
    this.shape=shape;
    this.cost=function(){
        console.log("2m");
    }
    

}

var fridge1 = new fridge("grey","samsung","32kg","2kw/hr","Germany","3m")
var fridge2 = new fridge("brown","hisense","60kg","3kw/hr","China","1.5m")

console.log(fridge1);
    fridge1.cost();


function alcohol(volume,name,weight,ingredients,percentage,company){
    this.volume=volume;
    this.name=name;
    this.weight=weight;
    this.ingredients=ingredients;
    this.percentage=percentage;
    this.company=company;
    this.package=function(){
        console.log("kaveera");
    }
    

}

var alcohol1 = new alcohol("1l","nile","20g","cereals","20%","glass bottle")
var alcohol2 = new alcohol("5l","Four Cousins","34g","hibiscus","50%","box")

console.log(alcohol1);
    alcohol1.package();


    function course(duration,fees,noofcourseunit,nooflecturers,time,modeofdelivery){
        this.duration=duration;
        this.fees=fees;
        this.noofcourseunit=noofcourseunit;
        this.nooflecturers=nooflecturers;
        this.time=time;
        this.modeofdelivery=modeofdelivery;
        this.eligibility=function(){
            console.log("dinstictions only");
        }
        
    
    }
    
    var course1 = new course("3 years","4m",12,13,"Day","textbooks,videos")
    var course2 = new course("2 years","1.2m",6,7,"Evenning","e-learning")
    
    console.log(course1);
        course1.eligibility();