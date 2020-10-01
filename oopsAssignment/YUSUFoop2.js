// Object Careers
function Careers(title,institution,periodOfStudy,entryPoints,competence,salaryScale,numberOfStudents){
    this.title=title;
    this.institution=institution;
    this.periodOfStudy=periodOfStudy;
    this.entryPoints=entryPoints;
    this.competence=competence;
    this.salaryScale=salaryScale;
    this.numberOfStudents=numberOfStudents;
    this.advice=function(){
        console.log("Hard work pays")
    }
}
var Engineering=new Careers("Electrical Engineering")
Engineering.advice()


//class laligaTeam
function laLigateam(coach,goalKeeper,centerBack,midfilder,striker,stadium,yearofFounding){
    this.coach=coach;
    this.goalKeeper=goalKeeper;
    this.centerBack=centerBack;
    this.midfilder=midfilder;
    this.striker=striker;
    this.stadium=stadium;
    this.yearofFounding=yearofFounding;
    this.ref=function(){
        console.log("VAR  has not solved ref decision issues")
    }
}
var Atletico = new laLigateam("Simeone","Oblack","Gimenez","Thomas","Felix","WandaMetropolitano",1905)
Atletico.ref()
console.log(Atletico.striker)

//class Musician
function Musician(name,age,sex,dateOfBirth,country,style,awards){
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.dateOfBirth=dateOfBirth;
    this.country=country;
    this.style=style;
    this.awards=awards;
    this.death=function(){
        console.log("still Alive")
    }

}
var Jackson = new Musician("MJ",57,"Male","23/05/1954","America","Classic Pop","King of Pop")
console.log(Jackson.awards)

//Object Domestic Animal
function domesticAnimal(name,gestationPeriod,height,home,lifeSpan,purpose,maxKids){
    this.name=name;
    this.gestationPeriod=gestationPeriod;
    this.height=height;
    this.home=home;
    this.lifeSpan=lifeSpan;
    this.purpose=purpose;
    this.maxKids=maxKids;
    this.color=function(){
        console.log("Domestic Animals have different colours")
    }
    }
var Cat = new domesticAnimal("Cat","6 months","one feet","3 years","Stays Indoor","security and companion","Begets 6 maximum kittens")
console.log(Cat.maxKids);

    //class game
    function game(ID,countryOfOrigin,numberOfPlayers,timeOfPlay,type,extent,worldOrganisation){
        this.ID=ID;
        this.countryOfOrigin=countryOfOrigin;
        this.numberOfPlayers=numberOfPlayers;
        this.timeOfPlay=timeOfPlay;
        this.type=type;
        this.extent=extent;
        this.worldOrganisation=worldOrganisation;
        this.advice=function(){
            console.log('Please play more games')
        }
    }
    var football=new game("football","Germany","eleven players")
    console.log(football.countryOfOrigin)

    // Object Bird
function bird(name,lifeSpan,habitant,colour,sound,numberOfEggs){
    this.name=name;
    this.lifeSpan=lifeSpan;
    this.habitant=habitant;
    this.colour=colour;
    this.sound=sound;
    this.numberOfEggs=numberOfEggs;
    this.prey=function(){
        console.log("In the wild,birds have different prey")
    }
}
var Eagle=new bird("Eagle")
Eagle.prey()

//Object religion
function religion(name,centralBeing,countryOfOrigin,yearsOfExistance,pillars,numberOfFollowers,majorDates){
    this.name=name;
    this.centralBeing=centralBeing;
    this.countryOfOrigin=countryOfOrigin;
    this.yearsOfExistance=yearsOfExistance;
    this.pillars=pillars;
    this.numberOfFollowers=numberOfFollowers;
    this.majorDates=majorDates
    this.comment=function(){
        console.log("In summary....we all believe the same God")
            }
}
var chr=new religion("christianity","Jesus Christ")
chr.comment()