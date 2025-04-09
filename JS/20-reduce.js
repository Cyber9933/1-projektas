//REDUCE - supraprastinti, sumazinti kieki
// vienas is Method-array

// redyce is daug reiksmiu padaro viena


const marks=[10,2,8,4,6];

let sum=0;
for(const n of marks){
    sum+=n
}
console.log(sum);

                        //pvz masyvo vienas is elementu sumavimas 10+2+8+4+6
const sum2=marks.reduce((total,n)=>total+n);
console.log(sum2);

//10-2-8-4-6
const minus=marks.reduce((total,n)=>total-n);
console.log(minus);

//norint atimti  viso, ziurim kas parasyte let'e. jei pirminis narys let=0
// total'ui reikia nurodyti  reiksme
//siuo atveju =>total+n, 0 (nurodoma kad nuo 0 prasidejo veiksmai)

const sum3=marks.reduce((total,n)=>total+n,100); //gauname 130
console.log(sum3);

//10-2-8-4-6
const minus1=marks.reduce((total,n)=>total-n,100);  // gauname 70(100-30 is const marks)
console.log(minus1);

const multi=marks.reduce((total, n)=>total*n,1);
console.log(multi);

console.log('****su TEKSTAIS****');

//for of f-ja
const names=['Jonas', 'Maryte', 'Petras', 'Ona'];
let abbr='';
for (const name of names){
    abbr+=name[0]+'.';
}
console.log(abbr);

//su REDUCE f-ja
const abbr2=names.reduce((total, name)=>total+name[2]+'.','')
console.log(abbr2);
