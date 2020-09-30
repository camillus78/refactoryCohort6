/**
Readable code but you are missing comments!

*/

function cloth(color,type,texture,material,make,size){
    this.color=color;
    this.type=type;
    this.texture=texture;
    this.material=material;
    this.make=make;
    this.size=size;
    
}
var cloth1=new cloth("white ","dress","smooth","cotton","Turkey","XL");
var cloth2= new cloth("blue","shirt","coarse","linen","china","small");
console.log(cloth1);

function cake(flavour,size,color,owner,price){
    this.flavopur=flavour;
    this.size=size;
    this.color=color;
    this.owner=owner;
    this.price=price;
    

}
var cake1=new cake("vanilla","medium","white","paula","50000");
var cake2=new cake("chocolate","large","floro","sylivia","70000");
console.log(cake1)

function shoe(color,type,style,size,make){
    this.color=color;
    this.type=type;
    this.style=style;
    this.size=size;
    this.make=make;
    
    
}
var shoeA=new shoe("white and black","heel","open","40","france");
var shoeB=new shoe("brown","pump","peeptoe","38","italy");
console.log(shoeA)

function phone(color,type,name,make,owner,size){
    this.color=color;
    this.type=type;
    this.name=name;
    this.make=make;
    this.owner=owner;
    this.size=size;
    
}
var phone1=new phone("black","iphone","x","USA","Ozzy","1inch");
var phone2=new phone("navyblue","samsung","note9","China","howard","1.3inch");
console.log(phone1)

function hair(color,name,make,size,weight){
    this.color=color;
    this.name=name;
    this.make=make;
    this.size=size;
    this.weight=weight;
}

var hair1=new hair("brown","brazilian","india","16inch","light");
var hair2=new hair("black","sythentic","china","12inch","heavy");
console.log(hair1);


function metal(color,name,price,weight){
    this.color=color;
    this.name=name;
    this.price=price;
    this.weight=weight;
}
var metal1=new metal("golden","gold","expensive","heavy");
var metal2=new metal("greyblack","aluminium","cheap","light");
console.log(metal1);

function man(color,breed,height,name,weight){
    this.color=color;
    this.breed=breed;
    this.height=height
    this.namr=name;
    this.weight=weight;
}
var manA=new man("white","indian","Singh","5'4","200lbs");
var manB=new man("black","African","Oge","6","180lbs");
console.log(manB)
