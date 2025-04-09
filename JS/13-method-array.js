console.clear();
//jei turime sarasa vartotoju, sarasas tuscias, nes nera vartotoju. ateina nauji ir kuriasi sarasa.
//naudojame .push

const list=[];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4,6);
console.log(list);

list.push(4,9,8);
console.log(list);

list.push(4,6,7,8);
console.log(list);

list.push(4,10,8,9);
console.log(list);
console.log('----1-----');
// pushinsime po viena nari
//pvz situacija

const numbers=[10,2,8,4,6];
//sugeneruoti nauja sarasa kuriame butu analogiski skaiciai, tik dvigubai didesni
const doubleNumber=[];
for (let i=0; i<numbers.length; i++){
    const number=numbers[i];
    console.log('---', number);
    

}

console.log('----*2*-----');

const numbers1=[10,2,8,4,6];
//sugeneruoti nauja sarasa kuriame butu analogiski skaiciai, tik dvigubai didesni
const doubleNumber1=[];
for (let i=0; i<numbers.length; i++){
    const number1=numbers1[i];
    doubleNumber1.push(number1*2)
    
    

}
console.log(doubleNumber1);

console.log('----3-----');

const names=['Jonas', 'Maryte','Petras','Ona'];
// sukurti masyva, kuriame bus itrauktas kiekvieno vardo ilgis ir kiekvieno vardo pirma raide

const nameSize=[];
const nameFirstLetters=[];
const upperCaseNames=[];

for(let i=0; i<names.length; i++){
    const name=names[i];
    console.log('---',name, name.length);
    nameSize.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toLocaleUpperCase());
    
}
console.log(nameSize);
console.log(nameFirstLetters);
console.log(upperCaseNames);


console.log('----4-----');
//pirmo ir antro masyvo turinys viename turinyje const n12=[1,11,111,2,22,222,2222]
const n1=[1,11,111]
const n2=[2,22,222,2222];
const n12=[];

for(let i=0; i<n1.length;i++){
    n12.push(n1[i]);
}
for(let i=0; i<n2.length;i++){
    n12.push(n2[i]);
}

console.log(n12);

console.log('----5-----');

const numbers2=[10,2,8,4,6];;
console.log(numbers2);
numbers2.push(2);
console.log(numbers2);

numbers2.pop(); //paskutinis elementas ismetamas
numbers2.pop(); //paskutinis elementas ismetamas
console.log(numbers2);

const g1=numbers2.pop(); //paskutinis elementas ismetamas
// ne tik pasalina bet ir grazina ka pasalino
const g2=numbers2.pop();
console.log(numbers2, g1, g2);

numbers1.unshift(1); //prideda nauja elementa i saraso pradzia
numbers2.unshift(2); //prideda nauja elementa i saraso pradzia
console.log(numbers2);

numbers2.shift(); //pirmas elementas ismetamas
const g3=numbers2.shift(); //pirmas elementas ismetamas
const g4=numbers2.shift(); //pirmas elementas ismetamas
console.log(numbers2, g3, g4);

console.log('----6-----');
// ar reiksme egzistuoja sarase?


const magic=[11,3,4,5,]
console.log(magic.includes(5));
console.log(magic.includes(44));

console.log(magic.indexOf(5));
console.log(magic.indexOf(44));


console.log('----7-----');
//padeti sukurti is saraso paimama teksta
const text=['namas','petras','labas','rytas'];
const home=`namuose yra like: ${text.join()}.`;
console.log(home);

//dazniausiai naudojamas kaip paskutinis irankis apjungti sarasa i viena teksta;

console.log('------8--------');
//tik masyve gali naudoti reversa, stringe jis netinka

console.log(text);
text.reverse();
console.log(text);

console.log('------9--------');
// concat apjungia masyvus
//apjungimo kiekis neribojamas pvz su push ribojamas tik iki2 masyvu


const c1=[1,11];
const c2=[2,22];
const c3=[3,33];
const c4=[4,44];

const c12=c1.concat(c2);
console.log(c12);

const c14=c3.concat(c4);
console.log(c14);

const c1234=c1.concat(c2,c3,c4);
console.log(c1234);

//galima pernaudoti ta pati masyva
const c111=c1.concat(c1,c1,c1);
console.log(c111);
console.clear();


console.log('------10--------');

//splice gali priimti du prarametrus strartine ir kiek elementu istrinti. nurodai nuo kurios pozicijos istrinti

const h=[11,22,33,44,55,];
console.log(h);

h.splice(1,3);
console.log(h);

console.log('***********');


// MAP is esamo mamsyvo, gauti nauja papildoma masyva

const k=[10,2,8,4,6];
//const k2=[20,4,16,8,12];
const k2=[];


//daugina is 2,3,4,5, taip pat gali prideti prie pagrindinio masyvo skaiciaus arba atimti
for (const n of k){
    k2.push(n*2);
}
console.log(k2);

function triple(n){
    return n*3;
}
const k3=k.map(triple);
console.log(k3);

const quadro=n=>n*4;
const k4=k.map(quadro);
console.log(k4);

const k5=k.map(n=>n*5);
console.log(k5);

const k6=k.map(n=>n);
console.log(k6);

const k7=k.map(n=>n-1);
console.log(k7);

const k71=k.map(n=>n+1);
console.log(k71);


const dict=['pomidoras', 'agurkas', 'bulve']; 
const dict2=dict.map(w=>w[0]); //randa pirma raide
console.log(dict2);

const dict3=dict.map(w=>w.length);  // randa ilgi
console.log(dict3);


const people=[
    {name:'Jonas', age: 99}, 
    {name:'Maryte', age:88},
    {name:'Petras', age:77},
    {name:'Ona', age:66},
];
const people100=people.map(person=>`${person.name} liko ${100-person.age} metai`);
/*[
    'Jonas liko 1 metai.
];
*/
console.log(people100);

// kaip padaryti masyva, kad butu tik tu asmenu vardai

const peopleNames=people.map(person=>person.name);
console.log(peopleNames)

const peopleAges=people.map(person=>person.age);
console.log(peopleAges)

//prideda papildo papildoma informacija
const peopleMarried=people.map(person=>{
    person.isMarried=true;
    person.luckyNumber=13;
    return person;
});
console.log(peopleMarried);


console.clear();
//FILTER


const p=[10,2,8,4,6];
const p5=[]
// i masyva sutraukti narius kurie yra didesni nei 5


for(const n of p){
    if (n>5){
        p5.push(n);
    }
}
console.log(p5);


/// filter pvz

const p6=p.filter(n=>n>6);
console.log(p6);


const p7=p.filter(n=>n<7);
console.log(p7);

const p8=p.filter(n=> n>2 && n<8);
console.log(p8);


const text5=['Labas','','rytas','', 'Lietuva'];

const text5Updated=text5.filter(t=>t.length>0);
console.log(text5Updated);

const text5Updated2=text5.filter(t=>t);  //geriau nenaudoti, praskipina nes tuscias tekstas yra negatyvus
console.log(text5Updated2);


console.log('**FILL***');

//fill - masyvo uzpildymas (kai reikia masyvo su pilnai uzpildyta reiksme)

//visos reiksmes masyve vienodos
const default5=[0,0,0,0,0];
//uzpildo masyve 7 kartus skaiciumi 99. globali f-ja.
const default7=Array(7).fill(99);
console.log(default7);

//array nurodo kiek vietu, o fill kokia reiksme turi buti uzpildyta

const zeros=Array(10).fill(0);
console.log(zeros);

//pvz
const negativees=Array(5).fill(false);
console.log(negativees);

const empty5=Array(10).fill('');
console.log(empty5);

const text6=Array(5).fill('taskas');
console.log(text6);

/////// gali pakeisti, bet naudojamas pagrindiam masyvui. pakeistu reiksmiu atstatyti negalima
const demo=[10,2,8,4,6]
console.log(demo);

demo.fill(777);

console.log(demo);


console.log('**EVERY***');

//every -  panasus i map ir filter. Salyga tenkinti turi visi

const trees=['uosis', 'egle', 'azuolas', 'tuopa'];
// ar visi siame masyve esantys zodziai yra ne tusti (s=medis)
const allTreesValid=trees.every(s=>s.length>0);
console.log(allTreesValid);

//ar visi tenkina 5 ar ne visi
const allTreesNameSize5=trees.every(s=>s.length===5);
console.log(allTreesNameSize5);

console.log('**SOME***');

//some = kai kurie. salyga turi tenkinti kai kurie (naudojam pvz medzius auksciau trees)

const someTreesValid=trees.some(s=>s.length>0);
console.log(someTreesValid);

const someTreesNameSize5=trees.some(s=>s.length===5);
console.log(someTreesNameSize5);

const someTreesNameSize10=trees.some(s=>s.length===10);
console.log(someTreesNameSize10);


console.log('**SORT***');
//sort - rykiavimas, nuo a iki z, nuo 0 iki 9. yra didelis skirtumas nuo tekstinio ir skaitmeninio

//atskiras file'as




console.log('**REDUSE***');
//reduse

















