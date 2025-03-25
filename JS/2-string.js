/*
STRING - tekstas, simboliu grandinele

tekstine reiksmes iniciavimas:
- ' (vienguba kabute);
- " (dviguba kabute)"
*/

const a='Labas';
console.log(a);

let b= 'rytas';
console.log(b);

b='diena';
console.log(b);


// Vienguba (') kabute.
// naudojamos prisingo tipo kabutes atskyrimui





const name = "Jonas";
const surname = "Jonaitis";


const fullname=name+' '+surname;
console.log(fullname);

// Vienguba(') ir dviguba (")  kabutes.
// 
const k12="Vienguba(') ir" + ' dviguba (")  kabutes.';
console.log(k12);


//Vienguba (') kabute.
const k3='Vienguba (\') kabute.';
console.log(k3)


//Dviguba (") kabute.
const k4="dviguba (\") kabute.";
console.log(k4);


// Vienguba (') ir dviguba (") kabutes.
// 
const k5= 'Vienguba (\') ir dviguba (") kabutes.'

const k6="Vienguba (') ir  dviguba (\") kabutes."


const backSlash1='\\';
const backSlash2="\\\";"


console.log(backSlash1);
console.log(backSlash2);


/*
const <header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/


const html='<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';

console.log(html);



const html2 = '<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '\
<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';
console.log('-------------------');
console.log(html3);

console.clear();


const studentName='Maryte';
const amount=4;
//Maryte yra viena is 4 legendiniu studentu.

const student=studentName+' yra viena is '+ '4 legendiniu studentu.';
console.log(student);


const b1= `Vienguba (') kabute.`
console.log(b1);

const b2= `Dviguba (") kabute.;`
console.log(b2);

// Backtik (`) kabute.
const b4=`Backtick (\`) kabute.`;
console.log(b4);


const b7=`const <header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(b7);


console.clear()


const student2=`${studentName} yra viena is ${amount} legendiniu studentu`;
console.log(student);


const word= 'pomidoras';
const wordSymbolCount=word.length;

console.log(word);
console.log(wordSymbolCount);


const textSize='Labas rytas'.length;
console.log(textSize);

const space=' ';
console.log(space.length);

const numbers='1234565';
console.log(numbers.length);

const number= 123456;
console.log(number.length);

const age=99;
const ageDigitsCount=('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2=age.toString().length;
console.log(ageDigitsCount2);

const text='DOMINO';
const firstSymbol=text[0];
console.log(firstSymbol);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);



console.log(text[0] + text[1]);



//Zodyje "Sachmatai" pirmoji raide yra "S".
const game = 'Sachmatai';
const gameSentence = `Zodyje ${game} pirmoji raide yra "S".`;
const gameSentence2= `Zodyje ${game} pirmoji raide yra "${game[0]}".`
console.log(gameSentence2);
console.log(gameSentence);


const word1='ruduo';
const wordSymbolCount1=word1.length;
console.log(wordSymbolCount1);
console.log(word1);

