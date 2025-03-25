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
/*
1 uzduotis - MOKYTOJO SUVESTINE:
 -Susikurkite bent 6 saraso (array) tipo kintamuosius, kuriu pirmas narys yra mokinio vardas, 
 o toliau yra 5 skaiciaus tipo mokinio pazymiai;
 -sukurkite funkvija, kuri padaro  siuos veiksmus
        -i console isveda mokinio varda;
        -i console isveda mokinio papzymiu vidurki ir pranesa ar mokinys islaike ar neislaike kurso;
        jei mokinys neilaiko kurso, parasykite  ar mokinys gaves viena gera iverti galetu islaikyti.
*/
const mokinys1=[' Andrius', 8, 9, 7, 8, 10];
const mokinys2=[' Aurimas', 6, 4, 8, 7, 5];
const mokinys3=[' Valdas', 6, 8, 4, 3, 9];
const mokinys4=[' Roma', 5, 9, 7, 6, 8];
const mokinys5=[' Agne',10, 9, 4, 3, 2];
const mokinys6=[' Juozas', 6, 4 ,3, 2, 1];


function mokinioVidurkis(mokinys)
{
        console.log('Mokinio vardas:'+mokinys[0]);
        let vidurkis=(mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5
        if(vidurkis>=4)
        {
                console.log(mokinys[0]+' islaike. Vidurkis:'+vidurkis);
        }
        else
        {
                let vidurkis10=((vidurkis*5)+10)/6;
                console.log(mokinys [0]+' neislaike. Dabartinis vidurkis:'+vidurkis);
                if(vidurkis10>=4);
                {
                        console.log(mokinys[0]+' islaikytu kursa,jeigu gautu viena desimtuka');
                }

        }

}        

mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);
mokinioVidurkis(mokinys4);
mokinioVidurkis(mokinys5);
mokinioVidurkis(mokinys6);


console.log('-------------------------------');


/*2 uzduotis - FILMU REKOMENDACIJOS:
-Susikurkite bent 5 saraso tipo kintamuosius, kuriu pirmas narys yra filmo pavadinimas, antras narys yra filmo zanras, o trecias narys yra skaiciaus tipo filmo ivertis
-Susikurkite 2 kintamuosius kurie -pirmas nurodo jusu megstama zanra ir antras nurodo jusu norima matyti filmo iverti;
-padarykite funkcija, kuri ir pasirinktu 3filmu, pagal jusu norima zanra ir iverti isveda i console kokie filma jums patiktu. Jei joks filmas netinka, turi pranesti
*/
/*const filmas1=['pavadinimas','zanras', 7.1]
const filmas2=['pavadinimas','zanras', 7.1]
const filmas3=['pavadinimas','zanras', 7.1]
const filmas4=['pavadinimas','zanras', 7.1]
const filmas5=['pavadinimas','zanras', 7.1]

const Balas=6;
const zanras=komedija;
function filmoPasiulymas (filmas1, filmas2, )
/*
UZDUOTYS SU IF ir sarasas (Array)

*/

const film1=['filmas1', 'komedija', 7.2];
const film2=['filmas2', 'drama', 5.2];
const film3=['filmas3', 'animacinis', 7.4];
const film4=['filmas4', 'dokumentika', 8.3];
const film5=['filmas5', 'drama', 9.1];

const reitingas=6.8;
const zanras='drama';

function filmoZiureti(filmasA,filmasB, filmasC, zanras, Balas)
{
        let ArYraFilmas=false;
        if(filmasA[2]>=Balas && filmasB[1]==zanras)
        {
                console.log('Tave tenkintu: '+filmasB[0]);
                ArYraFilmas=true;
        }
        if(filmasB[2]>=zanras && filmasB[1]==Balas)
        {
                console.log('Tave tenkintu: '+ filmasB[0]);
                ArYraFilmas=true;
        }
        if(filmasC[1]>= zanras && filmasC[2]==Balas)
        {
                console.log('Tave tenkintu: '+filmasC[0]);
                ArYraFilmas=true;
        }
        if(ArYraFilmas==false)
        {
                console.log('Manes netenkina sis filmas');
        }
}
filmoZiureti(film1, film2, film5, reitingas, zanras)

console.log('--------------------------------')

/*
const skaiciai1 = [1, 2, 3];

function addNum (sk)
{
    return (sk[0]+sk[1]+sk[2]);
}

function tellNum (sk)
{
    console.log(sk[0]);
}

//let suma = addNum(skaiciai1);
console.log(addNum(skaiciai1));

tellNum(skaiciai1);

*/



console.log('------------------UZDUOTYS su IF ir sarais (array-----------)');
/*Patikrinkite, ar sarase yra tam tikras skaicius.
        a. Pavyzdys: Patikrinkite, ar sarase[1,2,3,4]
        */
