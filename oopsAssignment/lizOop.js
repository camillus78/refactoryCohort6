// Create 7 Objects with at least 7 properties & 1 method
// Create 2 instances of that object using the keyword 'new'
// Do not use the example of cows, houses, cars & dogs as they were already used in class
// Submission: Name your file as 'nameOop.js' & push to CohortSIX project repo on GitHub
// Due: 9 pm, Wed 30th Sep

// Object 1:
 function book (title,author,genre,pages,publishingHouse,datePublished,country) {
     this.title = title;
     this.author = author;
     this.genre = genre;
     this.pages = pages;
     this.publishingHouse = publishingHouse;
     this.datePublished = datePublished;
     this.country = country;
     
     readingList = function(){
         console.log("I want to add "+book1.title+" to my reading list.")
        };
 }

 var book1 = new book("The Pragmatic Programmer","David Thomas & Andrew Hunt","Education","320","Addison Wesley","1999","USA")
 var book2 = new book("Effective JavaScript","David Herman","Education","240","Addison Wesley","2012","USA")
 
//  console.log(readingList())
console.log(book2.title +" is "+ book2.pages +" pages long.");


// Object 2:
function mountain (mtName,location,range,elevation,peaks,type,difficulty,firstAssent) {
    this.mtName = mtName;
    this.location = location;
    this.range = range;
    this.elevation = elevation;
    this.peaks = peaks;
    this.type = type;
    this.difficulty = difficulty;
    this.firstAssent = firstAssent;
}

let mt1 = new mountain("Mt. Elgon","Mbale","Solitary Mountain","4,321 meters","5 peaks","Extinct Volcanic Mountain","Intermediate","Kmunke and Stigler in 1911")
let mt2 = new mountain("Mt. Sabinyo","Kisoro","Virunga Mountain Range","3,669 meters","3 peaks","Stratovolcano","Difficult","Unkown")

hike = function(){
    console.log("I want to climb "+mt1.mtName+" next time I visit "+mt1.location)
};

console.log(hike());

// Object 3:
function meal (mainDish,sideDish,drink,soup,salad,desert,spice) {
    this.mainDish = mainDish;
    this.sideDish = sideDish;
    this.drink = drink;
    this.soup = soup;
    this.salad = salad;
    this.desert = desert;
    this.spice = spice;
}

var meal1 = new meal("Matooke","G-nut Sauce","Sprite","Mushroom","Garden Salad","Gonja","mild spice")
var meal2 = new meal("Fried Chicken","Chips","Coca Cola","Tomato","Fruit Salad","Chocolate Cake","strong spice")

mealOrder = function(){
    console.log("will eat "+meal1.mainDish+" with "+meal1.sideDish+ " and a "+meal1.drink+" to drink.")
   };

mealOrder();
console.log ("Martha "+mealOrder());


// Object 4:
function netflix (movies,series,realityShows,documentaries,kidsCartoons,japaneseAnime,standupComedy) {
    this.movies = movies;
    this.series = series;
    this.realityShows = realityShows;
    this.documentaries = documentaries;
    this.kidsCartoons = kidsCartoons;
    this.japaneseAnime = japaneseAnime;
    this.standupComedy = standupComedy;
    
    recommendation = function(){
        console.log(" but I will try your recommendation this weekend and watch "+yourNetflix.documentaries)
       };
}

var myNetflix = new netflix("Johnny English","The IT Crowd","Tidying Up with Marie Kondo","Tiger King","Boss Baby","BNA","Dave Chappelle")
var yourNetflix = new netflix("Black Panther","Modern Family","Top Chef","Our Social Dilemma","Despicable Me","Princess Mononoke","Kevin Hart")


console.log("I have been watching " + myNetflix.series + " on Netflix," + recommendation());
recommendation();


// Object 5
function musician (stageName,country,musicGenre,bestSong,netWorth,awards,albumNum) {
    this.stageName = stageName;
    this.country = country;
    this.musicGenre = musicGenre;
    this.bestSong = bestSong;
    this.netWorth = netWorth;
    this.awards = awards;
    this.albumNum = albumNum;
    
    myRequest = function(){
        console.log("because they are my favorite musician !")
       };
}

var playlist1 = new musician ("Bob Marley","Jamaica","Reggae","Redemption Song","130 million dollars","Grammy Lifetime Achievement Award","22 Albums")
var playlist2 = new musician ("Beyonce","USA","Pop","Single Ladies","400 million dollars","Grammy Award for Song of the Year 2010","120 Albums")

console.log("DJ please play for me "+playlist1.bestSong+" by "+playlist1.stageName+ myRequest());
myRequest();


// Object 6
function hotel (hotName,hotLocation,rating,facilities,roomType,mealPlan,ratePp) {
    this.hotName = hotName;
    this.hotLocation = hotLocation;
    this.rating = rating;
    this.facilities = facilities;
    this.roomType = roomType;
    this.mealPlan = mealPlan;
    this.ratePp = ratePp;
    
    bookingRequest = function(){
        console.log("Please change my booking to " + hotel2.hotName)
       };
}

var hotel1 = new hotel("Sheraton","Kampala, Uganda","5 Star","Swimming Pool","Double Room","Bed & Breakfast","150 dollars")
var hotel2 = new hotel("Mweya Safari Lodge","Queen Elizabeth National Park","5 Star","Game Drives","Honeymoon Suite","Full Board","200 dollars")

console.log("I booked "+hotel1.hotName+ " for our honeymoon, but I would like to go to "+hotel2.hotLocation+" instead.");

// Object 7 - Family (Out of time)