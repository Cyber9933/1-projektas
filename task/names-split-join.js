/*

Funcija gauna sakini, kuris atrodo taip:
"Studentai: jonas, Maryte, petTras, ONA."

F-jos darbas grazinti teisingai perrasyta sakini.
t.y istaisyti vardus:
pvz"Studentai:Jonas, Maryte, Petras, Ona."
*/


/*
-atsistirti vardsu is orginalaus teksto
-konvertuojame teksta i mazasias raides
-issiskaidyti individuoalius vardus i masyva
-ciklas, eina per individualius vardus:
//-pirmas raide didziosios raides
     - pasiima pirma raide,  .split
     -ja padidina .uperCase
     -apjungi i galutini normalu varda 
-paganimae galitini reikiama sakini .join
*/

function correctSentence(text) {
    const parts=text.split(':');
  
    const names=parts[1].slice(0,-1).toLowerCase().split(', ');

      console.log(parts);
      console.log(names);
      for (let i=0; i<names.legth; i++)
      {
        const names=names[i];
        const nameFirstLetters=names[0].upperCase();
        const restName=names.slice(1);
        const name=nameFirstLetters+restName;
        names[i]=newName;
       
        
      }
      
    return parts[0]+': '+names.join(', ')+' .';
}

console.log(correctSentence("Studentai: jonas, Maryte, peTras, ONA."));