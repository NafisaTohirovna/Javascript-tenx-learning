// let str = new String('Hello world')
// let str1 =  String('Hello world')

// console.log(typeof(str));
// console.log(typeof(str1));

// console.log(str.valueOf() === str1);

// let str = 'ahmoq sen odam bo`lmaysan ahmoq'

// // console.log(str.replace('ahmoq' , '*****'));

// const obj = {
//     ahmoq:'ahmoq',
//     tentak:'tentak'
// }

// let newStr = str.split(' ');
// for(let value of newStr){
//     // if(value){
//         str.slice(value , '*****')
//     // }
// }

// function changeStar(text, unnecessary) {
//   let tes = unnecessary.split(' ');
//   for (let value of tes) {
//     let stars = '*'.repeat(value.length);
//     text = text.replace(new RegExp( value , 'gi'), stars);
//   }
//   return text;
// }
// const text = "ahmoq sen odam bo`lmaysan ahmoq tentak jinni nimadur";
// const unnecessary = "ahmoq tentak jinni nimadur";

// console.log(changeStar(text, unnecessary));

// console.log('h'.charAt(0));
// let test = ('h'.charCodeAt(0) - 32);
// console.log('h'.codePointAt(test));

// ===============================================================
// const matn = 'Nimadur nimadur @shfkjdbf ';
// const reklama = [ 'https//' , '@' ]
// function foo(matn , reklama){
//     for(let value of reklama){
//         if(matn.includes(value)){
//             return 'iltimos reklama tarqatmang!'
//         }
//     }
//     return matn
// }
// console.log(foo(matn , reklama));
// =======================================================

// const str = 'Nafisa';
// let n = 2;
// function divideString(str, n) {
//   let arr = [];
//   for (let i = 0; i < str.length; i += n) {
//     let element = str.substr(i, n);
//     arr.push(element);
//   }
//   return arr;
// }

// console.log(divideString(str, n));

// ==================== HOME TASKS  ===================

//1)Parametr sifatida kelgan stringni probellar 
//  o'rnida qo'yib chiqasib berish

// const text = 'Robin Sings from USA';
// function changeProbe(text){
//   let newText = text.toLowerCase();
//   return newText.replaceAll(' ' , '-')
// }
// console.log(changeProbe(text));

// robin-sings-from-usa

// ==============================================================

// 2) Satrdagi har bir so'zning birinchi harfini 
//  katta harf bilan yozadigan funksiyani yoning

// const text = 'js string mashqlari';
// function toUpper(text){
//   let newText = text[0].toUpperCase();
//   for(let i = 1 ; i < text.length ; i++){
//     if(text[i-1] === ' ')
//       newText += text[i].toUpperCase();
//     else
//       newText += text[i]
//   }
//   return newText;
// }
// console.log(toUpper(text));

// Js String Mashqlari

// =====================================================================

// 3) Parametr sifatida kichik va katta harflar oladigan funksiya
// yozing . Katta harflarni kichik va kichik harflarni katta 
// harflarga aylantiring

// const text = 'AbCdEfG'
// function changeChar(text){
//   let newText = ''
//   for(let value of text){
//     if(value.toUpperCase() == value)
//       newText += value.toLowerCase()
//     else
//       newText += value.toUpperCase()
    
//   }
//   return newText;
// }
// console.log(changeChar(text));

// output:  aBcDeFg

//  ============================================================

// 4)Satrni berilgan uzunlikdagi bo'laklarga bo'lish
//  uchun Javascript funksiyasini yozing

// const text = 'Nafisa' , n = 3;
// function splitString(text , n){
//   let arr = []
//   for(let i = 0 ; i < text.length ; i += n){
//     arr.push(text.substr(i , n))
//   }
//   return arr
// }
// console.log(splitString(text , n));

//output:  [ 'Naf', 'isa' ]

// =======================================================
// 5)Berilgan  stringdagi non-printable ASCII characterlarni 
// o'chirib qaytaruvchi funksiya yozing

// const str = '????????My-SQL????????';
// function charAct(str){
//     let newStr = ''
//     for(let value of str){
//         if(value === '-' || value >= 'A' && value <= 'Z' || value >= 'a' && value <= 'z'){
//             newStr += value
//         }
//     }
//     return newStr
// }
// console.log(charAct(str));

// 6) Html teglarini stardan olib tashlash

// const text = '<p><strong><em>Orzularing o`zingnikimi</em></strong></p>';
// function htmlTextCut(text) {
//   let newText = '';
//   let bool = false;

//   for (let value of text) {
//     if (value === '<') {
//       bool = true;
//     } else if (value === '>') {
//       bool = false;
//     } else if (!bool) {
//       newText += value;
//     }
//   }
//   return newText;
// }

// console.log(htmlTextCut(text));

// Orzularing o`zingnikimi

