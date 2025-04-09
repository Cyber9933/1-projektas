
console.clear();
console.log('**SORT***');
//sort - rykiavimas, nuo a iki z, nuo 0 iki 9. yra didelis skirtumas nuo tekstinio ir skaitmeninio
//methodas
//naudoja tik kompiuterine abecele. Didziosios raides visada priekyje



//pvz su tekstais

console.log('**Su ABECELE***');


const texts=['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis','Anakonda'];
console.log(texts);

texts.sort();
console.log(texts);

// rykiuoja pagal pirma simboli, eilei pasibaigus, pagal antra, tada trecia ir t.t.
const pseudo=['d', 'b','ca','bf','cc','db', 'caa'];
pseudo.sort();
console.log(pseudo);


console.clear();
console.log('**Su SKAICIAIS***');

//vienetas(1) visada eina priekyje
const numbers0=[10,2,8,4,23,1,6].sort();
console.log(numbers0);


// sorto viduje yra rodykline formule (skaiciams) prisideda formule (a,b=>a-b)
const numbers=[10,2,8,4,23,1,6].sort((a,b)=>a-b); // a-b didejanti
console.log(numbers);

// sortinimas vietomis sukeiciant a ir b

const numbers2=[10,2,8,4,23,1,6].sort((a,b)=>b-a); //b-a mazejanti
console.log(numbers2);

//minusas tarp a ir b naudojamas tik tada , kai f-ja grazina neigiama skaiciu

console.log('**Su masyvais PVZ***');

const people=[
    { name:'Maryte', age: 88, isMarried: true},
    { name:'Ona', age: 66, isMarried: false},   
    { name:'Petras', age: 77, isMarried: true},
    { name:'Jonas', age: 99, isMarried: false},
];

people.sort((a,b)=>a.age-b.age);
console.log(people);

people.sort((a,b)=>a.name.length-b.name.length);
console.log(people);

//naudojam ternary tekstams (a,b)=>a.name>b.name?1:-1
people.sort((a,b)=>a.name>b.name?1:a.name===b.name?0:-1);
console.log(people);


// jei masyve turi kazka kita, bet ne tekstus, reikia nurodyti FUNKCIJA

//true yra 1
// false yra 0
// todel visada priekyje sedes false

people.sort((a,b)=>a.isMarried>b.isMarried?1:a.isMarried===b.isMarried?0:-1);
console.log(people);