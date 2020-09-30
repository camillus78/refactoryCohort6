function gazebo(size,shape,color,material,roofing,railing,flooring){
    this.size= size;
    this.shape= shape;
    this.color= color;
    this.material= material;
    this.roofing= roofing;
    this.railing= railing;
    this.flooring= flooring;
}
var gazebo1= new gazebo('Large','Circular','Brown','Wood','Standard','Wood','White tiles');
var gazebo2= new gazebo('Small','Square','Black and white','Metal','Bell roof','Metal','Grey tiles');
console.log(gazebo2.shape);

function fish(size,breed,color,owner,name,scientificName,classification){
    this.size= size;
    this.breed= breed;
    this.color= color;
    this,owner= owner;
    this.name= name;
    this.scientificName= scientificName;
    this.classification= classification;

    this.sound= function() {
        console.log('tinkles')
    }
}
var fish1= new fish('Small','Goldfish','Orange','Zainab','Dolly','Carassius auratus','Actinopterygii');
var fish2= new fish('Medium','Catfish','Grey','Aziz','Kate','Siluriformes','Actinopterygii');
console.log(fish1.color);

function apartment(size,floors,color,bedrooms,bathrooms,balconies,parkingSpace,){
    this.size= size;
    this.floors= floors;
    this.color= color;
    this.bedrooms= bedrooms;
    this.bathrooms= bathrooms;
    this.balconies= balconies;
    this.parkingSpace= parkingSpace;

    this.disaster= function(){
        console.log('crumbles to the ground');
    }

}
var apartment1= new apartment('Small','Second','Red',1,1,'no','Small');
var apartment2= new apartment('Big','Fifth','Black',4,3,'Two','Large');
console.log(apartment1.color);

function cat(color,breed,weight,name,owner,gender,age){
    this.color= color;
    this.breed= breed;
    this.weight= weight;
    this.name= name;
    this.owner= owner;
    this.gender= gender;
    this.age= age;
    this.sound= function(){
        console.log('meow');
    }
}
var cat1= new cat('White','Persian cat','Five kg','Olly','Rafael','Male',2);
var cat2= new cat('Brown','Donskoy','Six kg','Ari','Darcey','Female','Five months');
console.log(cat2.gender);

function shoe(name,size,color,make,design,occassion,){
    this.name= name;
    this.size= size;
    this.color= color;
    this.make= make;
    this.design= design;
    this.occassion= occassion;
    this.trip= function(){
        console.log('shoe becomes dirty');
    }
}
var shoe1= new shoe('Pumps',6,'Red','Louis Vuitton','Polka dots','Casual');
var shoe2= new shoe('Loafers',8,'Black','Vitoria Mens','Polish','Formal');
console.log(shoe2.make);

function skirt(type,fabric,length,make,color,design,size){
    this.type=type;
    this.fabric= fabric;
    this.length= length;
    this.make= make;
    this.color= color;
    this.design= design;
    this.size= size;
    this.stain= function(){
        console.log('becomes dirty');
    }
}
var skirt1= new skirt('Pencil','Cotton','Long','Merrick','Black','Solid','Medium');
var skirt2= new skirt('Mini','Cotton','Short','Nova',"Red and Black",'Plaid','Small');
console.log(skirt2.design);

function motorcycle(name,make,color,engine,year,owner){
    this.name= name;
    this.make= make;
    this.color= color;
    this.engine= engine;
    this.year= year;
    this.owner= owner;
}
var motorcycle1= new motorcycle('Ducati','America','Red','V-twin','1980','Harley');
var motorcycle2= new motorcycle('BMW','Europe','Blue','R1200C','1990','David');
console.log(motorcycle2.name);
