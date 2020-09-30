/**
Readable code but dont use plural for object names, more comments are needed in your code.

*/


//Objets Class assignment

//1
function favoriteCountry (country, continent, famousFor, size, president) {
    this.country = country;
    this.continent = continent;
    this.famousFor = famousFor;
    this.size = size;
    this.president = president;
    this.statement = function() {
        console.log(`Oh my God! I love ${country}`)
    }
}

var myFavorite = new favoriteCountry('Uganda', 'Africa', 'corruption', '241k sq km', 'Y.K Museveni');
var yourFavorite = new favoriteCountry('Canada', 'America', 'hockey', '9.985 sq km', 'Justin Trudeau');

myFavorite.statement();

//2
function islands (island, country, reason) {
    this.island = island;
    this.country = country;
    this.reason = reason;
    this.explanation = function() {
        console.log(`I'd love to go to ${island} in ${country} because ${reason}`)
    }
}

var Aines = new islands('Bali', 'Indonesia', 'they have nice beaches')
var Derricks = new islands('Bali', 'Greece', 'of its stunning sunsets')

Derricks.explanation()

//3
function favoritePet (name, petName, size, petFood) {
    this.name = name;
    this.petName = petName;
    this.size = size;
    this.petFood = petFood;
    this.reason = function () {
        console.log(`${name} loves ${petName}`)
    };
    this.statement = function() {
        console.log(`${petName} love eating ${petFood}`)
    }
};

var Aine = new favoritePet ('Derrick', 'cats', '3kg', 'meat')
var Ray = new favoritePet ('Raymond', 'dogs', '20kgs', 'cooked chicken')

Aine.reason();
Aine.statement();

//4
function favBook(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.myBook = function() {
        console.log("My favorite book is " + title + " by " + author + ". It was written on " + date +".")
    }
};

var Derrick = new favBook('Americanah', 'Chimamanda Ngozie Adichie', '2013');
var Samuel = new favBook('Seven Habits', 'Sean Covey', '1998');

Derrick.myBook();

//5
function clothes(name, type, price, location) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.location = location;
    this.directions = function() {
        console.log(`You can find a good ${type} ${name} at only ${price} in ${location}`)
    };
};
 
var shirt = new clothes('shirt', 'cotton', 15000, 'Kampala');
var trousers = new clothes('jean', 'cotton', 30000, 'Kisementi');

shirt.directions();

//6
function siblings(names, age, number) {
    this.names = names;
    this.age = age;
    this.number = number;
    this.statement = function() {
        console.log(`I have ${number} siblings; ${names}.`)
    }
}

var Derrick = new siblings('Winnie, Ray, Mary', 21, 3);
var Raymond = new siblings('Akoragye, Mary', 17, 2);

Derrick.statement();

//7
function storyGenerator(year, name1, name2, carType) {
    this.year = year;
    this.name1 = name1;
    this.name2 = name2;
    this.carType = carType;
    this.story = function() {
        console.log("My girl " + name1 + " left me in " + year + " for " + name2 + " because he had a " + carType + " and I didn't")
    }
}

var Derrick = new storyGenerator(2015, 'Hailey', 'Richard', 'Benz');
var James = new storyGenerator(2018, 'Emily', 'Derrick', 'bike')

Derrick.story();
