function bed(length, width,height, colour, cost, type ){
    this.length = length;
    this.width = width;
    this.height= height;
    this.color = colour;
    this.cost = cost;
    this.type = type;
    
    this.manufacture = function(){
        console.log("Xinxin factory")
    };
   
}
 var bed1 = new bed( "6 feet", "6 feet","3 feet" ,"brown","Shs1500000","Wooden" ) 
 var bed2 = new bed( "6 feet", "4 feet","3 feet" ,"green","Shs300000","Metalic" ) 

console.log(bed1.type)


function bag(colour,size,brand,material,manufacture,noOfSidePockets,cost){
    this.colour = colour;
    this.size = size;
    this.brand = brand;
    this.material = material;
    this.manufacturing = manufacture;
    this.noOfSidePockets = noOfSidePockets;
    this.cost = cost;
}
var bag1 = new bag("white","small","dubaoiU","Leather","Dubao",2,"Shs50000")
var bag2 = new bag("black","big","Eavas","Leather","Power",5,"Shs100000")

console.log(bag2.cost)




function trouser(material,length,size,fashion,color,gendaTarget,cost){
    this.material = material,
    this.length = length,
    this.size = size,
    this.fashion = fashion,
    this.color = color,
    this.gendaTarget = gendaTarget,
    this.cost = cost;
}
var trouser1 = new trouser("geans","100cm","39cm","damage on the legs", "light-blue","female","Shs25000")
var trouser2 = new trouser("Cotton","120cm","42cm","office trouser", "black","male","Shs50000")

console.log(trouser1)


function bread(manufacture,size,flavor,cost,manufaturingDate,expiryDate,tast){
    this.Manufacture = manufacture,
    this.size = size,
    this.flavor =flavor,
    this.cost = cost,
    this.manufaturingDate = manufaturingDate,
    this.expiryDate = expiryDate,
    this.tast = tast;
}
var bread1 = new bread("Ntake","small","brown","Shs3000","28/9/2020","2/10/2020","sweet")
var bread2 = new bread("Super-loaf","big","vanila","Shs5000","29/9/2020","5/10/2020","salty")

console.log(bread2)

function cake(colour,flavor,size,bakeryName,cost,pakage,shape){
    this.color = colour;
    this.flavor = flavor;
    this.size = size;
    this.bakaryName = bakeryName;
    this.cost = cost;
    this.pakage = pakage;
    this.shape = shape;
}
var cake1 = new cake("pink","strawbery","15cm","Daian Cakes","Shs70000","box","circlular")
var cake2 = new cake("brown","blackforest","20cm","Cafe Java","Shs140000","paper bag","square")

console.log(cake2.shape)

function shoes(colour,purpose,size, brand,cost,material,){
    this.color = colour;
    this.purpose = purpose;
    this.size = size;
    this.brand = brand;
    this.cost = cost;
    this.material = material;
    this.durability = function(){
        console.log("long lasting")
    };
}
var shoes1 = new shoes("Red","Party","39inchs","Zhungfu", "Shs55000", "glass")
var shoes2 = new shoes("black","feild work","40inchs","safetyboots", "Shs200000", "leather")
 
console.log(shoes2.material)


function tree(name,medicinalValue,maturityPeriod,climateGrown,costOfSeedling,modeOfConsumption,  ){
    this.name = name,
    this.medicinalValue = medicinalValue,
    this.maturityPeriod = maturityPeriod,
    this.climateGrown =climateGrown,
    this.costOfSeedling = costOfSeedling,
    this.modeOfConsumption = modeOfConsumption,
    this.alternativeMode = function(){
        console.log("tablet")
    };
}
var tree1 = new tree("neem", "rejulating blood pressure","3years","semiArid","Shs5000", "boil leaves")
var tree1 = new tree("moringa", "treats caugh","4years","semiArid","Shs6000", "boil leaves")

tree1.alternativeMode();
