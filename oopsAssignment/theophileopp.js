/**
You miss understood the assignment, i wanted you to use ..this..new..keywords.

*/

// First object
var bicycle ={
    color: 'White',
    frame: 'Urban',
    stem: 'Allay',
    brakes: 'Front Brakes',
    owner:'Theo',
    size:'26inch',
    pedals:'Platform pedals',
    }
console.log(bicycle.color);
console.log(bicycle.frame);
console.log(bicycle.stem);
console.log(bicycle.brakes);
console.log(bicycle.owner);
console.log(bicycle.size);
console.log(bicycle.pedals);

function bicyle (color,frame,stem,brakes,owner,size,pedals) {
    this.color = color;
    this.frame = frame;
    this.stem =stem;
    this.brakes = brakes;
    this.owner = owner;
    this.size = size;
    this.pedals = pedals;
}

var bicycle1 = new bicycle( 'white','Urban','Allay','Front Brakes','Theo','26inch','platform pedals'),
var bicycle2 = new bicycle ('Black','Sport','Allay6','Promax','Sam','34inch','Pure pedals'),
console.log(bicycle1.ring);

// Second object
let phone ={
    color:'White',
    camera:'32 MP',
    processor:'Samsung octa 9611',
    display:'6.4inches',
    ram:'6 GB',
    noOfCameras:'3',
    model:'Samsung 11',
name :function name(){
    console.log('my phone');
}
 }
// Third object
 let shoe ={
    color:'Red',
    type:'Nike',
    size:'41',
    state:'Good condition',
    owner:'James',
    shop:'James shop',
    heelSupport:'stable',
name :function name(){
    console.log('my shoe');
}
 }
//Fourth object
 let watch ={
    color:'Black',
    model:'Rolex',
    type:'leather',
    Material:'Cooper',
    owner:'Tim',
    size:'40 mm',
    movementType:'Automatic',
name :function name(){
    console.log('my watch');
}
 }
 //Fifth object
 let bed ={
    color:'Black',
    type:'Wooden',
    make:'Kisenyi furniture',
    height:'29inches',
    plywood:'12 mm wooden ply',
    noOfDrawers:'3',
    name: function(){
        console.log('my bed');

    }
}
//Sixth object
let camera ={
    color:'Black',
    model:'Nikon',
    resolution:'3 MP',
    powerConsumption:'8.5 W',
    angleOfView:'50mm lenses',
    weight:'218g',
    format:'Dx',
    name: function(){
        console.log('my camera');

    }
}
//Seventh object
let radio ={
    color:'Green',
    size:'0.6',
    type:'Sonitec',
    frequencyBand:' 75Ghz',
    modulation:'QPSK',
    receptionMethod:'Super heterodyne',
    operatingTemperature:' -30 degree',
    name: function(){
        console.log('my radio');
    }
    }
