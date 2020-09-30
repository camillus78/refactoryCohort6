


function vegetables(color,size,texture,taste,propagation,lifespan,marketprice) {
    this.color=color;
    this.size=size;
    this.texture=texture;
    this.taste=taste;
    this.propagation=propagation;
    this.lifespan=lifespan;
    this.marketprice=marketprice;
}

var vegetables1 = new vegetables("green","0.5m","rough","bitter","water","1month","2dollars");
var vegetables2 = new vegetables("red","0.3","smooth","delicious","wind","1year","2dollars");


    



function cereals (color,size,name,texture,propagation,lifespan,marketprice) {
    this.color=color;
    this.size=size;
    this.name=name;
    this.texture=texture;
    this.propagation=propagation;
    this.lifespan=lifespan;
    this.marketprice=marketprice;
}
var cereals1 = new  cereals("red","2inch","gnuts","soft","water","4months","12cents");
var cereals2 = new cereals("white","1inch","rice","rough","birds","3moths","10pounds");
console.log(cereals1);
    


function flowers(purpose,color,smell,texture,propagation,pollination,products) {
    this.purpose=purpose;
    this.color=color;
    this.smell=smell;
    this.texture=texture;
    this.propagation=propagation;
    this.pollination=pollination;
    this.products=products;
}

var flowers1 = new flowers("decoration","red","bad","smooth","insects","cross","perfume");
var flowers2= new  flowers("air cleanser","violet","rough","good","months","noncross","nector");


    


function soil(texture,permeability,drainage,filtrationrate,products,type,color) {
    this.texture=texture;
    this.permeability=permeability;
    this.drainage=drainage;
    this.filtrationrate=filtrationrate;
    this.products=products;
    this.type=type;
    this.color=color;
}
var soil1 = new soil("soft","high","good","high","pots","clay","gray");
var soil2 = new soil("rough","low","bad","low","cups","loam","brown");



 function fruit(color,size,texture,taste,smell,propagation,marketprice) {
        this.color=color;
        this.size=size;
        this.texture=texture;
        this.taste=taste;
        this.smell=smell;
        this.propagation=propagation;
        this.marketprice=marketprice;
    }
    
    var fruit1 = new fruit("red","20cm","smooth","sweet","good","birds","20shs"); 
    var fruit2 = new fruit("blue","30cm","rough","sour","bad","water","50cents"); 
    
    


    


function smartphone(storagecapacity,networktype,memorycardcapacity,display,color,size,internetconnection) {
    this.storagecapacity=storagecapacity;
    this.networktype=networktype;
    this.memorycardcapacity=memorycardcapacity;
    this.display=display;
    this.color=color;
    this.size=size;
    this.internetconnection=internetconnection;
}

var smartphone1 = new smartphone("32gb","4g","6gb","bright","red","6inch","fast");
var smartphone2 = new smartphone("16gb","2gb","1gb","dull","blue","4inch","slow");

    

    
function PC(brand,type,color,operatingsystem,storagecapacity,generation,size) {
    this.brand=brand;
    this.type=type;
    this.color=color;
    this.operatingsystem=operatingsystem;
    this.storagecapacity=storagecapacity;
    this.generation=generation;
    this.size=size; 
}

var PC1 = new PC("old","dell","black","windows","4gb","4th","2by2");
var PC2 = new PC("new","hp","white","mac","16gb","5th","2by3");

    
