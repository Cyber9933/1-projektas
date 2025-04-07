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

console.log('------10--------');



