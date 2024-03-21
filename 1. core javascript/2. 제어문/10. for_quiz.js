// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력

var n = +prompt('양의 정수 입력');

// var i = 2;

// while (i<=n) {
//   console.log(i);
// }

// 제곱수를 누적한 변수
var accum = '';

for(var i = 2; i <= n; i *= 2) {
  accum += `${i} `;
}
alert(accum);

