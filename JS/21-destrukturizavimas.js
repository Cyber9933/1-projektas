

const a1=[1,11,111,1111];
const a2=[2,22,222,2222];
const a3=[3,33,333,3333];
const a4=[4,44,444,4444];

//siekiamybe [1,11,111,1111,2,22,222,2222]

//ppvz su CONCAT
const a12=a1.concat(a2);
console.log(a12);


// destruk metodu ...
const b12=[...a1,...a2];
console.log(b12);


const b423=[...a4,...a2,...a1];
console.log(b423);


// dalis info gali buti statine, dalis kopijuoti is masyvo , bet kopijuosi visas kintamasis)
// norime masyvo[7,4,44,444,88]


const c1=[7,...a4,88]; //[7,4,44,444,4444,88]

// jei pries ...a4 nebutu tritaskio, idetu tiesiog masyva [4,44,444,4444]
console.log(c1);


console.log('******pvz su OBJEKTAIS*******');

const o1={name:'Jonas'};
const o2={age:99};
const o3={isMarried:true};

const o12={...o1,...o2,...o3};
console.log(o12);

// objektai turi, ko neturi masyvai: gali raktai persidengti jei jie kartojasi ir
//  lieka tie raktai kurie buvo paskutiniai

const p1={a:1};
const p2={b:2};
const p3={c:3,a:7};

const p12={...p1,...p2};
console.log(p12);

//labai svarbus eiliskumas
const p13={...p1,...p2,...p3};
console.log(p13);

const p213={...p2,...p1,...p3};
console.log(p213);

//objektuose taip pat galima statine info

const p4={d:4,...p3,c:99};
console.log(p4);

console.log('******PVZ*******');

//1)
const marks=[10,2,8,4,6];
const [first, second,...rest]=marks;

console.log(first);
console.log(second);
console.log(rest);

console.log('--');
//2)
const names =['Jonas', 'Maryte', 'Petras','Ona'];
const n1=names[0];
const n2=names [1];
const n34=names.slice(2)

console.log(n1);
console.log(n2);
console.log(n34);

console.log('--');

// inesus destrukt (viskas paeiliui kas masyve, nors ir pakeiti vardus kitais pavadinimais)

const[x,y,...z]=names;
console.log(x);
console.log(y);
console.log(z);


const mix=[1,'asd',true,[],{},undefined]
const [m1,m2,m3,...mRest]=mix;

console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest);

console.log('--');

// su OBJEKTAIS  (objektai neturi eiliskumo, renkiesi kas tau reikalinga)
const person={
    address:'Kaunas, Nenumo 8',
    name:'Jonas',
    age:99,
    isMarried:true,
}
//skliaustai visada turi sutapti. Jei objektas {} skliaustai
const {name, age,...p}=person;

console.log(name);
console.log(age);
console.log(p);
//istraukimas antru etapu naudoji pasirinkta kintamaji, siuo atveju 'p'
//
console.log(p.address);
console.log(p.isMarried);

console.log('--');
//ciklas pvz

const students=[
    {name:'Jonas',age:99},
    {name:'Maryte',age:88},
    {name:'Petras',age:77},
    {name:'Ona',age:66},
];

// Studentui, vardu Jonas, yra 99 metai.

for(let i=0; i<students.length; i++){
    const student=students[i];
    const name=student.name;
    const age=student.age;
    const result=`Studentui, vardu ${name}, yra ${age} metai`
    
    console.log(result);
    
};


console.log('--');


//for of eina per objekus

for(const student of students){
    const name=student.name;
    const age=student.age;
    const result=`Studentui, vardu ${name}, yra ${age} metai`;
    console.log(result);
    
}
console.log('--');
// destrukturizavimas inesamas

for(const student of students){
    const {name,age}=student;
    //inestas destr)
    const result=`Studentui, vardu ${name}, yra ${age} metai`;
    console.log(result);
    
}
console.log('----visiskai supaprastinta----');
for(const{name,age}  of students){
       const result=`Studentui, vardu ${name}, yra ${age} metai`;
    console.log(result);
    
}
console.clear();
console.log('----number masyvas----');

const numbers=[
    [0],
    [1,11],
    [2,22,222],
    [4],
    [5],
    [6],
];
//Pirmas skaicius yra X ir dar yra Y papildomu skaicius.

for (const numberList of numbers){
    const first=numberList[0];
    const rest=numberList.slice(1);
    const result=`Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaicius`
    console.log(result);
    
}
console.log('******');


for (const numberList of numbers){
    const [first,...rest]=numberList;
    const result=`Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaicius`
    console.log(result);
    
}

console.log('***TRUMIAUSIAS VARIANTAS***');

for (const [first,...rest] of numbers){
    
    const result=`Pirmas skaicius yra ${first} ir dar yra ${rest.length} papildomu skaicius`
    console.log(result);
    
}