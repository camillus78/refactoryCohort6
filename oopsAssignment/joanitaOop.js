/**
Readable code but fewer comments.. some relevant comments are missing more so on constructor 'new'

*/

//First object

function bird(type, color, size, origin, featherTexture, footType, beakType){
    this.type = type;
    this.color = color;
    this.size = size;
    this.origin = origin;
    this.featherTexture = featherTexture;
    this.footType = footType;
    this.beakType = beakType;

    this.wingFlap = function(){
        console.log("All birds flap their wings but not all birds can fly");
    }
}

var bird1 = new bird("Duck", "Brown", "Small", "Hawaii", "Smooth", "Webbed", "Cone");

var bird2 = new bird("Chicken", "Red", "Small", "France", "Smooth", "nonWebbed", "Pointed");

console.log(bird1.beakType);
console.log(bird2.type);

//Second object

function ball(type, size, color, shape, owner, manuf, material){
    this.type = type;
    this.size = size;
    this.color = color;
    this.shape = shape;
    this.owner = owner;
    this.manuf = manuf;
    this.material = material;

    this.bounce = function(){
        console.log("Balls can bounce off a surface");
    }
}

var balla = new ball("Rugby ball", "Medium", "Brown", "Oval", "Joseph", "Addidas", "Leather");

var ballb = new ball("Cricket ball", "Small", "White", "Round", "Joan", "Addidas", "Plastic");

console.log(ballb.type);
console.log(ballb.material);

//Third object

function tree(type, woodType, maxWidth, maxHeight, leafType, leafColor, woodColor){
    this.type = type;
    this.woodType = woodType;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.leafType = leafType;
    this.leafColor = leafColor;
    this.woodColor = woodColor;
    

    this.thicken = function(){
        console.log("The longer a tree is left to grow the thicker it gets");
    }

}

var treeA = new tree("Pine", "Hard Wood", "200cm", "50m", "Decidious", "Green", "Dark Brown");
var treeB = new tree("Teremania", "Hard Wood", "500cm", "100m", "Decidious", "Dark Green","Light Brown");

//Fourth object
 function fruit(type, name, shape, size, color, typeOfRoot, typeOfTree){
     this.type = type;
     this.name = name;
     this.shape = shape;
     this.size = size;
     this.color = color;
     this.typeOfRoot = typeOfRoot;
     this.typeOfTree = typeOfTree;
    this.flower = function(){
        console.log("Our fruits trees are flowering");
    }
 }

 var fruit1 = new fruit("Juicy", "Passion Fruit", "Round", "Small", "Purple", "Tap", "Climbing");
 var fruit2 = new fruit("Dry", "Maize", "Grain", "Small", "Yellow", "Up root", "Non climbing");
 
 console.log(fruit1.typeOfTree);

 //Fifth object

 function vegetable(kind, name, color, leafKind, seedSize, seedTexture, seedKind){
    this.kind = kind;
    this.name = name;
    this.color = color;
    this.leafKind = leafKind;
    this.seedSize = seedSize;
    this.seedTexture = seedTexture;
    this.seedKind = seedKind;

     this.rippen =function(){
         console.log("Vegetables take a while to rippen after harvesting");
     }
 }

 var veg1 = new vegetable("Leafy", "Cabbage", "Green", "Succulent", "Very small", "Smooth", "non-jelly");
 var veg3 = new vegetable("Drupe", "Ovacado", "Green", "Indulate", "Medium", "Rough", "Dicot");
 
 console.log(veg3.seedKind);



 //Sixth object

 function book(type, name, author, yearOfPublish, numOfPage, edition, publisher){
     this.type = type;
     this.name = name;
     this.author = author;
     this.yearOfPublish = yearOfPublish;
     this.numOfPage = numOfPage;
     this.edition = edition;
     this.publisher = publisher;

    this.read = function(){
        console.log("Books have good reads");
    }
 }

 var book1 = new book("Story Book", "Just Mercy", "Bryan", "2014", "172", "ed.1", "New York Times");

 var book2 = new book("Margazine", "Flair", "Karisa", "2020", "48", "ed.8", "New Vision");

 console.log(book2.edition);


 //Seventh object

 function instrument(kind, type, name, owner, color, size, materialMake){
     this.kind = kind;
     this.type = type;
     this.name = name;
     this.owner = owner;
     this.color = color;
     this.size = size;
     this.materialMake = materialMake;

     this.sound = function(){
         console.log("A collection of noise is musical sound");
     }
    
 }

 
 var instrument1 = new instrument("Musical", "Wind", "Flute", "Joseph", "Cream", "Small", "Ceramic");
 var instrument2 = new instrument("Musical", "String", "Cello", "Joanita", "Blue", "Large", "Wood");
