// Matndagi so'zlarni teskari tartibda chiqarish.

// const str = 'salom dunyo';
// function reverseStr(str){
//     let newStr = ''
//     let newObj = str.split(' ')
//     for(let value of newObj){
//         for(let i = value.length -1 ; i >= 0  ; i--){
//             newStr += value[i]
//         }
//         newStr += ' '
//     }
//     return newStr
// }
// console.log(reverseStr(str));

// =========================================================================================

// Matndagi kichik harflarni kattaga kattani kichikka o’zgartitish

// =========================================================================================
// Matndagi so’zlarni alfavit shaklida tartiblab bitta mmatn qilib chiqarish

// const str = 'buva cucu assalom';
// console.log( str.split(' ').sort().join(' '));

// ========================================================================================

// ============ 1-masala =============
// Matndagi so'zlarni teskari tartibda chiqarish.
// ============ 1-masala =============
// const str = "I have learned something New today";

// const arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   let newText = "";
//   for (let j = arr[i].length - 1; j >= 0; j--) newText += arr[i][j];
//   arr[i] = newText;
// }

// const str2 = arr.join(" ");
// console.log(str2);

// ============ 2-masala =============
// Matndagi kichik harflarni kattaga kattani kichikka o’zgartitish
// ============ 2-masala =============
// const text = "AfBeCd";
// console.log(Transform(text));

// function Transform(text) {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].charAt(0).toUpperCase() === text[i])
//       result += text[i].charAt(0).toLowerCase();
//     else result += text[i].charAt(0).toUpperCase();
//   }
//   return result;
// }

// ============ 3-masala =============
// Matndagi takrorlanmagan so’zlarni chiqarish
// ============ 3-masala =============
// let str = "Able was I saw Elba and was madam racecar level";

// const arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   if (arr.indexOf(arr[i], i + 1) > 0) str = str.replaceAll(" " + arr[i], "");
// }

// console.log(str);

// ============ 4-masala =============
// Matndagi so’zlarni alfavit shaklida tartiblab bitta mmatn qilib chiqarish
// ============ 4-masala =============
// const str = "I have learned something new today";

// const arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   let newArr = [...arr[i]];
//   newArr.sort();
//   let newStr = newArr.join("");
//   arr[i] = newStr;
// }

// const str2 = arr.join(" ");
// console.log(str2);

// ============ 5-masala =============
// So’zlarning palindromligini topish, eng uzunini topish
// ============ 5-masala =============
// const str = "I have learned something nen non today";

// const arr = str.split(" ");
// let max = [""];

// for (let i = 0; i < arr.length; i++) {
//   let newText = "";
//   for (let j = arr[i].length - 1; j >= 0; j--) newText += arr[i][j];
//   if (newText === arr[i]) {
//     if (max[0].length < arr[i].length) max[0] = arr[i];
//     else if (max[0].length == arr[i].length) max.push(arr[i]);
//     console.log(arr[i]);
//   }
// }

// console.log(`Max palindrome word : ${max}`);

// ============ 6-masala =============
// Simmetrik so’zlarni ekranga chiqarish
// ============ 6-masala =============
// const str = "I have learned something nen non today";

// const arr = str.split(" ");

// for (let i = 0; i < arr.length; i++) {
//   let newText = "";
//   for (let j = arr[i].length - 1; j >= 0; j--) newText += arr[i][j];
//   if (newText === arr[i]) console.log(arr[i]);
// }

// ============ 7-masala =============
// Beerilgan matndagi so’zlarning teskarisi bor yo’qligini tekshirish
// Maslaan: “Able was I saw Elba and madam racecar level”
// chiqish: was - saw
// ============ 7-masala =============
// let str = "Able was I saw Elba and madam racecar level about tuoba";

// const arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   let newText = "";
//   for (let j = arr[i].length - 1; j >= 0; j--) newText += arr[i][j];
//   if (arr.includes(newText) && arr.indexOf(newText) != arr.indexOf(arr[i])) {
//     console.log(`${arr[i]} - ${newText}`);
//     arr[i] = "";

//   }
// }
// ==========================================================================
// function foo({ firstName, lastName, age }) {
//   console.log(
//     `Sizning ismingiz: ${firstName} , Sizning familyangiz ${lastName} , sizning yoshingiz ${age}`
//   );
// }

// const person = {
//   age: 20,
//   firstName: "John",
//   lastName: "Doe",
// };
// foo(person);

// ==============================================================================================

// let count = 0;

// function useState(param){
//     count = param;
//     return [
//         count , 
//         function setState(param){
//             return (count += param || 1)
//         }
//     ]
// }

// const [state , setState] = useState(10)

// console.log(setState());



// ==========================================================

// const arr = [10 , 12 , 11]
// const [birinchi , ikkinchi , uchinchisi]  = arr
// console.log(birinchi);

// ===================================



// console.log(Math.floor(10000 + Math.random() * 90000));

// ========================== UYGA VAZIFA ==========================

// 1
// let str = 'Nafisa'
// console.log(str.includes("na"));
// let str = "abc hi ho"
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str.includes("hi")) count++;
//   console.log(str.slice(0, i));
//   str.slice(0, i);
// }
// console.log( count);

// 
let str = "Ice Cream";
let n = 1
let newStr = "";
for (let i = n; i > 0; i--)
  newStr += str.substring( str[i], i + str.length);
console.log(newStr);