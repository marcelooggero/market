// function merge_sort(array, low, high) {
//     if (low < high) {
//         let mid = parseInt((high + low) / 2);
//         merge_sort(array, low, mid);
//         merge_sort(array, mid + 1, high);
//         merge(array, low, mid, high);
//     }
// }

// function merge(array, low, mid, high) {
//     let array1 = [], array2 = [];
//     let i, j, k;
//     let n1 = mid - low + 1;
//     let n2 = high - mid;
//     for (i = 0; i < n1; i++) {
//         array1[i] = array[low + i];
//     }
//     for (j = 0; j < n2; j++) {
//         array2[j] = array[mid + j + 1];
//     }
//     array1[i] = 9999;
//     array2[j] = 9999;
//     i = 0;
//     j = 0;
//     for (k = low; k <= high; k++) {
//         if (array1[i] <= array2[j]) {
//             array[k] = array1[i++];
//         }
//         else {
//             array[k] = array2[j++];
//         }
//     }
// }
// // let array = [3, 94, 86, 82, 90, 10, 87, 36, 61, 8, 17, 15, 22, 10, 23, 78, 25, 2, 30, 45, 98, 43, 98, 59, 53, 57, 2, 64, 1, 41, 32, 58, 19, 99, 60, 74, 48, 80, 44, 25, 68, 1, 89, 77, 60, 25, 99, 30, 76, 32, 57, 82, 52, 44, 72, 87, 34, 87, 65, 30, 54, 6, 31, 33, 44, 44, 42, 82, 90, 17, 9, 98, 28, 86, 69, 3, 17, 8, 45, 98, 12, 47, 95, 43, 72, 39, 41, 82, 74, 56, 65, 79, 50, 26, 67, 100, 24, 67, 38, 57];
// let array = [3, 57];
// merge_sort(array, 0, array.length - 1);
// let p;
// console.log("El array ordenado es:\n");
// for (p = 0; p < array.length; p++) {
//     console.log(`${array[p]}, `);
// }
// console.log("ordenamiento completado");



const suma = [10,20,30].reduce((a,b)=>a+b)
console.log(suma)


