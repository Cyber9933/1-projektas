/* skirtingi f-jos uzrasymo budai */

const n1=7;
const n2=5;


// function declaration

function sum (a,b) {
    return a+b;
}

console.log(`${n1}+${n2}=${sum(n1,n2)}`);

// kintamajam priskirta anonimine f-ja iskeliamas constai buves f-jos pavadinimas
const minus=function (a,b){
    return a-b; 
}
console.log(`${n1}-${n2}=${minus(n1,n2)}`);

// 3)arrow function, kad tamptu rodykline ismetame function ir pridedame' =>' uz f-jos pavadinimo
const multi= (a,b)=>{
    return a*b;
}
console.log(`${n1}*${n2}=${multi(n1,n2)}`);

// 3a)j
// jei logikos bloke tik viena reiksme, galima nereasyti{}, return ir funkija
const div=(a,b)=>a/b;

console.log(`${n1}/${n2}=${div(n1,n2)}`);
// 3b) arrow function
//jei parametru blokas turi TIK 1 parametra, galima nerasyti skliausteliu '(a)'

const sqr=a=> a*a;

console.log(`${n1}*${n1}=${sqr(n1)}`);
console.log(`${n2}*${n2}=${sqr(n2)}`);

  
// F-ja grazina vardo pirma raide
const firstLetter=name=> name[0];
    

console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));

// funkcija grazina vardo pirma raide didziosios raides
const correctName=name=>name[0].toUpperCase()+name.slice(1).toLowerCase();

    
console.log(correctName('JoNas'));
console.log(correctName('marytE'));
console.log(correctName('Petras'));     
console.log(correctName('OnA'));

console.log('********');

// funkcija grazina atbulini teksta

function reverseText(text){
    return text.split('').reverse().join('');
}
console.log(reverseText('labas.'));
console.log(reverseText('kedes'));
console.log(reverseText('alus'));
//////////////////////
const reverseText1=text=>text.split('').reverse().join('');

console.log(reverseText1('labas.'));
console.log(reverseText1('kedes'));
console.log(reverseText1('alus'));

console.log('********');



