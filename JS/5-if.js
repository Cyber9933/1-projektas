/*
IF - palyginimo salyga

Palyginimo operatoriai:
-visi:>,<,>=,<=,==(ar lygu),=== (ar lygu?),!=(ne, lygu),!==
-naudotini:>,<,>=,<=,===, !==
-nenaudotini:==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... esle {}
*/
console.clear()

function pavadinimas () {

}
console.log('START');
if (4>2) {
console.log('taip, 4 yra daugiau uz 2');
}

console.log('END');

if (4>2) {
    console.log('---taip');
    } else {
        console.log('---ne:')
    }

    const temp=-2;

    if (temp>=18) {
        console.log('Silta');
    }else {
        console.log('Salta');
    }
    
    //jei zemiau 0 -salta
    // jei zemiau 10 - ne
    // jei zemiau 22 - silta
    // jeis daugiau - karsta

    const temp2=5;
    if(temp2<0) {
        console.log('Salta');
    } else if (temp2<10){
        console.log('ne');
    } else if (temp2<22){
        console.log('Silta');
    } else{
        console.log('karsta');
    } 
    
    const temp3=-55;

    if (temp3<0) {
        console.log('Salta');
    }

    if (temp3<10){
        console.log('Ne');
    } 

    if (temp3<22){
        console.log('Silta');      
    }else{
        console.log('Karsta');
    }

    if (4===4) {
        console.log('tenkina');        
    }else{
        console.log('NE-tenkina');     
    }

    if (4!==4) {
        console.log('tenkina');        
    }else{
        console.log('NE-tenkina');     
    }

    if (4!=4) {
        console.log('tenkina');        
    }else{
        console.log('NE-tenkina');     
    }

    //blogas variantas neatskiria teksto nuo skaiciaus
    if (4=='4') {
        console.log('tenkina');        
    }else{
        console.log('NE-tenkina');     
    }
// geras - griezta lygybe - patikrina duomenu tipa, netenkina nes vienas number kitas string
    if (4==='4') {
        console.log('tenkina');        
    }else{
        console.log('NE-tenkina');     
    }
