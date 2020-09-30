/**
Readable code, but where are the comments?
Please use singular for objects names




*/




function television(brand,size,type,color,owner,countryOfOrigin,dateOfMake) {
   
    this.brand=brand;
    this.size=size;
    this.type=type;
    this.color=color;
    this.owner=owner;
    this.countryOfOrigin=countryOfOrigin;
    this.dateOfMake=function() {
        console.log("This TV was manufactured last year");
    }

}
var television1=new television("LG",65,"LED","black","Monica","Japan","25/09/2019");
var television2=new television("BRUHM",25,"kibina","grey","Joane","Kenya","17/08/2018");
console.log(television1);

function library(numberOfBooks,genre,aisleNumber,owner,librian,location,type) {
 
    this.numberOfBooks=function () {
        if(numberOfBooks>0){
            console.log('This library has books')
        }
    }
    this.genre=genre;
    this.aisleNumber=aisleNumber;
    this.owner=owner;
    this.librian=librian;
    this.location=location;
    this.type=type;
}
var library1=new library(3200,"love",4,'Readers truss','Fafali','Nsambya','private');
var library2=new library(16000,'academic',18,'makerere','monica','kizungu','public');
console.log(library2);


function home(wife,husband,children,house,bankAccount,farm,friends) {
    this.wife=wife;
    this.husband=husband;
    this.children=children;
    this.house=house;
    this.bankAccount=function (money) {
        if(money==0){
            console.log('This family is broke');
        }
    
    }
    this.farm=farm;
    this.friends=friends;
}
var home1=new home('christine','George',5,'rented',0,'chicken farm','john, prisca,peace');
var home2=new home('janet','museveni',5,'statehouse',5000,'dairy','ministers');
console.log(home1);

function school(name,studentsNumber,teachers,location,type,regNumber,openingHours) {

    this.name=name;
    this.studentsNumber=studentsNumber;
    this.teachers=teachers;
    this.location=location;
    this.type=type;
    this.regNumber=regNumber
    this.openingHours=function () {
        if (openingHours='Saturday'||'Sunday') {
            console.log('Today is a weekend')
        } else {
            console.log("Today is a working day")
        }
    }
}
var school1=new school('javascript pri school',50,"jane samuels",'muyenga','vocational',251548,"Monday");
var school2=new school('refactory',34,'fina','kansanga','primary',25147,'Saturday');

console.log(school1);
school1.openingHours();

function babies(name,sex,age,parents,position,home,mood) {
    // this. creates a property of an object from parameters of the function
    this.name=name;
    this.sex=sex;
    this.age=age;
    this.parents=parents;
    this.position=position;
    this.home=home;
    this.mood=function () {
        console.log("this baby is moody");
    }
}
var babies1=new babies('bubu','female',2,'John and peace','second born','village','happy');
var babies2=new babies('nunu','male',0.9,'dan and emma','first born','trading center','crying');
console.log(babies1);
babies1.mood();

function kitchen(name,size,counterTop,rooms,owner,foodType,time) {
    this.name=name;
    this.size=size;
    this.counterTop=counterTop;
    this.rooms=rooms;
    this.owner=owner;
    this.foodType=function() {
        console.log('this kitchen serves only pastries');
    }
    this.time=time;
}
var kitchen1=new kitchen('Serena',80,'granit',5,'mzungu',"katogo",'evening');
var kitchen2=new kitchen('zuena',20,'wooden',1,'pastries','bebecool','day');
console.log(kitchen2);
kitchen2.foodType();

function tourist(name,country,destination, interest,daysOnTour,residence, transportMeans) {
    
    this.name=name;
    this.country=country;
    this.destination=destination;
    this.interest=interest;
    this.daysOnTour=daysOnTour;
    this.residence=function () {
        console.log('This is tourist sleeps the on road');
    }
    this.transportMeans=transportMeans;
}
var tourist1=new tourist("charles","kenya","Queen Elizabeth","bird watching",50,'no house','bicycle');
var tourist2=new tourist('prince','rwanda','sipi falls',"kayaking",5,'hotel','plane');

console.log(tourist1);
tourist1.residence();
