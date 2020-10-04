//Initialised a function tests and provided arguements of test1, and test2.3 
function tests(test1,test2){

// assigning varriable greater with a value of test2>test1?:test2.
let greater = test2>test1?test1:test2
//Print the answer in greater on the console .
return greater

}

// Iniatialised a function coursework and have given it an  arguement of cswork.
 function coursework(cswork){
 
 //
 let coursework = cswork + tests(80,80)

 console.log(coursework)
 //print the answer i have gotten in  coursework on the screen.
return coursework

 }

//Iniatialised a function called avg.
function avg(a){

// Iniatialising a function called avg and giving it a parameter inside it with an arguement called a.
let avg =coursework(90)/a

//asignning coursework(90)/a with a value of (90)/a to varriable avg.
return avg

}

//Print out the value in avg on my  screen .
function crsmark(a){

// Iniatialised a function and called it crsmark and given it a parameter and passed an arguement a into it.
let exm = avg(2)*(a/100)
// assigning varriable exm and calculating the avg(2)*(a/100).
 return exm
}

//Print out the value / answer i have got from exm .

function exam(a){

let fexam = (60/100)*a

//asigning variable fexam and giving it a value of (60/100)*a.
return fexam

}

//Print the value in fexam on my screen .

function fnal(){

// Iniatialised a function and called it fnal.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//assigning fmark and giving it a value called exam and crsmark .

fnal()
/**
**/ //This is a multi block line comment .
function tests(test1,test2)
{
// iniatialised a function and called it tests and have provided arguments of test1 and test2 in the parameters.
let greater = test2>test1?test1:test2
// am assigning greater and testing whether the statement is true or false or otherwise .
return greater

}

//Greater will return the answer of test2>test1?test1:test2.
 function coursework(cswork)
 {
 //inaitlisied a function called coursework and given it an arguement in the paremeter called cswork.
 let coursework = cswork + tests(80,80)

 console.log(coursework)
 // Print the result in coursework on my screen .
return coursework
 //Error missing clossing bracket.


// Iniatialised a function and called it avg and have given it an arguement a in the aparameter.
function avg(a)
{

// assigned avg and given it a value called coursework(90)/a.
let avg =coursework(90)/a

// Print out the answer our value i stored in memory coursework.
return avg

}

// initialised a function and called it crsmark and given it an arguement called a in the parameter.
function crsmark(a)
{
// assigned exm and given it a value avg(2)*(a/100).
let exm = avg(2)*(a/100)
// Print the value of exm on my screen .
 return exm
}

// iniatialised a function exam and given it an arguement called (a).

function exam(a)
{

let fexam = (60/100)*a

// Print out the value of fexam on the screen .
return fexam

}

// iniatialised a function and called it fnal and have not passed any arguement in the parameter.

function fnal()
{

// assigned varriable fmark to exam and given it a value.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Calling function fnal .

fnal()
/**
 The code has failed to run because its missing a closing bracket(})
 between line  89 and when i fixed it worked .
**/ 
 