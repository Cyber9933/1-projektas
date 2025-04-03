console.clear();
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1); // nera saugus skaicius skaiciavimui, nera garantijos, kad ilgalaikes perspektyvoje viskas saugiai susiskaiciuos

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER-1);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log('---------');


console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

console.log(isFinite('asdasd'));
console.log(isFinite(true));
console.log(isFinite({}));
console.log(isFinite([]));


console.log(isFinite(5),Number.isFinite(5));
console.log(isFinite(-3.14),Number.isFinite(3.14));
console.log(isFinite(Infinity),Number.isFinite(Infinity));
console.log(isFinite(NaN),Number.isFinite(NaN));

console.log(isFinite('asdasd'),Number.isFinite('asdasd'));
console.log(isFinite(true),Number.isFinite(true));
console.log(isFinite({}),Number.isFinite({}));
console.log(isFinite([]),Number.isFinite([5]));

console.log('---------');
//isInteger (ar sveikasis skaicius), patikrina kad dirbtume su skaiciaus tipo duomenimis

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(3,14));
console.log(Number.isInteger(-3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger([5]));

console.log('---------');

console.log(Number.isNaN(NaN),isNaN(NaN));  //vienintelis teisingas

console.log(Number.isNaN(5));
console.log(Number.isNaN(3.14));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.log(Number.isNaN(5),isNaN(5));
console.log(Number.isNaN(3.14),isNaN(3.14));
console.log(Number.isNaN(Infinity),isNaN(Infinity));
console.log(Number.isNaN(NaN),isNaN(NaN));


console.log(Number.isNaN('asd'),isNaN('asd'));

/*if(typeof a!== 'number') {

}  galime pasitikriname su typeof
*/
console.log(Number.isNaN([]),isNaN([]));
console.log(Number.isNaN({}),isNaN({}));

console.log('---------');
//kai user kazka paraso formoje, meta kaip teksta, prideda prie galo teksta pvz is apatiniu pvz - 22+5=225
const userInput='22'; 

const date=userInput+5;
console.log(date);


//jei daugyba, jei daugyba - leidzia skaiciuoti
const userInput1='22'; 

const date1=userInput1*5;
console.log(date1);


const userInput3='22'; 
const userNumber3=parseInt(userInput);// blogai- pasitikrinti
const date3=userInput3+5;
console.log(date3);

console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas')); // nera skaiciaus, todel atsiranda skaiciaus tipo klaida NaN
console.log(parseInt('labas111'));
console.log(parseInt('222labas')); // paima jei buna priekyje
// parse vyksta toks kol sekasi, t.y. iki pirmo ne skaiciaus. jis Naudojamas kaip iskaityti skaicius is stringo (teksto)

//sutvarkyti galima
console.log(parseInt('333labas222'.replace('labas','')));

console.log(parseInt('333labas222'.split('labas'))); //ismeta gala


console.log(parseInt(true));
console.log(parseInt('true'));
console.log('---------');


console.log(parseFloat('44'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('44.4'));
console.log(parseFloat('44,4'));

console.log(parseFloat('55.66Labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('--55')); //dvieju minusu nesupranta
console.log(parseFloat('-5-5'));
console.log(parseFloat('6-5'));
console.log(parseFloat('++5'));

// parseInt ir ParseFloat analizuoja skaicius. PSF ima ir desimtainius ir sveikuosius skaicius

console.log('---------');

//Number.Epsilon
const result=Math.abs(0.2-0.3+0.1)
console.log(result);
console.log(result<Number.EPSILON);

console.clear();

console.log('---------');
const a=12.3456789;
console.log(a);
console.log(typeof a);

console.log(typeof typeof a); //po antro karto naudojant typeof jis traktuojamas kaip stringas
console.log(typeof typeof typeof a);
console.log('string');

const b=a.toFixed(4) // grazina stringo tipo ir nukerta 4 arba nuo 0iki20 galutinius skaitmenis
console.log(b);
console.log(typeof b);

const c=parseFloat(b) // atgal po typeof grazina i number
console.log(c);
console.log(typeof c);

console.log((3.14.toFixed(1)));







