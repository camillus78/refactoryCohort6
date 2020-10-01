//The class is Academic Institution.
function AcademicInstitution(name,location,foundation,faculties,lecturers,courses,students){
    this.name=name;
    this.location=location;
    this.foundation=foundation;
    this.faculties=faculties;
    this.money=function(){
        console.log("i will be rich some day")
    }
    
    

}
var Kyambogo=new AcademicInstitution('kyu','banda',1987,7,345,67,10000)

console.log(Kyambogo.location)
Kyambogo.money()

//The class is stusent.
function student(name,age,size,height,origin,religion,grade){
    this.name=name;
    this.height=height
    this.work=function(){
        console.log("no work no money")
    }
   
}
var kig=new student('kigozi',32,12,7,"uganda","catholic")

console.log(kig.height)
kig.work()


//The class is political party.
function politicalParty(name,leader,color,age,location,spokesman,totalmembers){
    this.name=name;
   this.color=color;
   this.table=function(){
       console.log("tables for serving food")
   }
}
var movement=new politicalParty('NRM','Kaguta','yellow',67,'kampala','muntu',100000)

console.log(movement.color)
movement.table()


//The class is Beverage.
function Beverage(name,taste,expirydate,volume,customers,company,sugarcontent){
    this.name=name;
    this.chair=function(){
        console.log("chairs for sitting on")
    }
   
}
var pepsi=new Beverage('mirinda','good',2021,30,1000000,'pap',10000)

console.log(pepsi.name)
pepsi.chair()

//The class is Fruit.
function Fruit(name,size,color,lifespan,weight,owner,taste){
    this.name=name;
    this.color=color;
    this.sand=function(){
        console.log("sand is for building")
    }
    
}
var mangoes=new Fruit('mango',6,'red',21,3,'kato','sweet')

console.log(mangoes.name)
mangoes.sand()

//The class is Kingdom.
function Kingdom(name,size,king,population,norms,foundation,cashcrop){
    this.name=name;
    this.foundation=foundation;
    this.door=function(){
        console.log("door is for opening")
    }
    
}
var Bug=new Kingdom('Buganda','100000','kabaka',7000000,'funeral',1967,'coffee')

console.log(Bug.foundation)
Bug.door()

//The object is Tree
function Tree(name,size,lifespan,color,height,weight,width){
    this.name=name;
    this.color=color;
    this.height=height;
    this.board=function(){
        console.log("board for writing on")
    }
    
}
var pawpaw=new Tree('ecto',35,57,'green',42,147,21)

console.log(pawpaw.height)
pawpaw.board()
