/**
Where are the comments in your code?!
You should not name your objects with plural names, always use singular


*/

function person(age, sex, hairtype, eyes, height, status, occupation){
    this.age=age;
    this.sex=sex;
    this.hairtype;
    this.eyes=eyes;
    this.height=height;
    this.status=status;
    this.occupation=occupation;

    this.drinks = function(){
        console.log("all people drink water");
    }
}

var myfather = new person("50", "male", "curly", "brown", "married");
var mysister = new person("28", "female", "straight", "blue", "enganged");

console.log(myfather.age);
console.log(mysister.sex);

function books(size,color, pages,author,year,publisher,title){
    this.size=size;
    this.color=color;
    this.pages=pages;
    this.author=author;
    this.year=year;
    this.publisher=publisher;
    this.title=title;

    this.co_author = function(){
        console.log("the co_author of all the books is kisakye ephrance");
    }

}

var happiest_birthday = new books("small", "blue", "250", "nanfuma", "2018", "harriet", "happiest_birthday");
var moments = new books("large", "green","300", "nanfuma","2020", "harriet", "moments");

console.log(moments.color);
console.log(happiest_birthday.pages);

function bag(size, color, designer, number_of_mini_bags, year, price, type){
this.size=size;
this.color=color;
this.number_of_mini_bags=number_of_mini_bags;
this.year=year;
this.price=price;
this.type=type;

this.purpose = function() {
    console.log("all bags are used to carry things");
}
}

var backpack = new bag("large", "black", "chantell", "5", "2019", "50000", "back_pack");
var handbag = new bag("small", "pink", "3", "2018", "70000", "hand_bag");

console.log(backpack.size);
console.log(handbag.color);

function drinks(type, alcohol_content, company, year, price, ingredients, age_limit){
    this.type=type;
    this.alchol_content=alcohol_content;
    this.company=company;
    this.year=year;
    this.price=price;
    this.ingredients=ingredients;
    this.age_limit=age_limit;

    this.use = function() {
    console.log("the main use of all drinks is to drink them");
    }
}

var juice = new drinks("juice", "0", "riham", "2019", "15000", "apples", "unlimited");
var wine = new drinks("wine", "15", "romi's_wine", "2008", "30,000", "grapes", "18&above");

console.log(juice.company);
console.log(wine.year);

function plants(type, height, color, size_of_leaves, size_of_seeds, germination_period, seedlings_price){
    this.type=type;
    this.height=height;
    this.size_of_leaves=size_of_leaves;
    this.size_of_seeds=size_of_seeds;
    this.germination_period=germination_period;
    this.seedlings_price=seedlings_price;

    this.growth_requirement = function(){
        console.log("all plants require water to grow");
    }
}

var beans = new plants("legumes", "2.1inch", "green", "small", "6months", "600");
var maize = new plants("annual", "4.5inch", "green", "medium", "1year", "500");

console.log(beans.type);
console.log(maize.height);

function organisation(type, age, ceo, product, number_of_employees,location, profit, starting_year){
    this.type = type;
    this.age=age;
    this.product=product;
    this.number_of_employees=number_of_employees;
    this.location=location;
    this.profit=profit;
    this.starting_year=starting_year;

    this.responsibility =  function(){
        console.log("all companies must pay tax");
    }
}

var romis_wine = new organisation("wine_company", "20", "moses", "wine", "200", "rubaga", "$50", "2000");
var mukwano = new organisation("cooking_oil", "50", "mukwano", "cooking_oil", "industrial area", "$400", "1970");

console.log(romis_wine.age);
console.log(mukwano.product);

function bed(type, designer, year, price, size, weight, color){
    this.type=type;
    this.designer=designer;
    this.year=year;
    this.price=price;
    this.size=size;
    this.weight=weight;
    this.color=color;

    this.category = function(){
        console.log("all beds are furniture");
    }
}

var decker = new bed("decker", "chantell", "2018", "small", "light", "blue");
var craddle = new bed("cradle", "d&g", "2019", "large", "heavy", "purple" );

console.log(decker.type);
console.log(craddle.weight);
