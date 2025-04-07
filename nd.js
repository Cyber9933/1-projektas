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
function tusciaFunkcija(){
  return false;
}
console.log(tusciaFunkcija());


console.log('-----2. Funkcija pavadinimu "Daugyba"');
/*
function daugyba(a,b){
  return a*b;
}
console.log(daugyba(2,7));
*/
function multiply(a,b){
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'turi buti skaicius';
  }
    return a*b
}

console.log(multiply(2,5));
console.log(multiply(-2,5));
console.log(multiply(-2,-5));
console.log(multiply(2,8));
console.log(multiply(2,'labas'));
console.log(multiply('rytas',8));






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

      // bandy
      // 
      // 
function sumOfPositives(arr) {

  let sum = 0;
  
  // Einame per kiekvieną masyvo elementą
  for (let i = 0; i < arr.length; i++) {
    // Jei skaičius teigiamas, pridedame jį prie sumos
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  
  return sum;
}
const result = sumOfPositives([1, -4, 7, 12]);
console.log(result);


//
//
function findUniq(arr) 
{
    let difNo=0;

    for (let i=0; i<arr.legth; i++ ){

    if(arr[i]<difNo)
    {

    difNo=arr[i]
    }
}
    return difNo;
}   

  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) ;


  function validatePIN (pin) {
    if (pin.length!==4){
      return false;
    }
    for(let i=0; i<pin.length; i++){
        if (pin[i]<'0'||pin[i]>'6'){
      return false;
    }
  }
  return true;
}
console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));

/*

function arrayMadness(a, b) {
    // Skaičiuojame kvadratų sumą pirmajam masyvui ir kubų sumą antrajam
    let sumSquares = 0;

    let sumCubes = 0;
    
    // Skaičiuojame pirmojo masyvo kvadratų sumą
    for (let i = 0; i < a.length; i++) {
      sumSquares += a[i] * a[i];
    }
    
    // Skaičiuojame antrojo masyvo kubų sumą
    for (let i = 0; i < b.length; i++) {
      sumCubes += b[i] * b[i] * b[i];
    }
    
    // Grąžiname palyginimo rezultatą
    return sumSquares > sumCubes;
  }
console.log(arrayMadness([4,5,6],[1,2,3]));

*/


function arrayMadness(a, b) {
    let number1=0;
      let number2=0;
      for( let i=0; i<a.length; i++){
        number1+=a[i]*a[i];
      }
      for (let i=0;  i<b.length; i++){
        number2+=b[i]*b[i]*b[i];
      }
      return number1>number2
    }
    console.log(arrayMadness([4,5,6],[1,2,3]))


    console.log('------------------');
    

    function NumberDif(skaicius) {
        // Paverčiam skaičių į tekstą
        let numberText = "" + skaicius;
        
        // Rezultatų masyvas
        let dalys = [];
        
        // Einame per kiekvieną skaitmenį
        for (let i = 0; i < numberText.length; i++) {
          let skaitmuo = numberText[i] * 1; // Paverčiam simbolį į skaičių padauginant iš 1
          
          // Jei skaitmuo nėra nulis
          if (skaitmuo !== 0) {
            // Apskaičiuojame daugiklį rankiniu būdu
            let daugiklis = 1;
            for (let j = 0; j < numberText.length - i - 1; j++) {
              daugiklis = daugiklis * 10;
            }
            
            // Pridedame rezultatą į masyvą paprastesniu būdu
            dalys[dalys.length] = skaitmuo * daugiklis;
          }
        }
        
        // Sujungiame dalis rankiniu būdu
        let rezultatas = "";
        for (let i = 0; i < dalys.length; i++) {
          rezultatas = rezultatas + dalys[i];
          // Pridedame pliuso ženklą, jei tai ne paskutinis elementas
          if (i < dalys.length - 1) {
            rezultatas = rezultatas + " + ";
          }
        }
        
        return rezultatas;
      }
      
      // Išbandome su pavyzdžiais
      console.log(12 + ' --> "' + NumberDif(12) + '"');
      console.log(45 + ' --> "' + NumberDif(45) + '"');
      console.log(70304 + ' --> "' + NumberDif(70304) + '"');


      function skaiciuPakeitimas(skaicius) {
        let tekst = "" + skaicius;
        let ats = "";
        
        for (let i = 0; i < tekst.length; i++) {
          let sk = tekst[i];
          
          if (sk !== "0") {
            let nuliai = "";
            for (let j = 0; j < tekst.length - i - 1; j++) {
              nuliai += "0";
            }
            
            if (ats !== "") {
              ats += " + ";
            }
            
            ats += sk + nuliai;
          }
        }
        
        return ats;
      }
      
      console.log(12 + ' --> "' + skaiciuPakeitimas(12) + '"');
      console.log(45 + ' --> "' + skaiciuPakeitimas(45) + '"');
      console.log(70304 + ' --> "' + skaiciuPakeitimas(70304) + '"');


      /*
12 --> "10 + 2"
45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
      */


/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  console.log(reverseWords("This is an example!"));
  console.log(reverseWords("double  spaces")); 
console.log('-------');

  console.log('Bepasikulversciaudamasis'.includes('a'));
  console.log('Pomidoras'.indexOf('a'));

  console.log('hello case'.toLocaleLowerCase());
console.log('camel case word'.toLocaleLowerCase());

console.log('camel case word'.split(' ').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(''));
// neteisingas sprendinys zemiau codewars
console.log(`"camel case" -->'`+'camel case'.split(' ').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(''));
console.log(`"camel case word" -->'`+'camel case word'.split(' ').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(''));

function toCamelCase(str) {
  let words = str.split(' ');
  let result = '';
  
  for (let word of words) {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  return result;
}
console.log(toCamelCase(`camel case word`)); 
  console.log(toCamelCase(`hello case`)); 
  console.log('**********');
  

  function digitCount(n) {
    if (typeof n !== 'number') {
        return 'Reikalingas skaicius.';
    }

    // if (n === Infinity || n === -Infinity || isNaN(n)) {
    //     return 'Reikalingas normalus skaicius.';
    // }

    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
    }

    const numberAsString = '' + n;
    let count = numberAsString.length;

    if (n % 1 !== 0) {
        count--;
    }
    if (n < 0) {
        count--;
    }

    return count;
}

console.log(digitCount(10));


function digitSum(number) {
  
  let numStr = Math.abs(number).toString();
  let sum = 0;
  
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  
  return sum;
}
console.log(digitSum(10));
console.log(digitSum(99));
console.log(digitSum(-32));


console.log('------------------');

function check(a, x) {
  if (a.length === 0) {
      return false;
  }

  for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
          return true;
      }
  }

  return false;
}




function basicOp(operation, value1, value2){
  const func={
    '+':(value1, value2)=>value1+value2,
    '-':(value1, value2)=>value1-value2,
    '*':(value1, value2)=>value1*value2,
    '/':(value1, value2)=>value1/value2,
    
  };
    const optionToUse=func[operation]
    if(optionToUse===undefined){
    return 0;
  }
  return optionToUse(value1, value2)
  }

  console.log(basicOp('+', 4, 7)); // Expected output: 11
  console.log(basicOp('-', 15, 18)); // Expected output: -3
  console.log(basicOp('*', 5, 5)); // Expected output: 25
  console.log(basicOp('/', 49, 7)); // Expected output: 7


  console.log('**********');
  
  /*
for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier
  */

/*function alienLanguage(str) {
    return str.split(' ').map(word => {
        return word.split('').map((ali, index) => {
            if (index % 2 === 0) {
                return ali.toUpperCase();
            } else {
                return ali.toLowerCase();
            }
        }).join('');
    }).join(' ');
}
console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));

*/

/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
    // Remove leading and trailing whitespace and split the string into words
    const words = str.trim().split(/\s+/);

    // If the resulting array is empty, return false
    if (words.length === 0){
        return false;
    }

    // Capitalize each word and join them with a hashtag
    const hashtag = '#' + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    // If the length of the hashtag is greater than 140 characters, return false
    return hashtag.length > 40 ? false : hashtag;
}
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(' '));


console.log('**********');  

/*

*/