// let n = 5;

// if(n!=0){
//     n = 10;
// }else{
//     n = 20;
// }
// console.log(n);

// console.log("n"-"n");

// console.log(null == undefined);

// console.log(NaN === NaN);

// const n = 10;

// const b = "HElo";

// if(n*b == NaN){
//     console.log("Ko'paytra olmayman");
// }else{
//     console.log("Yoq");
// }

// switch(fasl)

// const son = 80;
// let un = 0;

// switch(son/10){
//     case 1:
//         un = "O'n";
//         break;
//     case 2:
//         un = "Yigirma";
//         break;
//     case 3:
//         un = "O'ttiz";
//         break;
//     case 4:
//         un = "Qirq";
//         break;
//     case 5:
//         un = "Ellik";
//         break;
//     case 6:
//         un = "Oltmish";
//         break;
//     case 7:
//         un = "Yetmish";
//         break;
//     case 8:
//         un = "Sakson";
//         break;
//     case 9:
//         un = "To'qson";
//         break;
//     case 10:
//         un = "Yuz";
//         break;
//     default :
//         un = "Yuzdan kichik son kiriting";
// }
// console.log(un);

// const n = 2;

// const a = n %10;

// ========== 09.06.23 ===============

// NULLISH  (undefined va null) ni false

// console.log(NaN ?? 'Salom');
// console.log(undefined ?? 'Salom');
// console.log(null ?? 'Salom');
// console.log('' ?? 'Salom');
// console.log(false ?? 'Salom');

// Type coversion  switsh casa
// const a = 10;

// if(a == "10"){
//     console.log("Ishlaydi");
// }else{
//     console.log("Ishlamaydi");
// }

// FARQI

// switch(a){
//     case '10':
//         console.log("string");
//         break;
//     case 10:
//         console.log("number");
//         break;
// }

// const a = 1;

// switch(a){
//     case 12:
//     case 1:
//     case 2:
//         console.log("QISH");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("BAHOR");
//         break;

// }

// ======= LOOPS =======

// const text = 'Salom';
// console.log(`${text} so'zidagi belgilar ${text.length} ta`);

// for(let i = 0; i < text.length; i++){
//     console.log(text[i]);
// }
// for(let i = text.length - 1; i >= 0; i--){
//     console.log(text[i]);
// }

// for(let i = 0; i < 15; i++){
//     console.log(i);
// }

// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// for(let i = 0 ; i < text1.length  ; i ++){

//     for( let j = 0; j < text2.length  ; j ++){
//         if(text1[i] == text2[j] && text1[i+1] == text2[j+1]){
//             NewText = NewText + text1[i];
//         }

//     }
// }

// const str = 'flexiple';
// const str2 = str.charAt(0);
// console.log(str2);

// const str  = " 31123 472147  7468744 81647124";
// let NewText = ""

// for( let i = 0; i < str.length - 1 ; i ++){
//     if(str[i] != '4' && str[i]){
//         NewText += str[i];
//     }

// }
// console.log(NewText);

// let text1 = "men O'zbekistonni sevaman";
// let text2 = "sevaman";
// let NewText2 = "";
// for(let i = 0 ; i < text2.length - 1; i++){
//     if(text2[0] == text2[i]){
//         NewText2 = text2[0].toLocaleUpperCase();
//     }
//     NewText2 = NewText2 + text2[i+1];
// }
// let NewText = text1.replace(text2 , NewText2);

// console.log(NewText);
// =======================
// localStorage.setItem("name", "Nafisa");
// const nameN = localStorage.getItem('name')
// console.log(nameN);
// localStorage.clear()

// const arr = ["Naifs", "John", "Doe"];
// localStorage.setItem("arr", JSON.stringify(arr));
// let getArr = JSON.parse(localStorage.getItem("arr"));
// console.log(getArr);

// const arr = JSON.parse(localStorage.getItem("arr"))
//   ? JSON.parse(localStorage.getItem("arr"))
//   : [];
// if (arr.length > 0) {
//   arr.forEach((name) => {
//     console.log(name);
//   });
// } else {
//   console.log("Hech qanday ism yo'q");
// }

// var y = 1 , x = y = typeof x ;
// console.log((x));