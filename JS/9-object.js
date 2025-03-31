/*
OBJECT - objektas, , (kitose kalbose siek tiek panasu i: hasmap, dictionary -(phyton))
paslankus, bet gali sukelti keblumu sprendziant uzdavinius



*/
const empty={};
    console.log(empty);
    
const person={ //keyValueFor
    name: 'Jonas',
    age:99,
    isMarried:true,
};
console.log(person);

// kaip issiaiskinti kad manp vardas X
// Sveiki, mano vardas X
console.log('--------standartine sintakse-----');
console.log(`Sveiki, mano vardas ${person['name']}`);

//cia pozicijos turi pavadinimus, ir per pozicijas kreipiesi bet butinai kabutes ${person['name']}, be kabuciu neranda 'name', be kabuciu traktuojamas kaip let arba const

console.log(person['isMarried']);
console.log(person['age']);

console.log(`Sviki, man yra ${person['age']}`);

console.log(person.age);
console.log(person.isMarried);
console.log(person.name);


console.log('--------Nestandartine, supaprastinta sintakse-----');




//neveikia kai be kabuciu, jei ne vientisas zodis

const demo={
    'color': 'red',
    '5':5, //negali buti skaicius pirmas, visad naudojam CamelCase, nebent kabutese
    'is Married':true,
};
console.log(demo['color']);
console.log(demo.color);


console.clear();
const pc={
    cpuCores:8,
    ram:16,
    diskSpace:512,
    diskType: 'ssd',
    os: 'win10',

}

console.log(pc);

console.log(pc.cpuCores);
pc.ram=32;
console.log(pc);

pc.os='win98';
console.log(pc);


console.log('-----------------');

console.clear();


const student={
    name: 'Maryte',
    age:88,
    isMarried:false,
    phoneNumbers:[], 
    parent:[ //kreipiame Aray[ {}]
        {
            name:'Petras',
            age:77,
            phoneNumbers:[11111111,333333333],

        },
        {
            name:'Ona',
            age:66,
            phoneNumbers:[2222222,44444444],
        },
    ],
};

console.log(student.name);
//kiek turi telefonu
console.log(student.phoneNumbers.length);

// kiek turi tevu length
console.log(student.parent.length); 

// kaip suzinoti tevu vardus
console.log(student.parent[0].name);
console.log(student.parent[1].name);


//kaip suzinot kiek turi tel nr
console.log(student.parent[0].phoneNumbers.length);
console.log(student.parent[1].phoneNumbers.length);

// koks yra naujausias motinos nr
console.log(student.parent[1].phoneNumbers[1]);

console.log('-----------');
console.clear();



//turetume susitarti, kas arejuje ka atitinka - papildomi kintamieji age, isMarried.. taip pat duomenu eiliskumas turi atitikti
const studentName1=['Jonas',99,true];
const studentName2=['Maryte',88,false];


const stud1=
{
    name:'Jonas',
    age:99,
    isMarried:true,
};
const stud2={
    name:'Maryte',
    age:88,
    isMarried:false,
};
console.log(stud1.name);






