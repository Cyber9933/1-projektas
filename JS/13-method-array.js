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

