/** 
OOP CLASS ASSIGNMENT:
1) Create 7 Objects with at least 7 properties & 1 method
2) Create 2 instances of that object using the keyword 'new'
Note: Do not use the example of cows, houses, cars & dogs as they were already used in class
Submission: Name your file as 'nameOop.js' & push to CohortSIX repo on GitHub
Due: 9 pm, Wed 30th Sep
*/

// Example 1:
 function book (title, author, genre, pages, publishingHouse, datePublished,country) {
     this.title = title;
     this.author = author;
     this.genre = genre;
     this.pages = pages;
     this.publishingHouse = publishingHouse;
     this.datePublished = datePublished;
     this.country = country;

     this.readingList = function() {
         console.log("You should add "+this.title+" to your reading list.")
        }
 }

 var book1 = new book("The Pragmatic Programmer","David Thomas & Andrew Hunt","Education","320","Addison Wesley","1999","USA")
 var book2 = new book("Effective JavaScript","David Herman","Education","240","Addison Wesley","2012","USA")

book1.readingList();
console.log("The book "+ book2.title +" is "+ book2.pages +" pages long.");


// Example 2:
function mountain (mtName, location, range, elevation, peaks, type, difficulty, firstAssent) {
    this.mtName = mtName;
    this.location = location;
    this.range = range;
    this.elevation = elevation;
    this.peaks = peaks;
    this.type = type;
    this.difficulty = difficulty;
    this.firstAssent = firstAssent;

    this.hike = function(){
        console.log("I want to climb "+this.mtName+" next time I visit "+this.location)
    };
}

let mt1 = new mountain("Mt. Elgon","Mbale","Solitary Mountain","4,321 meters","5 peaks","Extinct Volcanic Mountain","Intermediate","Kmunke and Stigler in 1911")
let mt2 = new mountain("Mt. Sabinyo","Kisoro","Virunga Mountain Range","3,669 meters","3 peaks","Stratovolcano","Difficult","Unkown")

mt1.hike();

// Example 3:
function meal (mainDish, sideDish, drink, soup, salad, desert, spice) {
    this.mainDish = mainDish;
    this.sideDish = sideDish;
    this.drink = drink;
    this.soup = soup;
    this.salad = salad;
    this.desert = desert;
    this.spice = spice;

    this.mealOrder = function(){
        console.log("I want to order "+ this.mainDish +" with "+ this.sideDish+ " and a "+ this.drink +" for lunch.")
       };
}

var meal1 = new meal("Matooke","G-nut Sauce","Sprite","Mushroom","Garden Salad","Gonja","mild spice")
var meal2 = new meal("Fried Chicken","Chips","Coca Cola","Tomato","Fruit Salad","Chocolate Cake","strong spice")

meal1.mealOrder()

// Example 4:
function shoe (sneaker, highHeel, crocs, slipper, hikingBoot, flats, sandle) {
    this.sneaker = sneaker;
    this.highHeel = highHeel;
    this.crocs = crocs;
    this.slipper = slipper;
    this.hikingBoot = hikingBoot;
    this.flats = flats;
    this.sandle = sandle;
    
    this.faveShoe = function(){
        console.log("I love to wear my " + this.sneaker +" but on special ocassions I can also wear "+ this.highHeel)
       };
}

let style1 = new shoe("Adidas Sneakers","Stiletto Heels","Pink Crocs","Moccasin Slippers","High Ankle Boots","Pointed Flats","Gladiator Sandle")
let style2 = new shoe("Nike Sneakers","Wedge Heels","Green Crocs","Rubber Slippers","Low Ankle Boots","Rounded Flats","Ankle Strap Sandle")

style1.faveShoe();


// Example 5:
function musician (stageName, country, musicGenre, bestSong, netWorth, awards, albumNum) {
    this.stageName = stageName;
    this.country = country;
    this.musicGenre = musicGenre;
    this.bestSong = bestSong;
    this.netWorth = netWorth;
    this.awards = awards;
    this.albumNum = albumNum;
    
    this.djPlaylist = function(){
        console.log("DJ please play for me "+ this.bestSong +" by "+ this.stageName +" next.")
       };
}

var artist1 = new musician ("Bob Marley","Jamaica","Reggae","Redemption Song","130 million dollars","Grammy Lifetime Achievement Award","22 Albums")
var artist2 = new musician ("Beyonce","USA","Pop","Single Ladies","400 million dollars","Grammy Award for Song of the Year 2010","120 Albums")

artist1.djPlaylist();


// Example 6:
function hotel (hotName, hotLocation, rating, facilities, roomType, mealPlan, ratePp) {
    this.hotName = hotName;
    this.hotLocation = hotLocation;
    this.rating = rating;
    this.facilities = facilities;
    this.roomType = roomType;
    this.mealPlan = mealPlan;
    this.ratePp = ratePp;
    
    this.hotBooking = function(){
        console.log("I booked a "+ this.roomType +" at "+ this.hotName +" for our holiday.")
       };
}

let hotel1 = new hotel("Sheraton","Kampala, Uganda","5 Star","Swimming Pool","Double Room","Bed & Breakfast","150 dollars")
let hotel2 = new hotel("Mweya Safari Lodge","Queen Elizabeth National Park","5 Star","Game Drives","Deluxe Cottage","Full Board","200 dollars")

hotel2.hotBooking();

// Example 7:
function family (mother, father, brother, sister, cousin, aunty, uncle) {
    this.mother = mother;
    this.father = father;
    this.brother = brother;
    this.sister = sister;
    this.cousin = cousin;
    this.aunty = aunty;
    this.uncle = uncle;
    
    this.christmas = function(){
        console.log("Everone is coming to "+ this.mother +" house for Christmas this year, execept for "+ this.uncle)
       };
}

var aliceFam = new family("Mama Alice","Tata Alice","Andrew","Annette","Baby Jojo","Aunty Ruth","Uncle Sam")
var benFam = new family("Mama Ben","Tata Ben","Bruce","Betinah","Baby Cissy","Aunty Mary","Uncle Peter")

aliceFam.christmas();

/**
 Corrections made:
 1) I solved the 'undefined' error by using 'this.' to define the property in the object method
 2) Finished adding the 7th Example
 3) I used the dot operator to call the method within the object

 Breakdown of steps taken to create & define each object:
 1) I declared the object (eg. book, mountain, meal, shoe, musician, hotel & family) and defined its class properties.
 2) I declared a method within the object.
 3) I declared 2 instances of the object using 'var' or 'let' and assigned its parameters with values using the constructor key word 'new'.
 4) I called the object method with a dot operator to access the behaivour of a particular instance.
 */