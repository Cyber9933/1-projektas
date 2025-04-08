// while dar vienas ciklas

const marks=[10,2,8,4,6];
let sum=0;

for (let i=0; i<marks.length; i++){
    sum +=marks[i]
}
console.log(sum);

// i  ateina is let'o , ji aprisrasyti pries cikla
// taip pat kaip for tik labiau ismetyta

let sum2=0;
let i=0;
while(i<marks.length){
    sum2+=marks[i];
    i++;
}
console.log(sum2);


// while patogesnis tuo metu, kai nezinome iki kiek turi suktis ciklas pvz sumuoti skaicius, kol pasieksmie milijona

let count=0;
let sum3=0;

while (sum3<1000000){
    sum3+=count++;
}
console.log(count); //tiek laiko prasisuko kol pasieke 1000000 (1415 kartu)







