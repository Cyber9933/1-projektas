console.clear();
let zodis='';
if(4>2){
    zodis='daugiau';
}else{
    zodis='maziau';
}

console.log(zodis);

let skaicius = 0;
if(7<=5){
    skaicius=7;

}else{
    skaicius=5;
}
console.log(skaicius);

// viena ternary eilute atitinka if-else. termopy dazniausia buna 3 dalys
const word=4>2?'daugiau':'maziau';
console.log(word);

const number=7<=5?7:5;
console.log(number);

const year=22;
const isAdult=year>=18?'suauges':'nesuauges';
console.log((isAdult));


const value=7;
const type=typeof value==='number'?'skaicius':'ne skaicius';
console.log(type);

console.log('------------------');

//visi skaiciai yra pozityvus iskyrus 0, todel if()skliaustuose uztenka parasyti skaiciu
//jei skaicius yra 0 jis yra negatyvas, tai bus false, jei bet koks kitas skaicius bus true
if(0){
    console.log('taip');
       
}else{
    console.log('NE');    
}
// ribinis atvejis su stringais, kai jis yra tuscias "if ('')", visi kiti pozityvus

if('pozityvas'){
    console.log('taip');
       
}else{
    console.log('NE');    
}


// su array, kai jis yra tuscias "if ([])", visi atvejai bus pozityvus
if([]){
    console.log('taip');
}
        else{
            console.log('NE');    
        }                               
    


// su objektais, kai jis yra tuscias "if ({})", visi atvejai bus pozityvus
if({}){
    console.log('taip');
}
        else{
            console.log('NE');    
        }


// su undefined, jis visada bus false
if(undefined){
    console.log('taip');
}
        else{
            console.log('NE');    
        }


        // su null, jis visada bus false    

if(null){
    console.log('taip');
}                                       

console.clear();
console.log('**************');


const a=0?1:2;
console.log(a);


const b=1?2:3;
console.log(b);


// geriau tai nedaryti su ternary daugiau nei su 3 duomenimis kaip zemiau const b=1|?2|:3; (iskaidymas)



const c=2
    ?3
        ?4
        :5
    :6;
console.log(c);

const d=0?1:2?3:4;
console.log(d);


const e=1?2?3:4:5?6:7;
console.log(e);


//unari (vienas)= vienos kryptie vienas veiksmas
//binari(du)+,-,*,/ - is abieju pusiu
// ternary(trys) ?:

