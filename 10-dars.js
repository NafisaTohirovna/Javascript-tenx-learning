// const {log} = console
// log('Hello')

// ===============================================================

// const span = {
//     foo: function (name){
//         console.log('hello ' + name);
//     }
// }
// const {foo} = span;
// foo('john')

// ================================================================

// [ [ 'names', 'John' ], [ 'age', 30 ], [ 'isMarried', true ] ] shu natijani olish

// const person = {
//     names:"John",
//     age:30,
//     isMarried:true
// }

// 1) yo'l
// const val = Object.entries(person)
// console.log(val);

// 2) yo'l
// const res = []
// for(let value in person){
//    res.push([value , person[value]])
// }
// console.log(res);

// =============================================================

// const person = {
//     name1:"nafisa",
//     age:30,
//     isMarried: true
// }
// const res = []
// for(let value in person){
//     res.push([value , person[value]])
// }
// log(res);
// ====================
// --- function constructor ------
// function addArr(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = firstName;
//     this.arr = function (){
//         console.log(
//             `ismi ${this.firstName} , familyasi: ${this.lastName}`
//         );
//     }
// }
// // console.log(addArr('nafisa' , 'yuldasheva'));
// const person = new addArr('Nafisa' , 'Yuldasheva')
// person.arr();
// =============================
// ------ object constructor ------
// function person(first , last){
//     this.firstName = first;
//     this.lastName = last;
// }

// const person1 = new person('Nafisa' , 'Yuldasheva')
// console.log(person1);

// ============ Home tasks ===================
// const words = ['John' , 'Doe' , 'Kevin' , 'Angela' ]
// function longWord(words){
//     let wordLength = 0;
//     let wordOpposite = '';
//     for(let i = 0 ; i < words.length ; i++){
//         let len = 0;
//         let opposite = '';
//         for(let j = words[i].length - 1; j >= 0 ; j--){
//             opposite += words[i][j];
//             len++;
//         }
//         if(len > wordLength){
//             wordLength = len;
//             wordOpposite = opposite;
//         }
//     }
//     return {len:wordLength , opposite:wordOpposite}
// }
// const result = longWord(words);
// console.log( result.len , result.opposite);

// =================================
// const text = 'abc1dabc';

// function searchNumber(text) {
//   var result = '';
//   var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   for (var i = 0; i < text.length; i++) {
//     var char = text[i];
//     if (numbers.includes(char)) {
//       result += '$';
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(searchNumber(text));
// ======================================

// const str =  ['John' , 'Alan' , 'David' , 'Rawhide'];
// function longWord(str){
//   word = '';
//   len = 0
//   for(let value of str){
//     testWord = ''
//     testLen = 0
//     for(let j = value.length - 1; j >= 0; j--){
//       testWord += value[j]
//       testLen++;
//     }
//     if(word < testWord){
//       word = testWord;
//       len = testLen
//     }
//   }
//   return `Eng uzun so'z teskarisi: ${word} , uning uzunligi: ${len}`
// }

// console.log(longWord(str))
// ===================================================

// const str = 'Hello'
// function repeatChar(str){
//   let ress = ''
//   for(const value of str){
//     if(str.indexOf(value) === str.lastIndexOf(value)){
//       ress += value;
//     }
//   }
//   return ress;
// }
// console.log(repeatChar(str));
// ==============================================

// const str = 'Hel1o'
// function insteadNumber(str){
//   const numbers = ['1' , '2' , '3', '4' , '5' , '6' , '7' , '8' , '9' , '0']
//   let result = ''
//   for(let value of str){
//     if(numbers.includes(value)){
//       result += '$'
//     }else{
//       result += value
//     }
//   }
//   return result;
// }
// console.log(insteadNumber(str));
// ======================================
// const number = 11111
// function sameNumber(number){
//   let newNum = String(number)
//   for(let i in newNum){
//     if(newNum[i] !== newNum[0]){
//       return false;
//     }
//   }
//   return true;

// }
// console.log(sameNumber(number));
// =====================================

// const arr = [1 , 2, 3, 4 ,5 , 6];

// function changePlaceArr(arr){
//   const len = arr.length
//   let newArr = []
//   if(len%2 == 0){
//     for(let i = len-1 ; len/2 <= i ; i--){
//       newArr.unshift(arr[i])
//     }
//     for(let i = 0 ; i < len/2 ; i++){
//       newArr.push(arr[i])
//     }
//     return newArr;
//   }
//   return false;
// }
// console.log(changePlaceArr(arr));
// ======================
// const firstObject = {
//     hair: 'long',
//     beard:true
// }
// const secondObject = {
//     age:28,
//     hair: 'long',
//     beard:true
// }
// function checkObject(firstObject , secondObject){
//     for(let key in secondObject){
//         if(!(key in firstObject)){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkObject(firstObject , secondObject));
// ===================================

// const number = 0 ;
// function isNum(number){
//     if(typeof number !== 'number' || isNaN(number)){
//         return false
//     }
//     return true
// }
// console.log(isNum(number));

// ==========================================

// const str = 'Hel1o0807'
// function insteadNumber(str) {
//   let result = ''
//   for (let value of str) {
//     result += Number(value) === Number(vustozalue) ? '$' : value
//   }
//   return result
// }
// console.log(insteadNumber(str))
// =====================================
// const A = [0,1,0,1,0]
// function findOdd(A) {
//   let count = 0;
//   for(let value of A){
//     if(A.indexOf(value) === A.lastIndexOf(value)){
//       return value
//     }
//   }
// }
// console.log(findOdd(A));
// ===========================================
// let str = 'hel10';
// function foo(str){
//   let result = '';
//   for(let value of str){
//     if(!isNaN(value)){
//       result += '$'
//     }else{
//       result += value
//     }
//   }
//   return result
// }

// console.log(foo(str));
// ===========================================
