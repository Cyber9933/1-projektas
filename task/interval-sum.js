//Suskaiciuoti ka gausime susumavus skaicius intervale imtinai 0..00
function intervalSum(start, end){
    let sum=0;
    //logika
    for (let i=start; i<=end; i++){
        sum+=i;
    }
    return sum;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));
console.log(intervalSum(574, 815));


console.log('--------------');
///samples
console.log('1)',intervalSum(0, 0));
console.log('2)',intervalSum(0, 4));
console.log('3)',intervalSum(0, 100));
console.log('4)',intervalSum(-50, 50));
console.log('5)',intervalSum(-70, 30));
console.log('6)',intervalSum(574, 815));
console.log('7)',intervalSum(0, 1_000_000_000));
//console.log('8)',intervalSum(0, 100_000_000_000_000));


//pakelta 5 laipsiu e5
const a=5e5;
console.log(a);

console.log('a)', intervalSum(2, 4));
console.log('a)', intervalSum(0, 4));
console.log('a)', intervalSum(-2, 4));
console.log('a)', intervalSum(-4, 4));
console.log('a)', intervalSum(-4, 2));
console.log('a)', intervalSum(-4, 0));
console.log('a)', intervalSum(-4, -2));

console.log('---------------');

function intervalSum1(start, end) {
    let sum = 0;

    if (start === 0) {
        sum = (end * (end + 1)) / 2;
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }

    return sum;
}
console.log('a)', intervalSum1(-4, 2));
console.log('a)', intervalSum1(-4, 0));
console.log('a)', intervalSum1(-4, -2));