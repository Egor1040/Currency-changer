//Currency Changer
let summ = prompt('Введіть cумму для обміну в гривнях');

//Курс валют
let usd = 40.3; 
let eur = 43.725;
let gpb = 49.100;
let pln = 9.200;
let chf = 43.500;

console.log(String(summ) + ' UAH (гривень) = ', summ / usd + ' USD (долларів)');
console.log(String(summ) + ' UAH (гривень) = ', summ / eur + ' EUR (євро)');
console.log(String(summ) + ' UAH (гривень) = ', summ / gpb + ' GPD (англійських фунтів)');
console.log(String(summ) + ' UAH (гривень) = ', summ / pln + ' PLN (польських злотих)');
console.log(String(summ) + ' UAH (гривень) = ', summ / chf + ' CHF (швейцарських франків)');

