/*Identify and create seven objects with 7 properties and 2 methods and 
list at least two instances  using keyword "new" and do not use any used as examples. */


//objects: Books, newsnetworks, movies, humans, sports, countries, proffesions

//Object 1: Book
function book (title, author, pageCount, set, genre, yearofPublication,publisher,){
    this.title = title;   
    this.author= author
    this.pageCount = pageCount;
    this.set = set;
    this.genre = genre;
    this.yearofPublication = yearofPublication;
    this.publisher = publisher;
    this. emotions = function(){
        console.log("Provokes anger and dismay");
    }
}

var book1 = new book("All your Perfects","Susan Vaughn","356","America", "Romance", "2015","Penguin Books");
var book2 = new book("Emotional Intelligence", "Dan Coleman", "450", "Modern Era", "Psychology", "2009","Harper Collins");

//Object 2: NewsNetworks
function newsnetwork (countryofOrigin,languages,dstvchannel,ownership,yearsActive,pictureQuality,stations){
    this.countryofOrigin = countryofOrigin ;   
    this.languages = languages;
    this.dstvchannel = dstvchannel;
    this.ownership = ownership;
    this.yearsActive = yearsActive;
    this.pictureQuality = pictureQuality;
    this.stations = stations;
    this. soundtrackcomposer = function(){
        console.log(" Hans Zimmer");
    }
}

var Aljazera = new newsnetwork("Qatar","English","225","Qatari", "15", "1080p","5");
var CGTN = new newsnetwork("China", " English & Chinese",  "Chinese","228", "5", "", "720p");

//Object 3 : Humans
function humans (gender,age, race, color, nationality, profession,religion){
    this.gender = gender;   
    this.age = age;
    this.race = race;
    this.color = color;
    this.nationality = nationality;
    this.profession = profession;
    this.religion = religion;
    this.aura = function(){
        console.log("happiness");
    }
}
var aubemayang = new human("male","28 years","African","Black", "Ugandan", "Actuarist","Buddhist");
var osaka = new  human("female", "23 years", "Asian", "Brown", "Japanese", "Tennis player","Christian");

//Object 4: Series
function series (producer,director,leadActor,studio, name,rating,genre){
    this.producer = producer;   
    this.director = director;
    this.leadActor = leadActor;
    this.studio = studio;
    this.name = name;
    this.rating = rating;
    this.genre = genre;
    this. musicScore = function(){
        console.log("enthralling");
    }
}
var series1 = new series("Nekesa Rhoda","Alex Schuller","Agent Danam","Universal Studios", "Fringe", "10/10","Science Fiction");
var series2 = new  series("Mel Gibsom", "Ava Duvaney", "Lord Benney", "HBO", "Downton Abbey", "8/10","Historical Fiction");

//Object 5 : Sports
function sport ( name, noOfPlayers, popularuty, origin, maximumfouls, worldChampions, sportGOAT){
    this.name = name;   
    this.noOfPlayers= noOfPlayers;
    this.popularity = popularuty;
    this.origin = origin;
    this.maximumfouls = maximumfouls;
    this.worldChampions = worldChampions;
    this.sportGOAT = sportGOAT;
    this. playingarea = function(){
        console.log("Court");
    }
}
var sportA = new sport("Basketball","10","8/10","America", "5", "America","Lebron James");
var sportB = new sport("Soccer", "22", "9/10", "Germany", "3", "France","Lionel Messi");

//Object 6 : Countries
function country( name, continent, people, independenceYear, direction, hemisphere, firstPresident){
    this.name = name;   
    this.continent = continent;
    this.people = people;
    this.independenceYear = independenceYear;
    this.direction = direction;
    this.hemisphere = hemisphere;
    this.firstPresident = firstPresident;
    this. peopledemeanor = function(){
        console.log("warm&welcoming");
    }
}
var countryX = new country ("Morocco","Africa","Moroccans","1945", "North", "Northern Hemsiphere","Mustafa Bin Hassan");
var countryY = new country("Brunei", "The Pacific Islands", "Never colonised", "East", "3", "Southern Hemisphere","Sheik Waladi");

//Object 7 : Careers
function careerPath(name, title, workEnvironment, humanInteraction, certificationReq, localOrganisations, bestUniversity){
    this.name = name;   
    this.title = title;
    this.workEnvironment = workEnvironment;
    this.humanInteraction = humanInteraction;
    this.certificationReq = certificationReq;
    this.localOrganisations = localOrganisations;
    this.bestUniversity = bestUniversity;
    this. maslowsHierachy = function(){
        console.log("physiological");
    } 

}
var career1 = new careerPath ("Agriculture","Farmer","Farm","10%", "None", "Farmer cooperatives","Makerere University");
var career2 = new careerPath ("Architecture", "Architect","Paper & Building sites", "50%","Architect's Practice certificate","Uganda Association of Architect", "Makerere University");