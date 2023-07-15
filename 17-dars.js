// Weakmap - key sifatida object yoki funksiya oladi  WeakSet
// const weakMap = new WeakMap();

// weakMap.set('')
// ============================================================

// FUNCTION DECLARATION
// FUNCTION EXPRESSION

// ARROW FUNCTION
/*const sayHello = () => {
    console.log('Hello world');
}
sayHello()*/
// ======================================

// function foo(){
//     return function(){
//         return function(){
//             return 'Hello world'
//         }
//     }
// }
// oddiy usul
// const newFunk = foo();
// const newFunk1 = newFunk();
// console.log(newFunk1());

// yangi funk
// console.log(foo()()());

// ===========================

// const foo = function (){
//     return 'hello'
// }
// console.log(foo.name); funksiya nomini bilish

// ========================================

// Siz chaqirmasangiz ham ishga tushadigan funksiya
// ;(function () {
//   console.log("hello");
// })();
// ( () => {
//   console.log("hello");
// })();const arr = [1, 2, 1, 2, 3, 1, 2];

// function findUniqueElements(arr) {
//   const counts = {};
//   const uniqueElements = [];

//   arr.map((element) => {
//     counts[element] = counts[element] ? counts[element] + 1 : 1;
//   });

//   arr.map((element) => {
//     if (counts[element] === 1) {
//       uniqueElements.push(element);
//     }
//   });

//   return uniqueElements;
// }

// const uniqueArr = findUniqueElements(arr);
// console.log(uniqueArr);

//  ===================================================

// berilgan massivda elementning bir marta qatnashganligini topish
// const arr = [1, 1, 1, 3, 2, 2, 2];

// const map = new Map()
// for (let value of arr) {
//   map.set(value, 3);
// }
// const value1 = new Set(map.values())
// console.log(value1);

// 1-usul
// const newArr = arr.sort((a, b) => a - b);
// // console.log(newArr);
// for(let i = 0; i < newArr.length; i++){
//     if(newArr[i-1] !== newArr[i] && newArr[i+1] !== newArr[i]){
//         console.log(newArr[i]);
//     }
// }
// 2-usul

// const arr = [1, 1, 1, 3, 2, 2, 2];

// const map = new Map();

// for (let num of arr) {
//   map.set(num, map.get(num) + 1 || 1);
// }
// map.forEach((value, key) => (value === 1 ? console.log(key) : ""));

// ==============================================

// array berilgan va bitta num  berilgan array ichida mavjud bo'lsa index ini
// aks holatda uni joylashtirish mumkin bo'lgan indeksini qaytaring
// array har doim o'sish tartibida bo'ladi

// const nums = [1, 2, 3, 4];
// const target = 5;

// 1-usul
// function foo(arr, num) {
//   const index = arr.map((element) => element >= num).indexOf(true);
//   return index === -1 ? arr.length : index;
// }

// console.log(foo(nums, target));
// 2-usul
// const index = nums.indexOf(target);
// if (index !== -1) {
//   console.log(index);
// } else {
//   nums.push(target);
//   let newNums = nums.sort((a, b) => a - b);
//   console.log(newNums.indexOf(target));
// }
// 3-usul

// const nums = [1, 3, 4];
// const target = 2;
// function foo(arr , target){

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= target)
//             return i
//     }
//     return arr.length
// }
// console.log(foo(nums , target));
// ==========================================

//  text berilgan bu text orasidagi har bir so'z orasida son berilgan  so'zni o'sha son tartibi bo'yicha joylashtirish. input =>salom2 aleyku1m . output =>aleykum salom . Javascript

// const s = 'salom2 aleyku1m';
// const res = {}

// const arr = s.split(' ')

// for(let i = 0 ; i < arr.length ; i++){
//     let str = '' , curr = null;
//     for(let j = 0; j < arr[i].length; j++){
//         if(isNaN(arr[i][j])){
//             str += arr[i][j]
//         }else{
//             curr = arr[i][j]
//         }
//     }
//     res[curr] = str
// }

// const result = Object.values(res).join(' ')

// console.log(result);

// ============================================

// function foo(name, age) {
//   this.ismi = name;
//   this.yoshi = age;
// }
// const result = new foo("Nafisa", 21);
// console.log(result);

function foo(firstName = 'nafisa', lastName){
    console.log(Surkhandarya);
}