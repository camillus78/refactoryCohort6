
function AcademicInstitution(name,location,foundation,faculties,lecturers,courses,students){
    this.name=name;
    this.location=location;
    this.foundation=foundation;
    this.faculties=faculties;
}
var Kyambogo=new AcademicInstitution('kyu','banda',1987,7,345,67,10000)

console.log(Kyambogo.location)


function students(name,age,size,height,origin,religion,grade){
    this.name=name;
    this.height=height
   
}
var kig=new students('kigozi',32,12,7,"uganda","catholic")

console.log(kig.height)


function politicalParty(name,leader,color,age,location,spokesman,totalmembers){
    this.name=name;
   this.color=color;
}
var movement=new politicalParty('NRM','Kaguta','yellow',67,'kampala','muntu',100000)

console.log(movement.color)


function Beverage(name,taste,expirydate,volume,customers,company,sugarcontent){
    this.name=name;
   
}
var pepsi=new Beverage('mirinda','good',2021,30,1000000,'pap',10000)

console.log(pepsi.name)


function Fruits(name,size,color,lifespan,weight,owner,taste){
    this.name=name;
    this.color=color;
    
}
var mangoes=new Fruits('mango',6,'red',21,3,'kato','sweet')

console.log(mangoes.name)


function Kingdom(name,size,king,population,norms,foundation,cashcrop){
    this.name=name;
    this.foundation=foundation;
    
}
var Bug=new Kingdom('Buganda','100000','kabaka',7000000,'funeral',1967,'coffee')

console.log(Bug.foundation)


function Trees(name,size,lifespan,color,height,weight,width){
    this.name=name;
    this.color=color;
    this.height=height;
    
}
var pawpaw=new Trees('ecto',35,57,'green',42,147,21)

console.log(pawpaw.height)
