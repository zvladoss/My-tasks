// TODO: Створіть функцію для обчислення площі прямокутника.Функція має приймати два параметри: довжини сторін прямокутника, а повертати - значення площі.Якщо передано лише один параметр - функція має обчислювати площу квадрата.

const area = (a, b) => (!a || !b ? a * a : a * b);
console.log(area(12));
console.log(area(4, 8));
console.log(area(2));
console.log(area(34, 44));

// TODO: Створіть функцію для підрахунку вартості товару з урахуванням знижки.Функція має приймати 2 параметри, а саме: вартість товару без знижки (number) та відсоток знижки (number).Функція має повертати вартість товару зі знижкою. Якщо відсоток знижки в функцію не передано - має використовуватись стандартне значення в 10%.

const totalSum = (cost, discount = 10) => (cost / 100) * (100 - discount);
console.log(totalSum(450, 5));
console.log(totalSum(4678, 8));
console.log(totalSum(2000));
console.log(totalSum(150, 2));

// TODO: Створіть функцію для визначення, чи є число додатним (більше 0).Функція має приймати як параметр число, і повертати true(bool), якщо число додатне, або false(bool) - якщо від'ємне, або 0.

const fu = num => (num > 0 ? true : false);
console.log(fu(-12));
console.log(fu(4));

// TODO: Створіть функцію, що буде розраховувати вартість поїздки на таксі.Функція має приймати як вхідний параметр відстань в кілометрах (number), а повертати вартість поїздки в гривнях (number).Вартість поїздки розраховується за такими правилами:подача авто: 30 грн;перші 10 км: 8 грн/км;вартість кожного км поїздки після 10 км: 5 грн/км

const taxi = km => {
  let takeTaxi = 30;
  return km <= 10 ? (takeTaxi += 8) : (takeTaxi += 8 + (km - 10) * 5);
};
console.log(taxi(45));
console.log(taxi(114));
console.log(taxi(5));

// TODO:
