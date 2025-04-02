/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// at
console.log('\nat');

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length - 1]);

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// includes
console.clear();
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

console.log('Ačiū'.includes('č'));
console.log('Ačiū'.includes('Č'));

console.log('-----');

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));
console.log('Bepasikulversciaudamasis'.includes('kul'));
console.log('Bepasikulversciaudamasis'.includes('ciauda'));
console.log('Bepasikulversciaudamasis'.includes('cauda'));
console.log('Bepasikulversciaudamasis'.includes('Bepasikulversciaudamasis'));

// startsWith
console.clear();
console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith(' Pom'));

// endsWith
console.clear();
console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith(' Pomidoras'));
console.log(' Pomidoras'.endsWith(' Pomidoras'));

// indexOf
console.clear();
console.log('\nindexOf');
//           012345678
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('---');

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));

console.log(k.indexOf('u', k.indexOf('u') + 1));

console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s') + 1));

console.log(k.indexOf('e'));
console.log(k.indexOf('e', k.indexOf('e') + 1));



// repeat
console.clear();
console.log('\nrepeat');
console.log('a');
console.log('a'.repeat(5));

const symbol='m';
//kartoja teksta
const megaSymbol=symbol.repeat(10); 
console.log(symbol);
console.log(megaSymbol);
//kartoja teksta

const symbol1='Labas';

const megaSymbol1=symbol1.repeat(3); 
console.log(symbol1);
console.log(megaSymbol1);


function stringRepeat(text, count){
    let result='';
    for (let i=0; i<count; i++) {
        result +=text;
    }
    return result;
}

console.log(stringRepeat('lambada',3));
console.log(stringRepeat(' lambada',3));


///// variantas su Math.floor su desimtainiais skaiciais
function stringRepeat1(text, count){
    let result='';
    for (let i=0; i<Math.floor(count); i++) {
        result +=text;
    }
    return result;
}

console.log(stringRepeat1('lambada-',3.99999));
console.log(stringRepeat1(' lambada',3));



// replace  (pakeicia vietomis, tarkim vasara = a -, keicia po viena simboli)
console.clear();
console.log('\nreplace');
console.log('vasara'.replace('a', '-'));

const summer='vasara'.replace('a','-');
console.log(summer);


//chain  - replacasina kelis kartus is eiles su tasku
const summer1='vasara'.replace('a','-').replace('a','-');
console.log(summer1);

const summer2='vasara'.replace('a','-').replace('a','-').replace('a','-');
console.log(summer2);

const cloud='debeselis'.replace('u', '***'); // kadangi nera raides, nieko nedaro
console.log(cloud);

const cloud1='debeselis'.replace('e', '***'); 
console.log(cloud1);

const cloud2='debeselis'.replace('selis', '***'); 
console.log(cloud2);

const cloud3='debeselis'.replace('e', '*'.repeat(3));  //naudojamas kai repeatinasi eile kartu is 
console.log(cloud3);

///pvz tekste
const template='VARDAS ejo i parduotuve pirkti DAIKTAS';
const name='Jonas';
const item='pomidoras';

const shop=template.replace('VARDAS', name).replace('DAIKTAS', item);
console.log(shop);


//pvz
const template2='klaseje sedi:V1, V2, V3, V4';
const classmates=template2.replace('V3', 'Ona');

console.log(classmates);

//replaceAll visas raides keicia ,arba pasirinkta teksta, t.y. visus pasirinktus simpolius
console.clear();
console.log('\nreplaceAll');
console.log('vasara'.replaceAll('a', '-'));

console.log('ananasas'.replace('a',''));
console.log('ananasas'.replaceAll('a',''));
console.log('ananasas'.replaceAll('na',''));

// Labas rytas, Lietuva!  kiek tekste yra spausdintinu simboliu

const hi='Labas rytas, Lietuva!'
const hiNormalSize=hi.replaceAll(' ','').length;
console.log(hiNormalSize);

//toUpperCase padidina visas raides, arvba viska keicia arba nieko
console.log('\toUpperCase');

console.log('labas'.toUpperCase()); 

console.log('\toUpperCase');

console.log('LABAS'.toLowerCase()); //atvirksciai mazina



//slice trinti tekste viska nuo tos vietos, )pjovimas is eiles, negali buti atgal
console.clear();
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));

// pagal indekso vieta nupjauna
console.log('pomidoras'.slice(0,1));
console.log('pomidoras'.slice(0,3));
console.log('pomidoras'.slice(2,4));


//
console.log('pomidoras'.slice(0,-1));
console.log('pomidoras'.slice(0,-3));
console.log('pomidoras'.slice(3,-3));

//
console.log('pomidoras'.slice(-1));
console.log('pomidoras'.slice(-6,-2));


