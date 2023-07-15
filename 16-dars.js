// // 'use strict'
// function foo(a , a , c){
//     console.log(a,c);
// }
// foo(1,2,3)

// ============================higher order function==============================
// function foo(){
//     console.log('Salom');
// }
//  function boo(callBackFunction){
//     callBackFunction()
//  }

//  boo(foo)

// ----------------- example ---------------
// const arr = [1, 2, 3, 4];

//  function qushish(arr){
//     const res = [];
//     for(let value of arr){
//         res.push(value + 2)
//     }
//     return res
//  }
//  function ayirish(arr) {
//    const res = [];
//    for (let value of arr) {
//      res.push(value - 2);
//    }
//    return res;
//  }
//  console.log(qushish(arr));
//  console.log(ayirish(arr));

// qulayligi
// function qushish(value) {
//   return value + 2;
// }
// function ayirish(value) {
//   return value - 2;
// }

// function foo(arr, callBackFunk) {
//   const res = [];
//   for (let value of arr) {
//     res.push(callBackFunk(value));
//   }
//   return res;
// }

// console.log(foo(arr, qushish));
// console.log(foo(arr, ayirish));
// ==============================================
// array elementlari    raqamlardan iborat , agar  har bir raqam takrorlanishlar soni boshqasiga teng bo'lsa false , aks holda true

// const arr = [1, 2 , 2, 3 , 3 ,3 ];
// const map = new Map();

// for (let el of arr) {
//   map.set(el, map.get(el) + 1 || 1);
// }
// const uniqueValues = new Set(map.values());
// console.log(uniqueValues.size === map.size);

// ============================================
// folsy qishmat qaytmaydi
// const arr = [1, 2, 3, 4];
// function foo(value, valueIndex, shuArrayningOzi) {
//   // console.log(valueIndex);
//   return value % 2 === 0;
// }
// const filterValue = arr.filter(foo);
// console.log(filterValue);

// =================================================

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce(function(acc , currebtValue){
//     acc = acc + currebtValue
//     return acc;
// })

// console.log(sum);
// ==============================================

// let text = "Assalomu aleykum";
// function foo(acc, curr) {
//   acc[curr] = acc[curr] + 1 || 1;
//   return acc;
// }
// let result = text.split("").reduce(foo, {});
// console.log(result);

// ============================================= 18 - 27

// const boys = [
//   {
//     firstName: "John",
//     age: 10,
//   },
//   {
//     firstName: "Harris",
//     age: 20,
//   },
//   {
//     firstName: "Robinson",
//     age: 26,
//   },
//   {
//     firstName: "Scott",
//     age:40
//   },
// ];

// function armyBoy(value){
//     return (value.age >= 18 && value.age <= 27);
// }

// let army = boys.filter(armyBoy);

// console.log(army);

// ===================== Home Task ======================================
// const someMap = [{ a: "candy", b: "dirt" }];
// let newA = "";
// const newMap = someMap.map((key) => {
//   key.b = key.a;
//   key.a = newA;
//   return key;
// });
// console.log(newMap);
