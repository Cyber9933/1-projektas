/*
TYPEOF - duomenu tipo nustatymo operatorius nustato ar tai yra stringas('pavasaris')
 ar tai yra number (12345) ar tai yra boolean (true/false) ar tai yra array (masyvas) 
 ar tai yra object (objektas) ar tai yra function (funkcija) 
 ar tai yra undefined (nenurodyta reiksme) ar tai yra null (nurodyta nera reiksmes)
*/
console.log((typeof 5));
console.log((typeof -5));
console.log((typeof 3.14159));
console.log((typeof 'asd'));
console.log((typeof true));
console.log((typeof false));
console.log((typeof []));
console.log((typeof [1,2,3]));
console.log((typeof ['a', 'b', 'c']));
console.log((typeof [true, false]));
console.log((typeof sum));
console.log((typeof undefined));
console.log((typeof null));
console.log((typeof {}));

const a=null;
if (a===null){
    console.log('NULL');
    }

const b=[];
if (Array.isArray(b)){
    console.log('ARRAY');
    
}

const c = 5;
if (Array.isArray(c)) {
    console.log('ARRAY');
} else {
    console.log('ne arejus');
}
//