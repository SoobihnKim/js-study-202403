
//문제1: 두 수를 입력받아 해당 범위의 누적합을 구하세요
var begin = +prompt('첫번째 숫자 입력');
var end = +prompt('두번째 숫자 입력');

var total = 0
var i = begin;

while (i <= end) {
  total += i;
  i++;
}

alert(`${begin}~${end}까지의 누적합 : ${total}`);

// 문제2: 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요

var count = +prompt('정수: '); // 반복문 회전 수
var mark = ''; // 기호를 누적할 변수

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);
