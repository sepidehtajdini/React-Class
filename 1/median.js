const Array = [2, 500, 987, 100, 1200, 68, 19];
const newArr = Array.sort(function (a, b) { return a - b });
// array = [2, 19 , 68 ,100, 500, 987, 1200]
const med = (newArr.length + 1) / 2;
const median = Array[med - 1];
console.log(median);