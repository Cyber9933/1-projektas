
//Rodykline F-ja

//fancyMath(7,'+',5)->12
//fancyMath(7,'-',5)->2
//fancyMath(7,'*',5)->35
//fancyMath(7,'/',5)->1.4


function fancyMath(a,sign, b){
    if(sign==='+'){
        return a+b;
    }
    if(sign==='-'){
        return a-b;
    }
    if(sign==='*'){
        return a*b;
    }       
    if(sign==='/'){
        return a/b;
    }
    return 0;

}
console.log(fancyMath(7,'+',5));
console.log(fancyMath(7,'-',5));
console.log(fancyMath(7,'*',5));
console.log(fancyMath(7,'/',5));

////// toks pat tik suprastintas
console.log('**********');


function fancyMath1(n1,sign, n2){
   const func ={
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b,
    '*':(a,b)=>a*b,
    '/':(a,b)=>a/b,
    
   };
   const funcToUse=func[sign]
   if(funcToUse===undefined){  // ka rasi, jei nebus tokios reiksmes console.log(funcToUse); //undefined
    return ':(';
   }
   return funcToUse(n1,n2); //tolygu a ir b
   
}

   

console.log(fancyMath1(7,'+',5));
console.log(fancyMath1(7,'-',5));
console.log(fancyMath1(7,'*',5));
console.log(fancyMath1(7,'/',5));
console.log(fancyMath1(7,'**',5));