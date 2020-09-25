// A  variable name is declared or defined
var name;
//The variable name is initialized with a value "ozzy zainab" 
name = " ozzy zainab";

//console.log outputs the value of the variable name,value " ozzy zainab" will displayed
console.log(name);
//console.log outputs string <br/>
console.log("<br/>");

// The variable name is re-declared or defined
var name;
// The variable name is initialized with value "ozzy emma otim" replacing the value "ozzy zainab"
name = "ozzy emma otim ";

//console.log outputs the value of the variable name,value "ozzy emma otim " will displayed
console.log(name);

// The variable name is re-declared
var name;
//The variable name is initialized with value "marrie jacob ozyy" replacing the value "ozzy emma otim "
name = "marrie jacob ozyy";
//console.log outputs the value of the variable name,value "marrie jacob ozyy" will displayed
console.log(name);
//The variable name is re-declared or defined
var name;
//The variable name is initialized with value " ozzy diane" replacing the value "marrie jacob ozyy"
name = " ozzy diane";
//console.log outputs the value of variable name,value " ozzy diane" will displayed
console.log(name);
//variable name is initialised with value "joanita paul ozzy " replacing the value " ozzy diane"
name = "joanita paul ozzy ";
//console.log outputs the value of variable name,value "joanita paul ozzy " will displayed
console.log(name);
//A variable age is declared or defined
var age;
// Variable name is re-declared or defined
var name;
//the variable age of data type number is initialised with value 50
age = 50;
// variable name  of data type string is initialised with value "rino monica nicholus"
name = "rino monica nicholus";
/*
document.write outputs strings and values of variables name and age.
document.write outputs specified texts to a page. In this case , the code on line 48 will incurr an error"document is not defined", because
document object is not part of the core javascript language.
document.write is written to run in a browser javascript environment where document object is defined.
*/
document.write("My name is " +name +" "+ "and I am "+age+" "+" years old");
// A variable x is declared or defined
var x;
//document.write outputs value of variable x,output being undefined since the variable was not initialised
//Additionally, this code will return an error because its not being run on a browser environment.
document.write(x);
//variable x is declared and is initialised with a value undefined.
var x = undefined;
//the console.log displays or outputs the value of the variable x.
console.log(x);
