
console.log('10!!');
console.log('9!!');
console.log('8!!');
// ...
console.log('0!!');

var n = 10;
console.log(`${n}!!`);
n--;

console.log(`${n}!!`);
n--;
//...

var n = 10;

while(n >= 0) {
  console.log(`${n}!!`);
  n--;
}

var begin = 8, end = 3, step = 1;
var n = begin;

while(n >= end) {
  console.log(`${n}!!`);
  n -= step;
}

console.log('=================');
// 구구단 출력하기

var level = 7;
var n = 1;

while (n <= 9) {
  console.log(`2 X ${n} = ${2 * n}`);
  n++;
}

var level = 7;
var n = 1;

while (n <= 9) {
  console.log(`${level} X ${n} = ${level * n}`);
  n++;
}

console.log('=================');

// 10 ~ 34까지의 정수를 1씩 증가하면서 출력

var m = 10; // begin

while (m <= 34) {
  console.log(m);
  m++;
}

// 10 ~ 34까지의 정수를 홀수만 출력

var m = 10; // begin

while (m <= 34) {
  if (m % 2 === 1) {
  console.log(m);
}
  m++;
}

console.log('=================');

// 1 ~ 10까지의 누적합 (등차수열)
var total = 0;
var i = 1;

// i = 1, total = 0

while (i <= 10) {
  total += i;
  i++;
}

console.log(total);





