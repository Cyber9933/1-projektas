/*
ARRAY - sąrašas, Arėjus, matrica, masyvas, list'as, rinkinys (paprastieji, lauztiniai, riestieji skliaustai)
*/

const empty=[];
console.log(empty);


const luckyNumber=[7, 77, 13, 66, 8, 2];
console.log(luckyNumber);

const students=['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const firstNumber=luckyNumber[0];
console.log(firstNumber);

console.log(luckyNumber[0]);
console.log(luckyNumber[1]);
console.log(luckyNumber[2]);
console.log(luckyNumber[3]);
console.log(luckyNumber[4]);
console.log(luckyNumber[5]);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

console.log('---------');
console.log(empty.length);
console.log(students.length);
console.log(luckyNumber.length);


console.log('---------');


/* 
paprastieji - vienaskaita; const number=
masyvai - daugiskaita; const numbers=
*/

const numbers=[10,2,8,4,6];
const totalSum1=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
console.log(totalSum1);


let totalSum2=0;

totalSum2=totalSum2+numbers[0];
totalSum2=totalSum2+numbers[1];
totalSum2=totalSum2+numbers[2];
totalSum2=totalSum2+numbers[3];
totalSum2=totalSum2+numbers[4];
console.log(totalSum2);
/*
ctrl+d pazymeti visus skaicius
ctrl+l copint po viena eilute
*/
let totalSum3=0
totalSum3+=numbers[0];
totalSum3+=numbers[1];
totalSum3+=numbers[2];
totalSum3+=numbers[3];
totalSum3+=numbers[4];
console.log(totalSum3);

const dictionary=['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];

// Patiekalui reikes: a,b,c,d.

const sentence1='Patiekalui reikes: '+dictionary[0]+', '+dictionary[1]+', '+dictionary[2]+', '+dictionary[3]+', '+dictionary[4]+', '+dictionary[5]+', '+dictionary[6]+'.';
console.log(sentence1);

let sentence2='Patiekalui reikes: ';
sentence2=sentence2+dictionary[0];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[1];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[2];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[3];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[4];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[5];
sentence2=sentence2+', ';
sentence2=sentence2+dictionary[6];
sentence2=sentence2+'. ';
console.log(sentence2);



console.log('---------variantai--------');
sentence2+=dictionary[0];
sentence2+=', ';
sentence2+=dictionary[1];
sentence2+=', ';
sentence2+=dictionary[2];
sentence2+=', ';
sentence2+=dictionary[3];
sentence2+=', ';
sentence2+=dictionary[4];
sentence2+=', ';
sentence2+=dictionary[5];
sentence2+=', ';
sentence2+=dictionary[6];
sentence2+='. ';
console.log(sentence2);

console.log('-----------');

sentence2+=dictionary[0]+', ';
sentence2+=dictionary[1]+', ';
sentence2+=dictionary[2]+', ';
sentence2+=dictionary[3]+', ';
sentence2+=dictionary[4]+', ';
sentence2+=dictionary[5]+', ';
sentence2+=dictionary[6]+'. ';
console.log(sentence2);
console.log('-----------------------');


