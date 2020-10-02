
//Define object person with parameters name,age,height,weight,bloodtype,eye_color,skin_color.
function person(fullname,age,height,weight,bloodtype,eye_color,skin_color){
//The properties are assigned to parameters respectively.
    this.Name=fullname;
    this.Age=age;
    this.Hieght=height;
    this.Weight=weight;
    this.Bloodtype=bloodtype;
    this.Eye_color=eye_color;
    this.Skin_color=skin_color;
// A method play is created to describe behavior of object person.
    this.play=function(){
    console.log("Loves playing the Guitar");
    } 
}

//Instances of the object Person is created.
var person1=new person("Mercy Wamanga",24,"5.2 ft","50kgs","A+","brown","chocolate");
var person2=new person("Susan Bako",55,"5.6 ft","70kgs","O","brown","chocolate");
//Display properties and method of the new instances of object person.

console.log(person1);
person1.play();
person2.fullname;
person2.play();

//define object pen with parameters make,pen_color,height,ink_color,pen_type,price.
function pen(make,pen_color,height,ink_color,pen_type,price){
    //The properties are assigned to parameters respectively.
        this.Make=make;
        this.Pen_Color=pen_color;
        this.Hieght=height;
        this.Ink_color=ink_color;
        this.Pen_type=pen_type;
        this.Price=price;
    // A method write_pen is created to describe behavior of object pen.
       this.write_pen=function (){
            console.log("They use me for writing in a book ");
        } 
    }
    
    //Instances of the object pen is created.
    var pen1=new pen("bic","black","5cm","black","ballpen",600);
    var pen2=new pen("nice","blue","4.9cm","blue","fountain",10000);
    //Display properties and method of the new instances of object pen.
    
    console.log(pen1);
    pen1.write_pen();
    console.log(pen2);
    pen2.write_pen();

//define object box with parameters length,width,height,volume,perimeter,shape,color.
function box(length,width,height,volume,perimeter,shape,color){
    //The properties are assigned to parameters respectively.
        this.Length=length;
        this.Width=width;
        this.Hieght=height;
        this.Volume=volume;
        this.Perimeter=perimeter;
        this.Shape=shape;
        this.Color=color;
    // A method carry is created to describe behavior of object box.
       this.carry=function (){
            console.log("Am a box. They use me for carrying language");
        } 
    }
    
    //Instances of the object box is created.
    var box1=new box("10cm","10cm","10cm",1000,1200,"square","red");
    var box2=new box("5cm","6cm","10cm",2400,1800,"rectangular","black");
    //Display properties and method of the new instances of object box.
    
    console.log(box1);
    box1.carry();
    console.log(box2);
    box2.carry();

    //Define object tv with parameters make,model,shape,weight,screen_size,screen_color,tv_type.

    function tv(make,model,shape,weight,screen_size,color,tv_type){
        //The properties of object tv are assigned to parameters respectively.
            this.Make=make;
            this.Model=model;
            this.Shape=shape;
            this.Weight=weight;
            this.Screen_size=screen_size;
            this.color=color;
            this.TV_type=tv_type;
        // A method watch is created to describe behavior of object tv.
           this.watch=function (){
                console.log("Am a Television. They use me for entertainment");
            } 
        }
        
        //Instances of the object tv is created.
        var tv1=new tv("Hisense","HV100M","rectangular","45kg","45 inch","grey","colored");
        var tv2=new tv("Sony","SN100M","rectangular","30kg","35 inch","black","black and white");
        //Display properties and method of the new instances of object tv.
        
        console.log(tv1);
        tv1.watch();
        console.log(tv2);
        tv2.watch();

//Define object bed with parameters material,size,height,length,width,shape,color.
function bed(material,size,height,length,width,shape,color){
    //The properties of object bed are assigned to parameters respectively.
        this.Material=material;
        this.Size=size;
        this.Height=height;
        this.Lenght=length;
        this.Width=width;
        this.Shape=shape;
        this.Color=color;
    // A method sleep is created to describe behavior of object bed.
       this.sleep=function (){
            console.log("Am a Bed. They use me to rest");
        } 
    }
    
    //Instances of the object bed is created.
    var bed1=new bed("6cm","6cm","20cm",2400,1900,"rectangular","black");
    var bed2=new bed("5cm","6cm","10cm",2400,1800,"rectangular","black");
    //Display properties and method of the new instances of object bed.
    
    console.log(bed1);
    bed1.sleep();
    console.log(bed2);
    bed2.sleep();


//Define object Books with parameters book_title,author,publisher,publication_date,price,ISDN,pages.
function book(book_title,author,publisher,publication_date,price,ISDN,pages){
    //The properties of object book are assigned to parameters respectively.
        this.book_title=book_title;
        this.Author=author;
        this.Publisher=publisher;
        this.publication_date=publication_date;
        this.price=price;
        this.ISDN=ISDN;
        this.page_numbers=pages;
    // A method read is created to describe behavior of object book.
       this.read=function (){
            console.log("Am a Book. They read me for entertainment and knowledge");
        } 
    }
    
    //Instances of the object book is created.
    var book1=new book("Harry Potter","JK. Rowling","Times","25/09/1999",150000,1585544555,3500);
    var book2=new book("Dancing in the Dark","Pauline Marlon","Spear Read","25/09/1999",100000,15248544555,2500);
    //Display properties and method of the new instances of object book.
    
    console.log(book1);
    book1.read();
    console.log(book2);
    book2.read();


