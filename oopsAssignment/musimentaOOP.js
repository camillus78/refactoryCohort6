function phone (type, manufacture, batterycapacity,owner , size,CPU,Ram){
this.type=type;
this.manufacture=manufacture;
this.batterycapacity=batterycapacity;
this.owner=owner;
this.size=size;
this.CPU=CPU;
this.Ram=Ram;

this.answer=function(){
    console.log("beep");
}

}
// Object 2
var phone1=new phone("iphone","Apple","2658 mAH","maria","11max","touchScreen","4GB Storage");
var phone2=new phone("Andriod","Motorola","2000 mA","Milly","2560 px","screentouch","8GB storage");
console.log(phone1);
console.log(phone2)


function bag(type,designer,durable,manufacture,owner, size , material){
    this.type=type;
    this.designer=designer;
    this.durable=durable;
    this.manufacture=manufacture;
    this.owner=owner;
    this.size=size;
    this.material=material;
    
    this.wear=function(){
        console.log("looking smart");
    }
}
var bag1 = new bag("backpack","GUCCI","10years","China","Malcolm","18.5cubeinches","sisal");
var bag2 = new bag("clucth","LouiViton","50years","Italy","Andrew","28cubeinches","lether");
console.log(bag1);
console.log(bag2);

// object3
function kettle(type, color, maker, owner, size , capacity, durable){
    this.type=type;
    this.color=color;
    this.maker=maker;
    this.owner=owner;
    this.size=size;
    this.capacity=capacity;
    this.durable=durable;
     
    this.boil=function(){
        console.log("boiling water");
    }
}
var kettle1 = new kettle("steel","green","Japan","Irene","35inchs","boilwater in less than 5mins","30years");
var kettle2= new kettle("plastic","white","China","Ritah","25inchs","boilwater in 20seconds","40years");
 console.log(kettle1);
 console.log(kettle2);

 //oject 4
 function flower(owner, type, size, color, length, nature, height){
     this.owner=owner;
     this.type=type;
     this.size=size;
     this.color=color;
     this.lenth=length;
     this.nature=nature;
     this.height=height;

     this.decorate=function(){
         console.log("beautiful");
     }
 }
 var flower1 = new flower("Liz","Rose","small","Red","5.5cm","thorny","5.5cm");
 var flower2= new flower("Vivian","Lily","medium","white","4.4cm","smooth","4.4cm");
 console.log (flower1);
 console.log(flower2);

 // 5 object 
  function shoe(manufacture, owner, type, size, color, durable, origin ){
this.manufacture= manufacture;
this.owner=owner;
this.type=type;
this.size=size;
this.color=color;
this.durable=durable;
this.origin=origin;

this.dress=function(){
    console.log("comfort");
    
}

}
    var shoe4= new shoe("London","Fameous","Timberland","9","brown","7years","Scotland");
    var shoe5 = new shoe("Italy","Grace","Balencia","6","black","20years","Japan");

console.log(shoe4);
console.log(shoe5);

//object6
function plate(size, manufacture, nature, durable, origin, color, weight){
this.size=size;
this.manufacture=manufacture;
this.nature=nature;
this.durable=durable;
this.origin=origin;
this.color=color;
this.weight=weight;

 this.food =function(){
     console.log("eating");
     
 }
}
var plate1 = new plate("23cm","mukwano","Plastic","30years","Uganda","Green","20kgs");
var plate2 = new plate("35","Mehta","melamine","60years","Uganda","Pink","50kgs"); 
console.log(plate1);
console.log(plate2)

// object 7 
 function cup(size, nature, durable, color, origin, weight , owner){
this.size=size;
this.nature=nature;
this.durable=durable;
this.color=color;
this.origin=origin;
this.weight=weight;
this.owner=owner;

this.drink=function(){
    console.log("Tea")
}

 }
 var cup6=new cup("78kg","plastic","8years","Green","Uganda","56kgs","Mosses");
 var cup9= new cup("98kgs","melamine","20kgs","blue","Rwanda","24kgs","John");

 console.log(cup6);
 console.log(cup9);