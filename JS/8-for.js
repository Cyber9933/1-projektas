/* FOR (loop) - cikklas   dirba iki tol kol tenkina 'i', jei uzduotis i<5 arba i++(padidina vienu)*
bet iki/ arba nuo >5
*/

for (let i=-5; i<5; i++) {
    console.log('number;',i);
}
//trmpinys zemiau esanciam
console.log('--------');
console.log('number', 0);
console.log('number', 1);
console.log('number', 2);
console.log('number', 3);
console.log('number', 4);


console.log('--------');

for (let i=0; i<5; i++) {
    console.log('b) number;',i);
}

console.log('--------');
for (let i=0; i<=5; i++) {
    console.log('c) number;',i);
}


console.log('--------');
for (let i=5; i>=0; i--) {
    console.log('d) number;',i);
}

console.log('--------');

// 0,1,2,3,4,...
//0,2,4,6,8...
//didina kas du paskutine 
for (let i=0; i<11; i+=2)
{
    console.log('kas du', i)
   
}

console.log('--------');
for (let i=0; i<1; i+=0.1)
    {
        console.log('kas du', i)
       
    }
  

 console.log('--------');    

for (let k=0; k<10; k++)
    {
        console.log( k/10)
       
    } 
    
console.log('--------');
//pinigine israiska
console.log(0.1+0.2);
    console.log((10+20)/100);
    console.log((399+20)/100);
    
    console.log('--------');

    for(let i=0; i<4; i++){
        console.log('labas');
        
    }
    console.log('--------');
    const n=7;
    console.log(`${n}*1=${n*1}`);
    
    console.log('--------');
    for (let  i=1; i<=10; i++){
        console.log(`${n}*${i}=${n*i}`);   
    }
    console.log('--------');
    const marks=[10,2,8,4,6];
    let sum=0
    sum+=marks[0];
    sum+=marks[1];
    sum+=marks[2];
    sum+=marks[3];
    sum+=marks[4];

console.log(sum);

    let sum2=0
    for (let i=0; i<5; i++){
        console.log('index',i);
        
    }
    console.log('--------------------');
    let sum3=0
    for (let i=0; i<5; i++){
        console.log('index',i,'-->', marks[i]);sum2+=marks[i];
    }
    console.log(sum3);
    console.log('--------------------');
//ima marks lentele automatiskai .lehgth
 let sum4=0
    for (let i=0; i<marks.length; i++){
        console.log('index',i,'-->', marks[i]);sum2+=marks[i];
    }
    console.log(sum4);
    console.log('--------------------');
    //Studento vardas yra VARDAS
    const names=['jonas', 'maryte','patras','ona']
for (let i=0; i<names.length; i++){
    console.log(i, names[i]);
    const s=`Studento vardas yra${names[i]}`;
    console.log(s)

    
    
}
console.log('--------------------');
//Vardas "Vardas" sudarytas is  raidziu

for (let i=0; i<names.length; i++){
    const name=names[i];
    
    const s=`Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;
    console.log(s);
    
}