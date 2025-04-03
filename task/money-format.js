// 3->3.00 Eur
//3.99->3.99 Eur

function moneyFormat(){
    return 'Eur';

}

console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));

console.log('----------');

function moneyFormat1(money){
    return money.toFixed(2)+' Eur'

}

console.log(moneyFormat1(3));
console.log(moneyFormat1(3.1));
console.log(moneyFormat1(3.5));
console.log(moneyFormat1(3.99));

console.log('----------');

function moneyFormat2(money){

    // is "moeney" reikia gauti dali po kablelio
    const decimalPart=(money-Math.floor(money))*100;      //0.1 (3.1-3.00)
    
    // kiek yra skaitmenu po kablelio
                                        //1

    //jeigu, po kablelio yra 2 skaitmenys-nieko su skaiciais daryti nereikia
if (decimalPart===0){
    return money+'.00 Eur'
}

    // jei po kablelio yra 1 skaitmuo, pridedame antra skaitmeni 0
    if(decimalPart % 10 ===0){
        return money+'0 Eur';
    }
    // jei po kablelio yra0 skaitmenu, pridedame du 00
    // ir galiausia prideti' Eur'
    return money +' Eur';

}

console.log(moneyFormat2(3));
console.log(moneyFormat2(3.1));
console.log(moneyFormat2(3.5));
console.log(moneyFormat2(3.99));

console.log('----------');
function moneyFormat3(money1){
    //3.49
    const strMoney=''+money1;
    const dotPosition=strMoney.indexOf('.'); //1 pozicija sedi taskas
    
if(dotPosition===-1){
    return money1+'.00 Eur'
}
const afterDot=strMoney.slice(dotPosition+1); //'49'
    if(afterDot.length===1){
        return money1+ '0 Eur';
    }
   
    return money1+' Eur'
}

console.log(moneyFormat3(3));
console.log(moneyFormat3(3.1));
console.log(moneyFormat3(3.5));
console.log(moneyFormat3(3.99));

console.log('----------');

