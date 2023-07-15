// const arr = [1 , 2, 3 , 4 , [5 ,[ 6 , [7]]]]

// function foo(arr){
//     if(Array.isArray(arr)){
//         return foo(arr)
//     }else{
//         return arr
//     }
// }

// console.log(foo(arr));
// ================================
// bir xil takrorlangan so'zlarni ko'pini birinchiga chiqarish , agar teng bo'lsa alifbo tartibida taxlasin
// let words = ['i' , 'love' , 'code' , 'i' , 'love' , 'coding'];
// let k = 2;

//  const map = new Map()

//  for(const word of words){
//     map.set(word , map.get(word) + 1 || 1)
//  }

// const entries = Object.entries(Object.fromEntries(map))

// entries.sort((a,b) =>{
//     if(a[1] === b[1]){
//         if(a[0] > b[0]) return 0
//         if(a[0] < b[0]) return -1
//     }
//     return b[1] - a[1]
// })

// let res = ''

// for(let i = 0 ; i < k ; i++ ){
//     res += entries[i][0] + ' '
// }
// console.log(res.trim());

// ========================================
// array elementlarini sortlash

// const arr = [1 , 234 , 5 , 3 , 6]

// arr.sort((a , b) => b - a)

// console.log(arr);
//===================================
// array elementlar joyini almashtirish
// const arr = [1, 2, 3];
// [arr[0], arr[2], arr[1]] = [arr[1], arr[0], arr[2]];
// console.log(arr);
// output: [2, 1, 3];
