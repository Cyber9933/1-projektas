console.clear();


function empty (){
    //logika 
}
const a=empty();
console.log(a);

console.log(empty());

function penki() {
    return 5;
}
const c=penki();
console.log(c);

function hi() {
    return 'Labas';
}
const d=hi();
console.log(d);


// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function HiPerson(name) {
    //return `Labas,'+ name+ '!'`;
    return `Labas, ${name}`;
}
console.log(HiPerson('Jonas')); 
console.log(HiPerson('Maryte'));
console.log(HiPerson('Petras'));    
console.log(HiPerson('Ona'));   

//2+2=4
//7+5=12

function sum(firstNumber, seondNumber) {
    return firstNumber+seondNumber;
}
const e = sum (2, 2);
console.log(e);

const f = sum (7, 5);
console.log(f);

const g=sum(-7, 15);
console.log(g);

//100->121 Eur
//200->242 Eur
//73->88.33 Eur

function priceWithVAT (price) {
    const updatedPrice=price*1.21;
    
    return updatedPrice + ' Eur';
}

const p1=priceWithVAT(100);
console.log(p1);

const p2=priceWithVAT(200);
console.log(p2);    

const p3=priceWithVAT(73);
console.log(p3);

console.clear();

// Jonas -> Zodzis "Jonas" yra sudarytas is 5 raidziu.
// Maryte -> Zodzis "Maryte" yra sudarytas is 6 raidziu.
// Petras -> Zodzis "Petras" yra sudarytas is 6 raidziu.
// Ona -> Zodzis "Ona" yra sudarytas is 3 raidziu.

function nameLength(name) {
    const size =name.length;
        return `Zodzis "${name}" yra sudarytas is ${size} raidziu.`;
}
const nl1=nameLength('Jonas');
const nl2=nameLength('Maryte');
const nl3=nameLength('Petras');
const nl4=nameLength('Ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);


//5-> Gautas skaicius 5.
// -13-> Gautas skaicius -13.
// 777-> Gautas skaicius 777.

function gotNumber(n) {
    return `Gautas skaicius: ${n}.`;
    //return 'Gautas skaicius:' + n + '.';
}
const gn1=gotNumber(5);
const gn2=gotNumber(-13);
const gn3=gotNumber(777);


console.log(gotNumber(5));
console.log(gotNumber(-13));
console.log(gotNumber(777));

// 2025 Pavasaris 2025
// 2025 Vasara 2025
// 2025 Ruduo 2025

function metuLaikai(metai) {
    return `Sezonas: ${metai}.`;
}
const mt1=metuLaikai('Pavasaris');
const mt2=metuLaikai('Vasara');
const mt3=metuLaikai('Ruduo');

console.log(metuLaikai('Pavasaris'));
console.log(metuLaikai('Vasara'));
console.log(metuLaikai('Ruduo'));


//2,2 -> 2+2=4
//7,5 -> 7+5=12
//-5,7 -> -7+15=2

function sum(a, b) {
    const c= a+b;
    return `${a} + ${b} = ${c}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));


//ND - perdaryti analogiskai su -,*,/

//2,2 -> 2-2=0
//7,5 -> 7-5=2
//-5,7 -> -7-15=-22

function metuLaikai(metai) {
    return `Sezonas: ${metai}.`;
}
const mt4=metuLaikai('Pavasaris');
const mt5=metuLaikai('Vasara');
const mt6=metuLaikai('Ruduo');

console.log(metuLaikai('Pavasaris'));
console.log(metuLaikai('Vasara'));
console.log(metuLaikai('Ruduo'));



function sum(a, b) {
    const c= a+b;
    return `${a} + ${b} = ${c}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));

console.log('......................');
function sum(a1, b1) {
    const c1= a1-b1;
    return `${a1} - ${b1} = ${c1}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));
console.log('------------------------');

function sum(a2, b2) {
    const c2= a2*b2;
    return `${a2} * ${b2} = ${c2}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));


console.log('----------------------')

function gotNumber(n) {
    return `Gautas skaicius: ${n}.`;
    //return 'Gautas skaicius:' + n + '.';
}
const gn4=gotNumber(5);
const gn5=gotNumber(-13);
const gn6=gotNumber(777);


console.log(gotNumber(5));
console.log(gotNumber(-13));
console.log(gotNumber(777));