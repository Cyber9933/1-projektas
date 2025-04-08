
//supaprastina ciklo forma
// cikla dazzniausia iteruojame per masyva


const marks=[10,2,8,4,6];
let sum=0;

for(let i=0; i<marks.length;i++){
    const mark=marks[i];
    sum+=mark;
}
console.log(sum);

let sum2=0;
for(const mark of marks){
    sum2+=mark;
}
console.log(sum2);


console.log('-------------');

//su tekstais
// tik viska is eiles imi

const names=['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes=[];
for(const name of names){
    const details={
        name:name,
        firstLetter: name[0],
        lastLetter: name.at(-1),
        size: name.length,
    }
    nameSizes.push(name.length);
}
console.log(nameSizes);



