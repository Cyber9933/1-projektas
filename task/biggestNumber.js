console.clear();
///stringas, arejus ir object turi pirmasias funkcijas kompiuterineje abs pirma Didziosios paskui mazosios, ir jos techniskai mazosios kaip didziausias
function biggestNumber(list)
{
    const lastIndex=list.length-1;
    return list[lastIndex];
}
//netinka



console.log(biggestNumber([1]));
console.log(biggestNumber([4]),'-->',4);
console.log(biggestNumber([4,3,1]),'-->',4);
console.log(biggestNumber([1,5,3,4]),'-->',4);
console.log(biggestNumber([2,3,3]),'-->',4);

//neima minuso
function biggestNumber1(list) {
    let bigest=0;
    for (let i=0; i<list.length; i++)
    {
        if( list[i]>bigest){
            bigest=list[i];
        }
    }
    return bigest
}
console.log(biggestNumber1([2]));
console.log(biggestNumber1([3]),'-->',4);
console.log(biggestNumber1([5,3,1]),'-->',4);
console.log(biggestNumber1([3,5,3,4]),'-->',4);
console.log(biggestNumber1([1,3,3]),'-->',4);
console.log(biggestNumber1([-1,-3,-3]),'-->',4);


//ima minsa nes yra bigest1=list[0]
function biggestNumber2(list) {
    let bigest1=list[0]; //istaiso neigiamo skaiciaus klaida(list[0])
    for (let i=1; i<list.length; i++)
    {
        if( list[i]>bigest1){
            bigest1=list[i];
        }
    }
    return bigest1
}

console.log(biggestNumber2([2]));
console.log(biggestNumber2([3]),'-->',4);
console.log(biggestNumber2([5,3,1]),'-->',4);
console.log(biggestNumber2([3,5,3,4]),'-->',4);
console.log(biggestNumber2([1,3,3]),'-->',4);

console.log(biggestNumber2([-1,-3,-3]),'-->',4);


//mato kad yra sarasas, 
function biggestNumber3(list) {
    if (!Array.isArray(list))
    {
        return 'Duomenys turi buti sarase';

    }
    let bigest2=list[0];
    for (let i=0; i<list.length; i++)
    {
        if( list[i]>bigest2){
            bigest2=list[i];
        }
    }
    return bigest2
}

console.log(biggestNumber3([3]));
console.log(biggestNumber3([3]),'-->',4);
console.log(biggestNumber3([5,3,1]),'-->',4);
console.log(biggestNumber3([3,5,3,4]),'-->',4);
console.log(biggestNumber3([1,3,3]),'-->',4);

//radus stringa - ignoruoti
console.log(biggestNumber3([1,3,3, 'asd']),'-->',4);
console.log(biggestNumber3([-1,-3,-3]),'-->',4);

console.log(biggestNumber3('turi'));
console.log(biggestNumber3([]));
console.log(biggestNumber3([1,3,3]),'-->',4);
console.log(biggestNumber3([1,3,3, 'asd']),'-->',4);

// true ir false interpretuojama kaip 1;
console.log(biggestNumber3([-1,true,-3]));
console.log(biggestNumber3([false,-3,-3]));
console.log(biggestNumber3([Infinity,3,3]));

console.log('-----TEISINGIAUSIAS VARIANTAS--------');


//teisingiausias variantas
//tik arejaus duomenys []
function biggestNumber5(list) {
    if (!Array.isArray(list)) {
        return 'Duomenys turi buti sarase.';
    }

    if (list.length === 0) {
        return 'Tusciame sarase didziausio skaiciaus rasti neimanoma.';
    }

    let biggest5 = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

        if (list[i] > biggest5) {
            biggest5 = list[i];
        }
    }

    return biggest5;
}
console.log(biggestNumber5([-1,true,-3]));
console.log(biggestNumber5([false,1,-3]));
console.log(biggestNumber5([Infinity,3,1]));
console.log(biggestNumber3([1,3,3, 'asd']),'-->',4);

