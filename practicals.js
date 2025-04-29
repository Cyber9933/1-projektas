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

        let didesnis=[1,3,5];
        function didesnisUz(sk15)
        {
                if(sk15[0]>sk15[sk15.length-1])
                {
                        console.log('pirmas didesnis uz paskutini'); 
                        return true;   
                }
                else 
                {
                        console.log('pirmas nera didesnis uz paskutini');
                        
                        return false;
                }
                console.log(didesnisSkaic);
                                
        }
didesnisUz(didesnis);
        

console.log('------7------');

//ar saraso [1,2,3,4,5,6] ilgis yra didesnis nei 5


let sarasoIlgis=[1,2,3,4,5,6];
function Ilgis5(il5) {
        if(il5[0]<il5[il5.length-1])
        {
                console.log('ilgis didesnis nei 5');
                return true
        }
        else
        {
                console.log('ilgis mazesnis nei 5');
        return false;
        }
}
Ilgis5(sarasoIlgis);


console.log('------8------');

//Patikrinti ar ['obuolys,'bananas', 'vysnia'] yra tikr tekstai

let tekstai=[`'obuolys','bananas','vysnia'`];

function arVisiTekstai(tekst2) {
        for (let i = 0; i < tekst2.length; i++) {
            if (typeof tekst2[i] !== 'string') {
                console.log('Ne visi yra tekstai');
                return false;
            }
        }
                console.log('Visi yra tekstai');
                return true;
    }
    console.log(arVisiTekstai(tekstai));
    

console.log('------9------');

//Pstikrinkite, ar didziausias skaiciu sarase [2,5,12,4] yra didesnis nei 10
let sarasas3=[2,5,12,4];





console.log('------10------');
//Patikrinkite ar [2,2,2,2,2,5,6] turi daugiau nei 3 skaiciaus 2 elementus.

let elementas=[2,2,2,2,2,5,6];


console.log('------------');






console.log('----------FOR CIKLAS---------');

console.log('----------1---------');
// skaiciai nuo 1 iki 10 naudojant for cikla

        let f=1
        for (let i=1; i<=10; i++)
        {
                if (i%f===0)
                {
                        console.log(i);
                }
        }


console.log('----------2---------');
// skaiciai nuo 10 iki 1 naudojant for cikla

let f1=1
for (let i=10; i>=1; i--)
{
        if (i%f1===0)
        {
                console.log(i);
        }
}
console.log('----------3---------');

//spausdinti kekviena lygini skaiciu nuo 0 iki 20




console.log('----------4---------');
console.log('----------5---------');
console.log('----------6---------');
console.log('----------7---------');

// atspausdinti 7 daugybos lentele

for(let n=7; n<8; n++){
        console.log('n:',n);
        for(let i=1; i<=10; i++){
            console.log(`${n}*${i}=${n*i}`); 
        }
        
    }


console.log('----------8---------');

        let c4=''
        for (let i=1; i<10; i++)
        {
                c4+='*'
                        console.log(c4)
                }

console.log('----------9---------');
console.log('----------10---------');
console.log('----------11---------');
console.log('----------12---------');
console.log('----------13---------');

//
/*const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    
    let results1 = twoOldestAges([1, 2, 10, 8]);
    let results2 = twoOldestAges([1, 5, 87, 45, 8, 8]);
    let results3 = twoOldestAges([1, 3, 10, 0])
  
    assert.strictEqual(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    assert.strictEqual(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    
    assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    assert.strictEqual(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    })
  })
  */
  function twoOldestAges(list)
{
                let bigest1=list[0]; 
                for (let i=0; i<list.length; i++)
                {
                    if( list[i]>bigest1){
                        bigest1=list[i];
                    }
                }
                return bigest1
            }

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([1, 3, 10, 0]));


/* For ciklas

*/
console.log('----For Ciklas');
// 1. Parasyti for cikla, kuris apskaiciuotu visu skaiciu nuo 5 iki 15 suma
let sudetis=5
for (let i=5; i<=15; i++){
       
       {

        sudetis=sudetis+i
       }
}
console.log(sudetis);

// 2. Parasykite for cikla, kuris i console isvestu visas zodzio 'Vakaras' raides po viena


let naujas1='Vakaras';
for (let i=0; i<naujas1.length; i++)
{
        console.log(naujas1[i]);
}


// 3. Parasykite for cikla, kuris isvestu is seseto daugybos lentele

for(let n=6; n<7; n++){
        console.log('n:',n);
        for(let i=1; i<=10; i++){
            console.log(`${n}*${i}=${n*i}`); 
        }
        
    }

// 4. Parasykite for cikla, kuris i console isvestu nuo 5 iki 1, ir po vieneto (vietoje 0 i ekrana isvestu zodi 'BOOM')
let nulis=('BOOM')
for (let i=5; i>=1; i--){
        console.log([i] + `${nulis}`);
        
}
        


// 5. Parasykite for cikla, kuris sudetu visus lyginius skaicius nuo 3 iki 18
for (let i=3; i<18; i++)
{
        if(i%2===0){
                console.log(i);
                
        }
}
console.log('------');

// 6. Parasykite for cikla, kuris isvestu visus saraso elemenetus  i console
for (let i=0; i<=5; i++){
        console.log(i);
        }
        console.log('------');
// 7. Parasykite for cikla, kuris is vardu saraso isvestu visus elementus, pridedamas ' Mano vardas-', console log eilutes pradzioje
let vardas=['Rasa','Andrius', 'Tomas'];
for (let i=0; i<vardas.length; i++){
        console.log(`Mano vardas ${vardas[i]}`)
}




// 8. Parasykite for cikla, kuris sudetu visus saraso skaitinius elementus


// 9. Parasykite for cikla, kuris isvestu i console visus saraso elementus nuo paskutinio iki pirmo

// 10. Parasykite for cikla, kuri isvestu i console tik tuos skaicius, jei jie yra pinigu reiksmes (1,2,5,10,20,50,100,200,500)

for (let i=1; i<=500; i++){
        if(i===1||i===2||i===5||i===10||i===20||i===50||i===100||i===200||i===500)
                {console.log(i);

                };
}

// 11. Parasykite for cikla, kuris is saraso Raides ['L','a','b','a','s'] sudeliotu kintamaji Zodis, kurio reiksme yra 'Labas'
const raides=['L','a','b','a','s'];

let naujas='';
for (let i=0; i<raides.length; i++)
{
        naujas+=raides[i];
}
console.log(naujas);



// 12. Parasykite for cikla, kuris atskirai atspausdintu kiekvieno zodzio  Programavimas raide.


let naujas0='Programavimas';
for (let i=0; i<naujas0.length; i++)
{
        console.log(naujas0[i]);
}

// 13. Parasykite for cikla, kuris sudaugintu skaicius nuo 2 iki 10. uz ciklo isveskite i console reiksme.
let daugyba=2;
for (let i=3; i<=10; i++)
{
        daugyba=daugyba*i;
}

console.log(daugyba);
console.log('------');


// 14. Parasykite for cikla, kuris apskaiciuotu visu nelyginiu skaiciu inuo 1 iki 30 suma

let Nelyginis=0;
for (let i=1; i<=30; i+=2)
{
        Nelyginis=Nelyginis+i;
}
console.log(Nelyginis);

console.log('------');

// 15. Parasykite for cikla, kuris i console isvestu skaicius nuo 20 iki 10
for (let i=20; i>=10; i--){
        console.log(i);
}

// 16. Parasykite for cikla, kuris i console isvesttu saraso RaidesAtbulai ['s', 'a', 'b', 'a', 'L'] elementus vienas nuo kito nuo galo iki pradzios

const raidesAtbulai=['s', 'a', 'b', 'a', 'L'];
for (let i=raidesAtbulai.length-1;i>=0; i--  ){
        console.log(raidesAtbulai[i]);
        
}

// 17. Parasykite for cikla, kurisi console isvestu ZodisAtbulas=samivamargorP' atskriras raides po kitos

let raidesAtbulai1='samivamargorP';
for (let i=0;i<=raidesAtbulai1.length; i++ ){
        console.log(raidesAtbulai1[i]);
        
}
// 18.Parasykite for cikla, kuris kuris i console isveda skaicius nuo 1 iki 100, Jei saraso skaicius dalinasi is7, papildomai i console isvedamas zodis lucky

for (let i =1; i<=100; i++){
       
        if (i%7===0)
        {
               console.log('lucky'+i);
                        
        }else
        {
            console.log(i);    
        } 
        
}
// 19. Parasykite for cikla, kuris i console po viena atskirai isvestu dvigubas saraso Dvigubinti[2,3,6,8] reiksmes (Gaunasmas atsakymas [4,6,12,16])

const dvigub=[2,3,6,8];
for (let i=0; i<dvigub.length; i ++){
        console.log(dvigub[i]*2);
        
}

// 20. Parasykite for cikla, kuris is saraso DaugSkaiciu [2,14,10,100,502,8,0]isvestu visus skaicius, kurie yra mazesni uz 100
const dvigub1=[2,14,10,100,502,8,0];
for (let i=0; i<dvigub1.length; i ++){
       if(dvigub1[i]<100){
        console.log(dvigub1[i]);
        
       }
        
}

// 21. Parasykite for cikla, kuris apskaiciuotu keik raidziu a yra zodyje abrakadabra

// 22. Parasykite for cikla, kuris isvestu , kokios butu saraso PridesiuSakaiciu [2,8,88,14] elementu reiksmes, jei prie kiekvieno elemento pridetume dvejeta

// 23. Parasykite for cikla, kuris

// 24. Parasykite for cikla, kuris

// 25. Parasykite for cikla, kuris

console.log('----------FUNKCIJOS----------');

// 1. Parasykite f-ja, kuri grazina dviejus skiaciu suma


function suma(a,b){
        return a+b;
}
console.log(suma(3,5));


// 2. Parasykite f-ja, kuri grazina dvieju skaiciu skirtuma

function skirtumas(a,b){
        return a-b;
}
console.log(skirtumas(8,3));


// 3. Parasykite f-ja, kuri grazina dvieju skaiciu sandauga
function sandauga(a,b){
        return a*b;
}
console.log(sandauga(3,5));


// 4. Parasykite f-ja, kuri grazina dvieju skaiciu sandauga
function dalyba (a,b){
        return a/b;
}
console.log(dalyba(10,2));

// 5.  Parasykite f-ja, kuri grazina dvieju skaiciu vidurki
function vidurkis (a,b){
        return (a+b)/2;
}
console.log(vidurkis (4,8));

// 6.

// 7. ===


// 8. !==

// 9. funkicija dalina is5 be liekanos

function dalijasIs5(skaicius){
        if (skaicius%5){
                return true
        }else{
                return false
        }
};
console.log(dalijasIs5(15));


// 10. 
function ar100(skaicius){
        if (skaicius===100){
                return true
        }else{
                return false
        }
}
console.log(ar100(200));

// 11.

function ar10(skaicius){
        if (skaicius>=10){
                return true
        }else{
                return false
        }
}
console.log(ar10(200));

// 12.

function kurisDidesnis(n1,n2){
        if(n1>n2){
                return n1;
        }else{
                return n2
        }
}

console.log(kurisDidesnis(8,18));
console.log(kurisDidesnis(100,6));



// 13. 
function kurisMazesnis(n1,n2){
        if(n1<n2){
                return n1;
        }else{
                return n2
        }
}

console.log(kurisMazesnis(8,18));
console.log(kurisMazesnis(100,6));
// 14.

function arVienodi(n1,n2,n3){
        if(n1===n2&&n1===n3)
        {
                return true
        }else{
                return false
        }
}
console.log(arVienodi(3,2));

// 15. 

// 16.
function arYraTarp(number){
        if(number>=1&&number<=10){
                return true;
        }else{
                return false
        }
}
console.log(arYraTarp(50));
console.log('***17****');

// 17.
function arYraTarp50(number){
        if(number>=50&&number<=100){
                return true;
        }else{
                return false
        }
}
console.log(arYraTarp50(50));
// 18.
function ArN(sk){
        if(sk<0){
                return true

        }else{
                return false
        }
}
console.log(ArN(-5));

// 19.

// 20. Parasykite funkcija, kuri patikrina ar skaicius yra didesnis nei 18 (pvz.,)

function yra18(skaicius)
{
        if (skaicius>18){
                return true;
        }
        else
        {
                return false;
        }
}
console.log(yra18(28));
console.log(yra18(15));


// 21. Parasykite f-ja, kuri patikrina ar perduotas zodis 'labas'

function arLabas(zodis){
if (zodis==='labas'){
        return true;
}else{
        return false;
}
}
console.log(arLabas('labas'));
console.log(arLabas('Labas'));

// 22. Parasykite f-ja, kuri patikrina ar zodis yra ilgesnis nei 5
function ilgesnis(zodis){
if (zodis.length>5){
        console.log(('ilgesnis nei 5'));
        
}else{
        console.log(('trumpesnis'));
        
}
}
ilgesnis('namas');
ilgesnis('pavasaris');



// 23. Parasykite f-ja, kuri grazina pirmaja perduoto zodzio raide

function firstLetter(raide){
        return raide[0];
}
console.log(firstLetter('pavasaris'));

// 24. Parasykite f-ja, kuri grazina paskutine perduoto zodzio raide

function lastLetter(raide){
        return raide[raide.length-1];
}
console.log(lastLetter('pavasaris'));

// 25. Parasykite f-ja, kuri patikrina, ar zodis prasideda raide 'A'

function firstLetterA(raide){
        if ( raide[0]==='A'){
                return true;
}
else{
        return false
}
}
console.log(firstLetterA('pavasaris'));
console.log(firstLetterA('aciu'));
console.log(firstLetterA('Aciu'));


// 26. Parasykite f-ja, kuri grazina zodzio ilgi

function letterLength(zodis){
        return zodis.length
}
console.log(letterLength('pavasaris'));


// 27. Parasyktie f-ja, kuri grazina 'Ilgas' arba 'Traumas', priklausoma nuo zodzio ilgio. Ilgas zodis yra 7 simboliu ilgio arba didesnis, o trumpas yra 6 simboliu arba trumpesnis

function ilgiausias(zodis){
        if (zodis.length>=7){
               return 'ilgas';
                
        }else{
                return 'trumpesnis';
                
        }
        }
        console.log(ilgiausias('namas'));
        
        console.log(ilgiausias('pavasaris'));

// 28. Parasykite f-ja, kuri patikrina, ar du zodziai yra vienodi
function vienodi(namas, namie)
{
if (namas===namie){
        console.log('vienodi');
        
}else{
        console.log('nevienodi');
        
}
}
vienodi('namas', 'namie');
vienodi ('namas', 'namas');

// 29.

// 30.
function shatNumber(number)
{
        let text='';
        if (number>0) {
                text='teigiama, ir'

        }else if( number<0){
                text= 'neigiamas, ir'
        }else{
                text= 'I am Zero';
        }
        if(number>100)
        {text= 'didziulis'

        }else{               
         text=text+'esu maziukas'
        }

        return text
}
console.log(shatNumber(150));




console.log('-----------uzduotys--------------');


const ManoMiestai = ["kaunas", 89, 'klaipėda', 307, 'marijampolė', 159, 'utena', 100]


    function kurTolimiausiai (miestai, greitis, laikas)
    {
        let maxA = 0;
        let kelias = greitis * laikas;
        let maxM = 0;

        for(let i = 0; i<miestai.length; i+=2)
        {
            //console.log(miestai[i]);
            if(miestai[i+1]<= kelias && miestai[i+1]> maxA)
            {
                maxA = miestai[i+1];
                maxM = i;
            }
        }
        console.log(miestai[maxM] + ' ' + miestai[maxM+1]);

    }

    kurTolimiausiai(ManoMiestai, 80, 2)



    function ArSpetume (miestai, miestas, laikas) //s = v*t 
    {

        for(let i = 0; i<miestai.length; i+=2)
        {
            if(miestai[i]===miestas)
            {
                if(miestai[i+1]/laikas <= 120)
                {
                    console.log("spesim " + miestai[i+1]/laikas)
                }
            }
            else
            {
                console.log("miesto neradau")
            }
        }
    }

    ArSpetume(ManoMiestai, 'marijampolė', 2)


    function ArUzteks (miestai, pinigai, Kkaina, deginam)
    {
        let kuras = 30 + pinigai/Kkaina;
        let atstumas = kuras / deginam;
        let maxA = 0
        let maxM = 0
        for(let i = 0; i<miestai.length; i+=2)
            {
                //console.log(miestai[i]);
                if(miestai[i+1]<= atstumas && miestai[i+1]> maxA)
                {
                    maxA = miestai[i+1];
                    maxM = i;
                }
            }

        console.log(miestai[maxM] + ' ' + maxA)

    }

    ArUzteks(ManoMiestai, 10, 0.5, 0.5)


const KelioSalygos = ['geras', 'prastas', 'taisomas', 'prastas'];

function realusLaikas (miestai, salyga)
{
    for(let i = 0; i<miestai.length; i+=2)
        {
            if(salyga[i/2]==='geras')
            {
                console.log(miestai[i+1])
            }
            if(salyga[i/2]==='prastas')
                {
                    console.log(miestai[i+1]*1.5)
                }
                if(salyga[i/2]==='taisomas')
                    {
                        console.log(miestai[i+1]*2)
                    }
        }
}

realusLaikas(ManoMiestai, KelioSalygos)

/*
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges(ages){
  return [0, 0, 0];
}






*/

console.log('***AMZIUS****');

function differenceInAges(ages){
        let min=Infinity;
        let max=-Infinity;
        for (let i=0; i<ages.length;i++)
        {
                if(ages[i]<min)
                {min=ages[i]};
                if(ages[i]>max){
                        max=ages[i];
                }
        }
let dif=max-min
        return(min, max,dif)
}




function sortArray(array) {
        let result = array.slice(); 
        
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
         
          if ((i + 1) % 2 !== 0) {
            
            let temp = result[i];
            result[i] = result[array.length - 1 - i];
            result[array.length - 1 - i] = temp;
          }
        }
        
        return result;
      }

      console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
      

      function cakes(recipe, available) {
        let maxCakes = Infinity;
        
        // Iterate through each ingredient in the recipe
        for (let ingredient in recipe) {
          // Check if the ingredient is available
          if (!available[ingredient]) {
            return 0; // Missing an ingredient, so 0 cakes can be made
          }
          
          // Calculate how many cakes can be made with this ingredient
          const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
          
          // Update the maximum number of cakes (taking the minimum)
          maxCakes = Math.min(maxCakes, possibleCakes);
        }
        
        return maxCakes;
}


/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20

Note
If there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr){
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                console.log(element);
                
        }
        return sum
}
console.log(positiveSum[1, -4, 7, 12]);

console.log('*********CODEWARS**********');


console.log('*********su litrais**********');

/*

0.5litro per valanda,reikia grazinti kiek litru sugere
time=3---->litres=1
time=6.7---->litres=3
time=11.8---->litres=5
*/
function litres(time){
        return Math.floor(time*0.5);

}

console.log(Math.floor(6.7));
console.log(Math.floor(3));
console.log(Math.floor(5));

console.log('*********magNumber**********');

//eina karys per gatve ir sauna 3 kartus. kareivis turi viena is ginklu
// apskaiciuoti kiek pasiimti detuviu

function magNumber(info){
        // apsiskaiciuojam kulkas
        let mag=0;
        if(info[0]==='PT92'){
                mag=Math.ceil((3*info[1])/17); 
        }       //apsiskaiciuojame kulkas
        if(info[0]==='M4A1'||info[0]==='M16A2'){
                mag=Math.ceil((3*info[1])/30); 
        }  
        return mag
}
console.log(magNumber);


console.log('*********kuno mases indeksas**********');

function bmi(weight, height) {
        
        let bmiValue = weight / (height ** 2);
        let result = '';
        
        
        if (bmiValue <= 18.5) {
          result = 'Underweight';
        } else if (bmiValue <= 25) {
          result = 'Normal';
        } else if (bmiValue <= 30) {
          result = 'Overweight';
        } else {
          result = 'Obese';
        }
        
        return result;
      }
console.log(bmi(50,1.80));
console.log(bmi(80,1.80));
console.log(bmi(90,1.60));
console.log(bmi(80,1.70));

console.log('*********Drink About**********');

function peopleWithAgeDrink(old){
        if(old<14)
        {
                return 'drink today';
        }else if(old<18){
                return'drink coke';
        }else if (old<21){
                return'drink bear';
        }else (old>22) 
                return 'drink wiskey';
        
       
}
console.log(peopleWithAgeDrink(18));


console.log('*****************');
function isPangram(string){
        let word='A-Z';
        if (word<0)
        {return true}
        else (word>0)
                return false
   }
      console.log(isPangram("The quick brown fox jumps over the lazy dog."));
      console.log(isPangram("This is not a pangram."))
      
      
      //

      function isPangram(string) {
        const lowerCaseString = string.toLowerCase();
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
      
        for (let i = 0; i < alphabet.length; i++) {
          if (lowerCaseString.indexOf(alphabet[i]) === -1) {
            return false;
          }
        }
        
        return true;
      }
      
      console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
      console.log(isPangram("This is not a pangram.")); // false


   
    console.log("-----------------");
    

    
//Gabijos uzduotys:

//1. Count how many volwes are in string

function countVolwes(str) {
        const volwes='areouAEIOU';
        let count=0;
        for(let char of str)
        {if(volwes.includes(char)){
                count++;
        }
return count;
        }
        
}
console.log(countVolwes('a'));

// 2. Reverse a string
function reverseString(str){
        const raides=str.split('');
        console.log(raides); //patikriname ar veikia
        let atvirkstinis='';
        for ( let i=raides.length-1; i>=0; i--)
                {
                atvirkstinis+=raides[i];
        }
        return atvirkstinis;

}
console.log(reverseString('Ananasas'));

//3. capitalize the first letter of eac word in Sentence

function capitalizeWords(sentence){
        return sentence.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log( capitalizeWords('atejo jau pavasaris'));


//4. Chec if a string  is a palindrome

function isPalindrome(str) {
        const cleaned=str.toLowerCase();
        /*if (cleaned===cleaned.split('').reverse().join('')){
                return true;
        }else{
                return false;
        }
        */
       return cleaned===cleaned.split('').reverse().join('')
}
console.log(isPalindrome('sedek'));

//5. Replace all spaces in a string with underscores

function replaceSpaces(str){
        return str.replaceAll('','_');
}
console.log(replaceSpaces('pavasaris atejo'));

// 6. Count how many time a specific character appears i an string

function countChar(str,char){
        let count=0;
        for(let c of str){
                if(c===char) count++;
        }
        return count
}
console.log(countChar('pavasaris, dangus', 'a'));


//7. remove all digitss from a string

function removeDigits(str){
        return str.replace(/[0-9]/g,'');  // g global ima visus parametrus nurodytus skliaustuose
}
console.log(removeDigits( 'ate2o, j4u'));

// 8. Extract only letters 

function onlyLetters(str){
        return str.replace(/[^a-zA-Z]/g,'');
        
}
console.log(onlyLetters('an88giew55!'));

//9. Find the longest word in sentence

function longestWord(sentence){
        const zodziaia=sentence.split('');
        let maxlen=0;
        let zMaxl='';
        for(zodis in zodziaia){
                zodziaia[zodis]=zodziaia[zodis].replace(/[^a-zA-Z]/g,'')
                if (zodziaia[zodis].length>maxlen){
                        zMaxl=zodziaia[zodis];
                        maxlen=zodziaia[zodis].length
                }
        } return zMaxl
}
console.log( longestWord('atejo jau Pavasaris'));


//10. Convert a string to title case

//function toTitle
// 11. reclace  in a strin **

function maskVolwes(str){
        return str.replace(/[aeiouyAEIOUY]/g,'*')
}

console.log(maskVolwes('Pavasaris'));


//13. convert a sentence to kebab-case (kebab vietoj taskeliu bruksneliai)
function toKebabCase(str){
        return str.toLowerCase().replaceAll(/ /g,'-')
}

console.log(toKebabCase('atejo jau pavasaris'));


//14.convert a sentence to Camel-case
function toCamelCase(str){
        const word=str.split(' ')
        let cameCase='';
        for (let i=0; i<word.length;i++){
                if (i===0){
                        cameCase+=word[i].toLowerCase()
                }else{
                        cameCase=word[i].charAt(0).toUpperCase();
                        cameCase+=word[i].slice(1).toLowerCase();
                }
        }
        return cameCase
}

console.log(toCamelCase('Atejo jau pavasaris'));

//15. Check if string contains only numbers
function isOnlyNumbers(str){
        const numbers='0123456789';
        for(char in str){
                if (numbers.includes(str[char])===false){
                        return false;
                }
        }
        return true;
}
console.log(isOnlyNumbers('1vienas123'));
console.log(isOnlyNumbers('1123'));
console.log(isOnlyNumbers('vienas123'));


//18. Check if two strings are anagrams

/*function areAnagrams(str1,str2){
        const normalize=str=>str.toLowerCase().split('').sort().join('');
        return normalize(str1)===normalize(str2)
}
console.log(areAnagrams('pienas, asas'));
*/

//19. Shorten a sentence to max length and add '--'
function truncate(str, maxLength){
        if(str.length<maxLength){
                return str+'--'
        }else{
                return str.slice(0, maxLength)+'--'
        }
}
console.log(truncate('pomidoras',4));


// 20. Swap the case of every letter
/*function swapCase(str){
        const raides=str.split('');
        let zodis='';
        for (i in raides){
                if (raides[i]===raides.toLowerCase()){
                        zodis +=raides[i].toUperCase()
                }else{
                        zodis +=raides[i].toLowerCase();
                }
        }
        return zodis
}
console.log(swapCase('LabaDiena'));
*/

//22. Remove puntuation from a sentence

function removePunctuation(str){
        return str.replace(/[.,!?;:-]/g,'')
}
console.log(removePunctuation('hi!...- Nejaugi pavasaris'));

//23. Split a sentence into words
function splitWords(str){
return str.trim().split(' ')
}
console.log(splitWords('atejo jau pavasaris'));

// 24  Count uppercase letters

function countUpperCase(str){
 let kiekis=str.match(/[A-Z]/g)
 console.log((kiekis));
 
 return kiekis//.length;
}
console.log(countUpperCase('atejo jau pavasaris'));

//25. Check if word is incluede

function containWord(sentence, word){
        return sentence.toLowerCase().includes(word.toLowerCase());
}

console.log(containWord( 'Pavasris jau atejo', 'atejo'));

//26. Replace all instance of word
function replacesAllWords(str,target, replacement){
        return str.split(target).join(replacement)
}

console.log(replacesAllWords('atejo jau pavasaris', 'pavasaris', 'vasara'));


//32 Mask all but 4 charracters

function maskString(str){
        return str.slice(-4).padStart(str.length, '*');

}
console.log(maskString('Pavasaris'));

//33. Capitalize every second letterLengthfun

function capitalizeEverySecond(str){
        const raides=str.split('');
        let zodis ='';
        for(let i=0; i<str.length;i++){
                if(i%2===0){
                        zodis+=raides[i].toUpperCase();
                }else{
                        zodis+=raides[i].toLowerCase();

                }
        }
        return zodis;
}

console.log(capitalizeEverySecond('mano namas'));

console.log('------All Star Code Challenge #18-------');

function strCount(str,letter){
        let count=0;
            for(let c of str){
                    if(c===letter) count++;
            }
      return count;
    }

    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);
//
    function strCount(str, letter){  
        return str.split(letter).length-1
      }

//
function strCount(str, letter){  
        return str.split('').filter(c => c == letter).length;
      }

      //









