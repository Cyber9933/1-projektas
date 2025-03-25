//uzduotis 2: sukeiskime a1 ir b1 reikšmes

/*
let a1 = 5, b1 = 3

console.log(a1, b1)
*/
let a1=5;
console.log(a1);

let b1=3;
console.log(b1)

let c1=0;
console.log(c1);


c1=b1;

b1=a1;

a1=c1;



//uzduotis 3: padarykite jog ekrane matytume 555. a2, b2 ir c2 turi išlikti penketais

/*
let a2 = 5
let b2 = 5
let c2 = 5

console.log(a2 + b2 + c2)

*/

let a2 = 5
let b2 = '5'
let c2 = 5

console.log(a2+b2+c2);

console.log('-----------------')

const Mokinys1=['Tadas', 8, 9, 10, 4, 7]
const Mokinys2=['Rima', 5, 3, 1, 4, 7]
const Mokinys3=['Agne', 1, 1, 1, 1, 1]
function MokinioVidurkis (mokinys)
{

    console.log('Mokinio vardas:'+mokinys[0])
    let sum=mokinys[1]-mokinys[2]+mokinys[3]-mokinys[4]+mokinys[5]
    console.log(mokinys[0].length)
    let vidurkis=(mokinys[1]+mokinys[2]+mokinys[3]+mokinys[3]+mokinys[5])/5
    if(vidurkis>=3.5)
    {
        console.log(mokinys[0]+' islaike, Jo vidurkis:'+ vidurkis);
    }
    else
    {
        let vidurkisNaujas=((vidurkis*5)+10)/6
        console.log(mokinys[0]+' neislaike, Jo vidurkis:'+ vidurkis);
        console.log(vidurkisNaujas);
        console.log(mokinys[0]+' islaikytu kursa jeigu gautu viena desimtuka');

        if(vidurkisNaujas <=3.5)
        {
        }
    }
}
MokinioVidurkis(Mokinys1)
MokinioVidurkis(Mokinys2)
MokinioVidurkis(Mokinys3)


/*
1 uzduotis - MOKYTOJO SUVESTINE:
 -Susikurkite bent 6 saraso (array) tipo kintamuosius, kuriu pirmas narys yra mokinioi vardas, o toliau yra 5 skaiciaus tipo mokinio pazymiai;
 -sukurkite funkvija, kuri padaro  siuos veiksmus
        -i console isveda mokinio varda;
        -i console isveda mokinio papzymiu vidurki ir pranesa ar mokinys islaike ar neislaike kurso;
        jei mokinys neilaiko kiurso, parasykite  ar mokinys gaves viena gera iverti galetu islaikyti.

2 uzduotis - FILMU REKOMENDACIJOS:
-Susikurkite bent 5 saraso tipo kintamuosius, kuriu pirmas narys yra filmo pavadinimas, antras narys yra filmo zanras, o trecias narys yra skaiciaus tipo filmo ivertis
-Susikurkite 2 kintamuosius kurie -pirmas nurodo jusu megstama zanra ir antras nurodo jusu norima matyti filmo iverti;
-padarykite funkcija, kuri ir pasirinktu 3filmu, pagal jusu norima zanra ir iverti isveda i console kokie filma jums patiktu. Jei joks filmas netinka, turi pranesti
*/