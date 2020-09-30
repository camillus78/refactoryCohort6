/**
Emma, where are the comments?!  those are not comments those are mockery text instead of comments,
please use put love in what you are doing ...Otherwise you can do better..nice work


*/


// 1
function country(population_size, nature, flag_colours, food, symbol) {
    this.population_size = population_size;
    this.nature = nature;
    this.flag_colours = flag_colours;
    this.food = food;
    this.symbol = symbol;
    this.best_food = function () {
        console.log("Jolloff rice");
    }

}

var Ghana = new country("27.8 million", "not land locked", "red yellow black", "fufu", "crane",)
var Uganda = new country("42.7 million", "land locked", "red gold green", "matooke", "crane bird")
Uganda.best_food();

// 2
function cat(breed, Hair, size, behaviour) {
    this.breed = breed;
    this.Hair = Hair;
    this.size = size;
    this.behaviour = behaviour;
    this.eye_color = function () {
        console.log("blue black");
    }

}

var cat1 = new cat("sphynx", "hairless", "medium-sized", "mischivous")
var cat2 = new cat("American short hair", "hairy", "larger", "very affectionate")
cat1.eye_color();

// 3
function phone(manufacurer_countryname, manaufacture_date, model, security_status, price_type) {
    this.manufacurer_countryname = manufacurer_countryname;
    this.manaufacture_date = manaufacture_date;
    this.model = model;
    this.security_status = security_status;
    this.price_type = price_type;
    this.phone_color = function () {
        console.log("gold");
    }

}

var iphone = new phone("Apple US", "2019", "iphone 11", "excellent", "very expensive")
var Samsung = new phone("south korea", "2019", "galaxy A9 pro", "good", "fairly expensive")
iphone.phone_color();


// 4
function castle(location_city, built_by, year_established) {
    this.location_city = location_city;
    this.built_by = built_by;
    this.year_established = year_established;
    this.tourism_value = function () {
        console.log("$ 25 million");
    }

}

var cape_coast_castle = new castle("cape coast", "Swedes", "1653")
var Samsung = new castle("elmina", "portugese", "1558")
cape_coast_castle.tourism_value();

// 5
function chicken(breed, variety, egg_color, egg_size, size, primary_usage) {
    this.breed = breed;
    this.variety = variety;
    this.egg_color = egg_color;
    this.egg_color = egg_size;
    this.size = size;

    this.egg_color = primary_usage;
    this.annual_revenue = function () {
        console.log("$ 1.5 million");
    }

}

var type1_chicken = new chicken("Americana", "black", "green", "large", "medium-size", "eggs")
var type2_chicken = new chicken("Buckeye", "only one variety", "brown", "large", "heavy bodied", "dual")
type1_chicken.annual_revenue();


// 6
function marriage(type_name, religion, location) {
    this.type_name = type_name;
    this.religion = religion;
    this.location = location;
    this.universal_practice = function () {
        console.log("Not practices everywhere");
    }

}

var type1_marriage = new marriage("polyandry", "christianity", "canada")
var type2_marriage = new marriage("polygamy", "islam", "iran")
type2_marriage.universal_practice();

// 7
function song(genre, artist, album_title, year) {
    this.genre = genre;
    this.artist = artist;
    this.album_title = album_title;
    this.year = year;
    this.universal_record = function () {
        console.log("Yes");
    }

}

var song_1 = new song("pop", "Michael Jackson", "thriller", "1982")
var song_2 = new song("raggae", "Lucky Dube", "Prisoner", "1989")
song_1.universal_record();


