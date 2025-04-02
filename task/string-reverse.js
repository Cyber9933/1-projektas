
/*function stringReverse(text){
    let result=''

    //logika:tekst-->txet
    for (let i=text.legth-1; i>0; i--) {
        console.log(1);
        
    }
    return result;
}

console.log(stringReverse('sula'));
console.log(stringReverse('sedek'));
console.log(stringReverse('abc'));
console.log(stringReverse('akla'));

*/

/* function stringReverse(text){
    let result='';
    for (let i=0; i<text.legth; i++){
       result +=text[text.legth-i];
    }
    return result;
}

console.log(stringReverse('sedek'));
console.log(stringReverse('sula'));
console.log(stringReverse('abc'));
console.log(stringReverse('akla'));
*/

/*
function stringReverse(text){
    let result='';
    for (let i=0; i<text.legth; i++){
       result=text[i]+result;
    }
    return result;
}
*/
function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}

console.log(stringReverse('sula'));
console.log(stringReverse('alus'));
console.log( stringReverse('vasara'));


//

