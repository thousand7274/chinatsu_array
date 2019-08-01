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

// 四次元配列
let fruit = [
  {
    apple:'りんご',
    orange:{
      grape:['ぶどう']
    }
  }
]
console.log(fruit[0].orange.grape[0]);

// 五次元配列
let drink = [
  {
    tea:'お茶',
    juice:'ジュース',
    coffee:{
      tullys:'タリーズ',
      doutor:'ドトール',
      starbucks:{
        espresso:'エスプレッソ',
        cafemist:'カフェミスト',
        frappuccino:{
          short:'ショート',
          tall:'トール',
          grande:'グランデ',
          venti:'ヴェンティ'

        }
      }
    }
  }
]

console.log(drink[0].coffee.starbucks.frappuccino.grande);
console.log(drink);
