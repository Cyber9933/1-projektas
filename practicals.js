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



console.log('------------------UZDUOTYS su IF ir sararais (array-----------)');
/*Patikrinkite, ar sarase yra tam tikras skaicius.
        a. Pavyzdys: Patikrinkite, ar sarase[1,2,3,4] ar yra 3
        */


        let n=3
        for (let i=1; i<20; i++)
        {
                if (i%n===0)
                {
                        console.log(i);
                }
        }
        console.log('------------------UZDUOTYS su IF ir sararais (array-----------)');
        let c=''
        for (let i=1; i<10; i++)
        {
                c+='*'
                        console.log(c)
                }
        

//kintamuju for ciklas is kito galo
let b=[3,5,8];
for (let i=1; i<b.length; i++){
        console.log(b[1])
}
console.log('-----------------')
// funkcijos

let saule='*';
let debeselis='8'
function funkcija(gele)
{
        console.log('labas'+ gele)
}
console.log('Labas')
console.log('rytas')
funkcija(saule);
funkcija(debeselis)

//su return
console.log('-----------------');

//jei console po funkcijos, turi buti funkcijoje return.jei console yra funkcijoje, tada nereikia return
let skaiciusA=5
function addNum(sk)
{
        let sum=(8*15-6+17*9/2)/sk;
        let sum2=2+2;
        return sum2
}
let Galutinis=addNum(skaiciusA)*10
console.log(addNum(skaiciusA));

if (addNum(saule)==true)
{

}
else (addNum())
{
console.log('padarete klaida');
}


/*Patikrinkite, ar sarase yra tam tikras skaicius.
        a. Pavyzdys: Patikrinkite, ar sarase[1,2,3,4] ar yra 3
        */

const Sarasas=[1,2,3,4];
function ArTrejetas (S3)
{       if(S3[0]===3)
        {
                console.log('YraTrejetas');
        }    
        if(S3[1]===3)
                {
                        console.log('YraTrejetas');
                }  
                if(S3[2]===3)
                        {
                                console.log('YraTrejetas');
                        }  
                        if(S3[3]===3)
                                {
                                        console.log('YraTrejetas');
                                }     
}

ArTrejetas(Sarasas);
console.log('------------------');
const Sarasas2=[1,2,3,4];

function ArTrejetas (S4)
{       let ArS4=false;
        if(S4[0]===3)
        {
                ArS3=true;
        }    
        if(S4[1]===3)
                {
                        ArS4=true;
                }  
                if(S4[2]===3)
                        {
                                ArS4=true;
                        }  
                        if(S4[3]===3)
                                {
                                        ArS4=true;
                                }     
        if (ArS4===true)
        {
                console.log('Yra3')
        }
                
}





console.log('---------------');
/*Patikrinkite, ar masyvas tuscias.
        a.Pvz: Patirkrinkite, ar sarasas[] yra tuscias
        */
console.clear();

let eile=[];
let yraTuscia=false;

function Tuscia()
{  
        if (eile.length===0)
        {        
        yraTuscia=true;
        }

        if (yraTuscia===true)
         {
                console.log('Eile yra tuscia');
         }
                else{                {
                        console.log('Eile nera tuscia');
                        
                }
         
        

 }
}
Tuscia();

console.log('-------3--------');    
/*Nustatyti, ar sarase yra teigiamas skaicius.
        a. pvz patikrinkite ar sarase[1,-2,3,-4] yra teigamu skaiciu
        */

let sarasasTeig=[1,-2,3,-4];

function teigiami(teig)
{
        let teigSkaiciu=[];
        let skaicius=0;

         if (teig[0] > 0) {
        teigSkaiciu[skaicius] = teig[0];
        skaicius++;
    }
        if (teig[1] > 0) {
        teigSkaiciu[skaicius] = teig[1];
        skaicius++;
    }
        if (teig[2] > 0) {
        teigSkaiciu[skaicius] = teig[2];
        skaicius++;
    }
         if (teig[3] > 0) {
        teigSkaiciu[skaicius] = teig[3];
        skaicius++;
    }

        console.log(teigSkaiciu);
                                
}
teigiami(sarasasTeig)

console.log('-------4---------------');

//Patikrinkite, ar visi saraso skaiciai yra lyginiai.
//a.Pvz: Patrikrinkite, ar[2,4,6] yra tik lyginiai skaiciai.

let sarasaLyg=[2,4,6];
function lyginiai(skaicius) 
{
          return skaicius %2===0;
}
console.log(sarasaLyg);

let sarasaLyg3=[2,4,6];
function Lyginiai2(skaiciusLyg)
{
        if (skaiciusLyg %2===0)
        {
                console.log(`${skaiciusLyg} yra ne lyginis`);
                return true;
        }
        else
        {
                console.log(`${skaiciusLyg} yra  lyginis`);
                return false;
                
        }
}

console.log(Lyginiai2(sarasaLyg3));


console.log('-------5-----');
/*Patikrinkite, ar sarase yra neigiamas skaicius.
        a. pvz patikrinkite ar sarase[3,5,-2] yra neigiamas
        */

        let sarasasNeig=[3,5,-2];

        function Neigiami(neig)
        {
                let neigSkaiciu=[];
                let skaicius=0;
        
                 if (neig[0] < 0) {
                neigSkaiciu[skaicius] = neig[0];
                skaicius++;
            }
                if (neig[1] < 0) {
                neigSkaiciu[skaicius] = neig[1];
                skaicius++;
            }
                if (neig[2] < 0) {
                neigSkaiciu[skaicius] = neig[2];
                skaicius++;
            
                }
                console.log(neigSkaiciu);
                                        
        }
        Neigiami(sarasasNeig);

        console.log('--------6------');

        //Patikrinkite, ar pirmas skaicius sarase yra didesnis uz paskutini.
        //      a. PVZ: Patikrinkite, ar pirmas kaicius sarase [1,3,5] yra didesnis uz paskutini.

       /* let didesnis=[1,3,5];
        function didesnisUz(sk15)
        {
                let didesnisSkaic=[];
                ds=1;
                if(ds>didesnis[2])
                {
                        'yra Didesnis'===true;
                }
                else if (ds>=didesnis[2])
                {
                        'yra Didesnis'===true
                }
                else (ds<didesnis[2])
                {
                        'yra mazesnis'===false;
                }
                console.log(didesnisSkaic);
                                
        }
didesnisUz(didesnis);
        */

console.log('------7------');

