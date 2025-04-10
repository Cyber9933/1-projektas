
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





  
  
function reverseWords(str) {
    if (typeof str !== 'string') {
      return 'need string';
    }
    
    
    let words = str.split(' ');
    console.log( words);
    for (let words = 0; words <words.length; words++) {
        const str = words[words];
        
    }
    
    let reversedWords = words.reverse();
    
    
    return reversedWords.join(' ');
  }

console.log(reverseWords('The greatest victory is that which requires no battle'));

/*function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }
*/


