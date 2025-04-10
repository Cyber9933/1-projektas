//FOR-IN
// automatizuoti visa procesa
// naudojama objektams
//
const person={
    name:'Jonas',
    age:99,
    isMarried:true,
};
const keys=Object.keys(person); //object grazina masyva
console.log(keys);

for (const key of keys){
    console.log(person[key]);
    
}


for (const key in person){
    console.log(person[key]);
    
}


console.log('*****************');
//suskaiciuoti duotame tekste 'Labas' kokiu raidziu yra daugiausia

//1) simboliu analiz
const text='pavasaris';

const symbols={};
/*symbols['L']=1;
symbols['a']=1;
symbols['b']=1;
symbols['a']+=1;
symbols['s']=1;
*/
////////////
for(const s of text){
    if(symbols[s]){
        symbols[s]++
    }else{
        symbols[s]=1;
    }
}

console.log(symbols);

//2) surasti didziausia kieki
/*const counts={
    'L':1,
    'a':2,
    'b':1,
    's':1,
}
    */

let max=0;
for(const s in symbols){
    if(symbols[s]>max){
        max=symbols[s];
    }
}
console.log(max); //3vnt - a

//3)
/*const max=2;
const letter='a';
*/
const maxSybols=[];
for(const s in symbols){
    if(symbols[s]===max){
        maxSybols.push(s);
    }
}
console.log(maxSybols);

console.log('*********');

const obj={
    name: 'Maryte',
};
console.log(obj);
obj.age=88;
console.log(obj)
;


