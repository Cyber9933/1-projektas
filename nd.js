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
//a. kuris didesnis

const num10=3;
const num11=5;

if (num10<num11) {
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.'); 
}

// b. kuris mazesnis

if (num10>num11) {
    console.log('Pomidoras');
}else{
    console.log('Bandykite dar karta.!');
    
}


//c. ar jie lygus?

if (num10===num11){
    console.log('Pomidoras');   
}else{
    console.log('Bandykite dar karta!');
    
}

// d. ar jie nelygus?

if (num10!==num11){
    console.log('Pomidoras');
    
}else{
    console.log('Bandykite dar karta!')
}

// e. kuris didesnis arba lygus
if (num10>=num11)
{
    console.log('Pomidoras');
    
}else{
    console.log('Bandykite dar karta!');
    
}



// f. kuris mazesnis arba lygus
if (num10<=num11){
    console.log('Pomidoras');
}else{
    console.log('Bandyk dar karta!');
    
}

console.log('---------2----');
// Isvesti  teksto tipo kintamajiuju ilgius
 const ilgis1='Pomidoras'
 const ilgis2='Bandyk dar karta!'
 console.log(ilgis1.length);
 console.log(ilgis2.length);
 
 

console.log('---------3----');
//tarpusavyje palyginte teksto tipo kintamuju ilgius
//a. kuris didesnis
if (ilgis1.length>ilgis2.length){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!')
};

//b. kuris mazesnis

if (ilgis1.length<ilgis2.length){
    console.log('Pomidoras');
    
}else {
    console.log('Bandyk dar karta!')
};

//c. ar jie lygus
if (ilgis1.length===ilgis2.length){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
};

//d. ar jie nelygus

if (ilgis1.length!==ilgis2.length){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
}
//e. kuris didesnis arba lygus
if (ilgis1.length>=ilgis2.length){
    console.log('Pomidoras');
    
}else {
    console.log('Bandyk dar karta!');
    
};

//f. kuris mazesnis arba lygus

if (ilgis1.length<=ilgis2.length){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
};
console.log('---------4---');
// Isvesti saraso tipo kintamaji


const sar1=['Pomidoras','BandykDarKarta'];


console.log(sar1.length);


console.log('---------5---');
// Tarpusavyje palyginti saraso tipo kintamuju ilgius:
// a. kuris didesnis
if (sar1.length[0]>sar1.length[1]) {
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!')
    
};

// b. kuris mazesnis

if(sar1.length[0]<sar1.length[1]){
    console.log('Pomidoras');
    
}else{
   
        console.log('Bandyk dar karta!')
            
}
// c. ar jie lygus

if (sar1.length[0]===sar1.length[1]){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
}


// d. ar jie nelygus

if (sar1.length[0]!==sar1.length[1]){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
}
// e. kuris didesnis arba lygus

if (sar1.length[0]>=sar1.length[1]){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
}
// f. kuris mazesnis arba lygus
if (sar1.length[0]<=sar1.length[1]){
    console.log('Pomidoras');
    
}else{
    console.log('Bandyk dar karta!');
    
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


function atvirksciai(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}
console.log(atvirksciai('vasara'));





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

function stringReverse(text) {
    if (typeof text !== 'aeiouAEIOU') {
        return '!!!!!!!!!';
    }

    let result1 = '';

    for (let i = 0; i < text.length; i++) {
        result1 = text[i] + result1;
    }

    return result1;
}
console.log(stringReverse('aeiouAEIOU'));






function pakeisti(tekstas)
{
    let rezultatas1='';
    for(let i=0; i<tekstas.length; i++)
    {
    let raide=tekstas[i];
    if (raide==='a'|| raide==='e'|| raide==='i'|| raide==='o'|| raide==='u'|| raide==='A'|| raide==='E'|| raide==='I'|| raide==='O'|| raide==='U')
    {
        rezultatas1=rezultatas1+'!';
    }
    else
    {
        rezultatas1=rezultatas1+raide;
    }
    }
    return rezultatas1
}

let naudTekastas='aeiouAEIOU';
let naujTekastas=pakeisti(naudTekastas);
console.log(naujTekastas);


function highAndLow(numbers) {
    
    const numArray = numbers.split(" ").map(Number);
    
   
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    
    
    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 9 3 4 -5")); // "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"




//-1  =>  false
 //0  =>  true
 //3  =>  false
 //4  =>  true
//25  =>  true
//26  =>  false

function calculator(a,b){
    return a+b;
  }
  console.log(calculator(1,2));

 
  
    
 
  /*       CODEWARS
  
  Complete the function which returns the weekday according to the input number:

  1 returns "Sunday"
  2 returns "Monday"
  3 returns "Tuesday"
  4 returns "Wednesday
  5 returns "Thursday"
  6 returns "Friday"
  7 returns "Saturday"
  Otherwise returns "Wrong, please enter a number between 1 and 7" 
  */ 



 /*function whatday(num){
    const days=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday' ];
    return days[num-1]||'nera'
 };
 console.log(whatday(1));
 console.log(whatday(2));
 console.log(whatday(3));
 console.log(whatday(4));
 console.log(whatday(5));
 console.log(whatday(6));
 
 */
/*



*/

console.log('-------FUNKCIJOS------------');
console.log('-----1. Funkcija pavadinimu "tusciaFunkcija"');
// a. nepriima jokiu kintamuju;


// b. neatlieka jokios vidinies logikos;


// c. grazina boolean tipo reiksme "false"


// d. TESTAS: console.log(tusciaFunkcija());          rezultatas:false
/*
const chai = pakeist("visa");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
});
*/
console.log('-----2. Funkcija pavadinimu "Daugyba"');

console.log('-----3. Funkcija pavadinimu "skaitmenuKiekisSkaiciuje"');

console.log('-----4. Funkcija pavadinimu "Funkcija pavadinimu "didziausiasSkaiciusSarase"');

function penkiKeturi(list)
{   
    let penki=0;
    for(let i=0; i<list.length;i++){
        if(list[i]>penki){
            penki=list[i];
        }
    }
    return penki;
}
console.log(penkiKeturi([1]),'number --->', 1);
console.log(penkiKeturi([4]),'number --->', 4);

console.log(penkiKeturi([3,2,7]),'number --->', 3);
console.log(penkiKeturi([3,-2,3]),'number --->', 3);


console.log('-----5. Funkcija pavadinimu "isrinktiRaides"');

console.log('-----6. Funkcija pavadinimu "dalyba"');






/* CODEWARS
function DNAStrand(dna) {
 
    const complements = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
    

    return dna.split('').map(nucleotide => complements[nucleotide]).join('');
  }
    console.log(DNAStrand("ATTGC")); 
    console.log(DNAStrand("GTAT"));  

    */

    /* function bouncingBall(h, bounce, window) {
        
        if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
          return -1;
        }
        

        let count = 1;
        
       
        let height = h * bounce;
        
   
        while (height > window) {

          count += 2;
          
     
          height *= bounce;
        }
        
        return count;
      }
      console.log(bouncingBall(3,0.66,1.5));
      console.log(bouncingBall(3,1,1.5))
      */

      // bandymas