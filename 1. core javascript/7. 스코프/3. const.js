
let x;
x = 'df';
console.log(x);

// const: 상수 선언
const y = '메롱';
// y = 'ff'; const는 값 변경할 수 없음
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = '#0f0';
/*
 $div.styl.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
  name: '김철수',
  age: 30
};
kim.age = 31;
kim.name = '마이클 킴';

// kim = {
//   name: '김철수',
//   age: 30
// };

// 배열도 객체
const array = {
  0: 'z',
  1: 'df',
  2: 'dgfdfd',
  length: 3
};
array.length