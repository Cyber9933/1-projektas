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
//1-2+3-4+5;

const sum=[1,2,3,4,5];
const visaSuma=sum[0]-sum[1]+sum[2]-sum[3]+sum[4];

console.log(visaSuma);





function suma(num1, num2, num3, num4, num5) 
{
    return num1-num2+num3-num4+num5;
}
const sk=suma(1,2,3,4,5);
console.log(sk);


console.log('-----4-----');


const tekstas=['dar','ne','visai','atejo','pavasaris'];
const visasTekstas=tekstas[0]+','+' '+tekstas[1]+','+' '+tekstas[2]+','+' '+tekstas[3]+','+' '+tekstas[4];

console.log(visasTekstas);






/*
Kintamųjų palyginimas
Priklausomai nuo sąlygos, 
susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), 
tai į console išvesti žodį “Pomidoras”, 
o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

*/
console.log('----- KINTAMUJU PALYGINIMAS-----');
console.log('-----1-----');

const pom=('Pomidoras');
const Bando=('Bandykite dar karta.');

function pavadinimas () {

}
console.log('Pomidoras');
if (4>2) {
console.log('Bandykite dar karta.');
}



function palyginimas()
{
  

    if(sk>8)
    {
        console.log("10 didesnis");
    }
    const temp3=-55;

    if (temp3<0) {
        console.log('Salta');
    }

    if (temp3<10){
        console.log('Ne');
    } 

    if (temp3<22){
        console.log('Silta');      
    }else{
        console.log('Karsta');
    }
    
}      
 
   
    


/* skaiciu daugyba
*/
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

console.log('----------CIKLO for PANAUDOJIMAS----------');

console.log('----------1----------');
/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30


*/
function intervalSum(start, end){
    let sum=0;
    for (let i=start; i<=end; i++){
        sum+=i;
    }
    return sum;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));


console.log('----------2----------');
/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

*/


function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}
console.log(stringReverse('vasara'));





console.log('----------3----------')

/*  
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


*/

/*
function countDivisibleNumbers(start, end) {
    // Skaičiuojame skaičius, besidalijiančius be liekanos iš 3
    let countBy3 = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            countBy3++;
        }
    }
*/
function countNumbers(start, end, divider) 
{
    let count = 0;

    const trueStart = start;
    for (let i = trueStart; i <= end; i += divider) {
        count++;
   }
    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
}



console.log(countNumbers(0, 11));
console.log(countNumbers(8, 31));
console.log(countNumbers(-18, -18));

console.log('-------------');
