// const arr = [0 ,1 ,2 ,3 ,4 ,5, 6 , 7];
// let num = 0 ;
// let res = arr[0];
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] != res){
//         num = arr[i] + 1;
//         break
//     }
//     res++
// }

// console.log(num);
// ===================================
//massiv ichidagi massivda 0 element g'olib bo'lgan , 1 element mag'lub , birmarta ham yutqizmaganlar , bir marta yutqizganlarni massiv qilib chiqaring
const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]

// // Output: [[1,2,10],[4,5,7,8]]
// let res = 0 , arr = [] , arr2 = []
// for(let i = 0; i < matches.length; i++){
//     let count = 0, add = 0;
//     for(let j = 0 ; j  < matches.length ; j++){
//         if(matches[i][0] == matches[j][1] ){
//             count++
//         }
//         if (matches[i][1] == matches[j][1]) {
//           add++;
//         }
//     }
//     if(count == 0 && !arr.includes(matches[i][0])){
//         arr.push(matches[i][0])
//     }
//     if (add == 1 && !arr2.includes(matches[i][1])) {
//       arr2.push(matches[i][1]);
//     }
// }

// const result = [[...arr], [...arr2].sort()]

// console.log(result);

//  2 - usul 
function foo(matches){
    const first = {};
    const second = {};

    for(const i of matches){
        first[i[0]] = first[i[0]]+1 || 1
        second[i[1]] = second[i[1]] + 1 || 1;
    }

    const arr1 = Object.keys(first).filter((item) => second[item] === undefined);
    const arr2 = Object.keys(second).filter((item) => second[item] === 1);

    return [arr1 ,arr2]
}

console.log(foo(matches));