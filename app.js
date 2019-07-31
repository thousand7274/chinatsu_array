// 二次元配列
// apple りんご
// orange みかん
// pink ピンク
// red　赤
// 連想配列
// array2 = [
//   ['apple', 'orange','pink','red'],
//   ['りんご','みかん','ピンク','赤']
// ];
// console.log(array2[1][1]);

let fruits = {
  apple: 'りんご',
  orange: 'みかん'
};
let colors = {
  pink: 'ピンク',
  red: '赤'
};
 let fruitsColors = [fruits,colors];

 console.log(fruitsColors[0].orange);

//  三次元配列
let color =[
  {
  pink: 'ピンク',
  red: '赤',
  blue:['shoes','shirts','pants']
}];
console.log(color[0].blue[1]);

