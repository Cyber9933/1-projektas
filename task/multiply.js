

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaicius.';
    }

    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaicius.';
    }

    if (isNaN(a)) {
        return 'Pirmasis parametras nera normalus skaicius.';
    }

    if (isNaN(b)) {
        return 'Antrasis parametras nera normalus skaicius.';
    }

    if (a === Infinity || a === -Infinity) {
        return 'Pirmasis parametras negali buti begalybes.';
    }

    if (b === Infinity || b === -Infinity) {
        return 'Antrasis parametras negali buti begalybes.';
    }

    return a * b;
}



console.log(multiply(2,2));
console.log(multiply(7,5));
console.log(multiply(7,-5));
console.log(multiply(-7,5));
console.log(multiply(-7,-5));
console.log(multiply(7,0));
console.log(multiply(-7,0));
console.log(multiply(0,5));
console.log(multiply(0,-5));


if(0===-0){
    console.log(('TAIP'));
    
}

console.log(multiply(-7,'labas'));
console.log(multiply('labas',5));
console.log(multiply(0,'labas'));


console.log(multiply(2, Infinity));
console.log(multiply(Infinity, 3));
console.log(multiply(Infinity, Infinity));

console.log(multiply(2, -Infinity));
console.log(multiply(-Infinity, 3));
console.log(multiply(-Infinity, -Infinity));
//