/*
Clock object. A capital letter used as a way to differentiate
a constructor function object definition from a regular function definition.
*/

function Clock(day,date,month,year,hours,minutes,seconds,period){
	this.day=day;
	this.date=date;
	this.month=month;
	this.year=year;
	this.hours=hours;
	this.minutes=minutes;
	this.seconds=seconds;
	this.period=period;
	this.tick=function(){
		this.seconds++;
		return this.seconds;
	}
}

//Instance objects created from the Clock object. 

var today = new Clock('Wednesday',30,'September',2020,'5','56','10','PM');
var yesterday = new Clock('Tuesday',29,'September',2020,'5','56','10','PM');

//Train object.
function Train(type,length,carriages,carriageCap,startLocation,endLocation,maxSpeed){
	this.type=type;
	this.length=length;
	this.carriages=carriages;
	this.carriageCap=carriageCap;
	this.startLocation=startLocation;
	this.endLocation=endLocation;
	this.maxSpeed=maxSpeed;
	this.move=function(){
		return `On the move.\nStart point: ${this.startLocation}\nDestination: ${this.endLocation}`;
	}
}

//Instance objects created from the Train object

var train1 = new Train('Electric','40ft',10,40,'Kampala','Jinja','200km/hr');
var train2 = new Train('Steam','40ft',5,10,'Mbale','Jinja','100km/hr');

//Student object

function Student(name,age,gender,course,nationality,studyLocation,sponsor){
	this.name=name;
	this.age=age;
	this.gender=gender;
	this.course=course;
	this.nationality=nationality;
	this.studyLocation=studyLocation;
	this.sponsor=sponsor;
	this.print=function(){
		return this;
	}
}

//Instance objects created from the Student object

var student1 = new Student('Bauer',37,'Male','Software Engineering','Ugandan','Online','Self');
var student2 = new Student('Bourne',40,'Male','Data Engineering','Kenyan','Online','Family');

//SuperHero object

function SuperHero(name,home,strength,weakness,powers,identityKnown,masked){
	this.name=name;
	this.home=home;
	this.strength=strength;
	this.weakness=weakness;
	this.powers=powers;
	this.identityKnown=identityKnown;
	this.masked=masked;
	this.print=function(){
		return this;
	}
}

//Instance objects created from the SuperHero object

var hero1 = new SuperHero('Batman','DC Comics','Technology','Empathy','None',false,true);
var hero2 = new SuperHero('Captain America','Marvel','Indestructible','Empathy','None',false,true);

//TvShows object

function TvShows(name,genre,mainCharacter,seasons,episodeLength,rating,cancelled){
	this.name=name;
	this.genre=genre;
	this.mainCharacter=mainCharacter;
	this.seasons=seasons;
	this.episodeLength=episodeLength;
	this.rating=rating;
	this.cancelled=cancelled;
	this.print=function(){
		return this;
	}
}

//Instance objects created from the TvShows object

var show1 = new TvShows('24','Action','Kiefer Sutherland',9,'42 minutes','90%',false);
var show2 = new TvShows('Billions','Thriller','Damian Lewis',5,'42 minutes','90%',false);


//Song object

function Song(name,genre,artist,length,videoAvailable,rating,price){
	this.name=name;
	this.genre=genre;
	this.artist=artist;
	this.length=length;
	this.videoAvailable=videoAvailable;
	this.rating=rating;
	this.price=price;
	this.print=function(){
		return this;
	}
}

//Instance objects created from the Song object

var song1 = new Song('Munda Awo','Afro Beat','B2C','3minutes',true,'90%','$0.80');
var song2 = new Song('Savage Love','Hip Hop','Jason Derulo','3 minutes',true,'90%','$0.80');

//Tv object

function Tv(type,brand,size,colored,rating,price,availableAt){
	this.type=type;
	this.brand=brand;
	this.size=size;
	this.colored=colored;
	this.rating=rating;
	this.price=price;
	this.availableAt=availableAt;
	this.print=function (){
		return this;
	}
}
//Instance objects created from the Tv object

var tv1 = new Tv('LED','Samsung','80Inch',true,'Excellent','$1,200','Game Shopping Mall');
var tv2 = new Tv('LCD','Hisense','40Inch',true,'Good','$500','Game Shopping Mall');

