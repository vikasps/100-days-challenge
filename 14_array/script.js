// array
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (var i in a) {
  console.log("row" + i);
  for (var j in a[i]) {
    console.log(" " + a[i][j]);
  }
}

//                matching array
var rt = [15, 02, 3, 4, 5, 6, 7, 8, 9, 33, 44, 55, 66, 88, 99, 0];
for (var i = 0; i < rt.length; i++) {
  console.log(rt[i]);
  if (rt[i] == 33) {
    console.log("the value is matching");
  } else {
  }
}
// finding odd and even
// var rt = [15, 02, 3, 4, 5, 6, 7, 8, 9, 33, 44, 55, 66, 88, 99, 0];
// for (var i = 0; i < rt.length; i++) {
//   // console.log(i)
//   if (rt[i] % 2 == 0) {
//     console.log("The number is even.", rt[i]);
//     // console.log(rt[i]);
//   } else {
//     console.log("the number is odd", rt[i]);
//   }
// }
