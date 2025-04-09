

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


