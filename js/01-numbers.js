/*
KINTAMIJEI
Inicijavimo budai:
- const (default) - reiksme nekinta
- let - kai reiksme turi kisti
- var - NENAUDOTI!!!

SKAICIAI:
- sveikieji
- desimtainiai
- teigiami
- neigiami
- nulis
- begalybe (infinity)
- Nan (not-a-number)

OPERATORIAI: +, -, *, /, **(kelimas laipsniu)

MATEMATINES FUNKCIJOS:
- sqrt (saknis)
- sin/cos
- abs (absolute reiksme)
- round/ceil/floor (skirtingi apvalinimai)
*/



console.log('Numbers...');

const a = 0;
let b = 1;
let c = 2;

console.log(a);
console.log(b);
console.log(c);


b = 5;
c = 20;

console.log(b);
console.log(c);


const sveikasis = 777;
const desimtainis = 3.141592;
const neigiamas = -1;
const NeigDesimt = -3.141592;
const begalybe = Infinity;
const NeigBegal = -Infinity;
const neSkaic = NaN;

const saknis9 = Math.sqrt(9);
console.log(saknis9);

//Apvalinimas:
const round1 = Math.round(0.5);
console.log(round1);

