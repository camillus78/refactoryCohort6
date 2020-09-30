/**
Where are the comments? and you should follow englishs syntax-
..capital letters on the begining of the sentence and full stop
Code is congested not readable
*/

//create 7 objects and create atleast 2instances of those objects.
//7properties and one method


//Object 1
function student(name, age, height, stream, parentname, attendance, performance) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.stream = stream;
    this.parentname = parentname;
    this.attendance = attendance;
    this.performance = performance;
    this.behaviour = function() {
        console.log("This child has bad manners");

    }

}
var student1 = new student("Anna", "18", "5.5", "p.6 blue", "Nalugo", "absent", "bad");
var student2 = new student("Kazoba", "25", "6.6", "S5", "Nihao", "present", "fair");
console.log(student1);
student1.behaviour();
//Object2

function teacher(name, age, subjecttaught, qualification, skincolor, yearsofexperience, salary) {
    this.name = name;
    this.age = age;
    this.subjecttaught = subjecttaught
    this.qualification = qualification;
    this.skincolor = skincolor;
    this.yearsofexperience = yearsofexperience;
    this.salary = salary;
    this.studentperformance = function() {
        console.log("His students don't perform well");
    }
}
var teacher1 = new teacher("Emmanuel", "45", "Mathematics", "Bachelor of Education", "lightskinned", "4", "5000000");
var teacher2 = new teacher("Samia", "24", "English", "Bachelor of Education", "black", "3", "1000000");
console.log(teacher1);
teacher1.studentperformance();
//Object 3
function school(title, location, sector, numberofstudents, rank, performance, registered) {
    this.title = title;
    this.location = location;
    this.sector = sector;
    this.numberofstudents = numberofstudents;
    this.rank = rank;
    this.performance = performance;
    this.registered = registered;
    this.status = function() {
        console.log("This school is currently closed");

    }
}
var school1 = new school("Muiru primaru school", "mbarara", "private", "345", "12th", "good", "yes");
var school2 = new school("Java Primary school", "Kabale", "government", "4567", "23rd", "poor", "yes");
console.log(school2);
school1.status();
//Object 4
function shop(name, revenue, owner, registrationstatus, dailyprofit, numberofemployees, dailysales) {
    this.name = name;
    this.revenue = revenue;
    this.owner = owner;
    this.registrationstatus = registrationstatus;
    this.dailyprofit = dailyprofit;
    this.numberofemployees = numberofemployees;
    this.dailysales = dailysales;
    this.shoplocation = function() {
        console.log("This shop is located in mbarara");
    }

}
var shop1 = new shop("Musana shop", "2000000", "Mariat", "pending", "500000", "4", "1000000");
var shop2 = new shop("Mass shop", "5000000", "Ssendi", "registred", "2000000", "5", "4000000");
console.log(shop1);
console.log(shop2);
shop1.shoplocation();
//object 5
function fruit(name, color, price, quantity, size, taste, nutrients) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
    this.size = size;
    this.taste = taste;
    this.nutrients = nutrients;
    this.preference = function() {
        console.log("Many customers like this fruit");
    }
}
var fruit1 = new fruit("Apple", "red", "2000ugx", "34", "medium", "sweet", "vitamic C");
var fruit2 = new fruit("Orange", "green", "1500ugx", "50", "large", "bitter", "vitamin C");
console.log(fruit1);
console.log(fruit2);
fruit1.preference();
//Object 6
function course(title, numberofstudents, duration, taughtby, category, passmark, complexitylevel) {
    this.title = title;
    this.numberofstudents = numberofstudents;
    this.duration = duration;
    this.taughtby = taughtby;
    this.category = category;
    this.passmark = passmark;
    this.complexitylevel = complexitylevel;
    this.performance = function() {
        console.log("Students in this course have the best performance");
    }

}
var course1 = new course("Computer science", "45", "3 years", "Mr. Sulaiman", "Sciences", "80%", "hard");
var course2 = new course("Business skills", "50", "3 years", "Marie marie", "Arts", "90%", "Easy");
console.log(course1);
console.log(course2);
course1.performance();
//Object7 
function cosmetic(brand, type, expirydate, origin, averagereview, classification, price) {
    this.brand = brand;
    this.type = type;
    this.expirydate = expirydate;
    this.origin = origin;
    this.averagereview = averagereview;
    this.classification = classification;
    this.price = price;
    this.yearofmake = function() {
        console.log("This product was made in 2016");
    }
}
var cosmetic1 = new cosmetics("L'Oreal", "lipstick", "20/11/2023", "USA", "fair", "class A", "30dollars");
var cosmetic2 = new cosmetics("Kylie", "eye liner", "10/03/2021", "USA", "good", "Class A", "38dollars");
console.log(cosmetic1);
console.log(cosmetic2);
cosmetic1.yearofmake();
