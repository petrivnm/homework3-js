// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numArray = [0,1,2,3,4];
// let strArray = ['q','ww','e','a','ggg'];
// let mixArray = ['asd',123,-99,true,false];
// console.log(numArray);
// console.log(strArray);
// console.log(mixArray);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = true;
// arr[1] = false;
// arr[2] = 'qwerty';
// arr[3] = -1;
// arr[4] = 2022;
// arr[5] = 'new';
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>abrakadabra</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} - abrakadabra</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =1;
// while (i<21) {
//     document.write(`<h1>asdasdasd</h1>`);
//     i++;
//         }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i =1;
// while (i<21) {
//     document.write(`<h1>${i} - asdasdasd</h1>`);
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [55,1,2,3,4,5,6,7,8,9];
// for (const number of arr) {
//     console.log(number);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArr = ['qwe','asd','zxc','a','b','c','d','e','f','10'];
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//     let mixArr = [1,2,true,'qqq',155,false,'two',-88,9,'10'];
// for (let i = 0; i <10; i++) {
//     console.log(mixArr[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//     let mixArr = [1,2,true,'qqq',155,false,'two',-88,9,'10'];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === 'boolean'){
//         console.log(mixArr[i])
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixArr = [1,2,true,'qqq',155,false,'two',-88,9,'10'];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === "number"){
//         console.log(mixArr[i])
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixArr = [1,2,true,'qqq',155,false,'two',-88,9,'10'];
// for (let i = 0; i < mixArr.length; i++) {
//     if (typeof mixArr[i] === "string"){
//         console.log(mixArr[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = true;
// arr[2] = false;
// arr[3] = 'name';
// arr[4] = 55;
// arr[5] = '88';
// arr[6] = -1;
// arr[7] = 'olya';
// arr[8] ='ww';
// arr[9] = [];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//         document.write(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !==0){
//         console.log(i);
//         document.write(i);
//     }
// }