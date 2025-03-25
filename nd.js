/*
#Kintamųjų inicijavimas

1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console;

2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console;

3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console;

4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console;
*/
console.log('Kintamuju inicijavimas');
console.log('-----1----');
const a=1;
console.log(a);

const b=4;
console.log(b);

const c=(a+b);
console.log(c);
console.log('-----2----');

const a1='kovas';
console.log(a1);

const a2='balandis';
console.log(a2);

const a3='geguze';
console.log(a3);
console.log('-----3----');

let run='1,2,3,4,5';
console.log(run);

let piene=8
console.log(piene);
piene=10;
console.log(piene);
piene=12;
console.log(piene);
piene=14;
console.log(piene);
piene=16;
console.log(piene);

console.log('----');
let bus=20
console.log(bus);
bus=30;
console.log(bus);
bus=40;
console.log(bus);
bus=50;
console.log(bus);
bus=60;
console.log(bus);

console.log('----');
let oras='+3';
console.log(oras);

oras='+5';
console.log(oras);

oras='+7';
console.log(oras);

oras='+9';
console.log(oras);

oras='+15';
console.log(oras);

console.log('----');

let piene1=100;
console.log(piene1);

piene1=piene1+10;
console.log(piene1);

piene1=piene1-10;
console.log(piene1);

piene1=piene1*10;
console.log(piene1);

piene1=piene1/10;
console.log(piene1);

piene1=piene1**10;
console.log(piene1);

piene1=piene1%10;
console.log(piene1);


console.log('-----4----');

let kiemas='pieva, gele, terasa, magnolija, sofa';
console.log(kiemas);

let vasara='ezeras, jura, atostogos, saule, nudegimas';
console.log(vasara);

let darbas='stalas, kompiuteris, ausines, akys, monitorius';
console.log(darbas);

console.log('----------VEIKSMAI SU KINTAMAISIAIS');

/*Veiksmai su kintamaisiais

1.Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, 
jog tarp jų būtų kablelis ir tarpas
*/

console.log('-----1------');

let d=a+b+c;
console.log(d);

console.log('-----2-----');

let a4=a1+' '+a2+' '+a3;
console.log(a4);

console.log('-----3-----');

const sum=1-2+3-4+5;
console.log(sum);

console.log('-----4-----');

const sakinys='ka galvoji,' ;
const sakinys2='pavasaris?';
console.log(sakinys+' '+sakinys2);




/*
Kintamųjų palyginimas
Priklausomai nuo sąlygos, 
susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), 
tai į console išvesti žodį “Pomidoras”, 
o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

*/


const p1='Pomidoras';
const bkk='Bandykite dar karta.';

/* skaiciu daugyba
*/
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));