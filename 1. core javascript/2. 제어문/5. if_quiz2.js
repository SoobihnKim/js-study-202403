
// 정수 3개 값 판별
var num1 = +prompt('정수 A');
var num2 = +prompt('정수 B');
var num3 = +prompt('정수 C');

if (num1 === num2 && num2 === num3) {
  alert('3개 값이 모두 같습니다.');
} else if (num1 === num2 || num2 === num3 || num1 === num3) {
  alert('2개 값이 같습니다.');
} else {
  alert('모두 다른 값입니다.');
}

// 정수 2개 입력 후 두 값의 차이 구하기
var n1 = +prompt('정수 A');
var n2 = +prompt('정수 B');

// 두 수의 차이 절대값으로 구하기
var diff = (n1 > n2) ? n1 - n2 : n2 -n1;
alert(`두 값의 차이는 ${(diff)}입니다.`);

// if (n1 - n2 >= 0) {
//   alert(`두 값의 차이는 ${(n1 - n2)}입니다.`);
// } else {
//   alert(`두 값의 차이는 ${(n2 - n1)}입니다.`);
// }

// 정수 3개 입력 후 최소값 구하기
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

// min : 최고값을 저장해놓을 변수
var min = a;
if(b < min) min = b;
if(c < min) min = c;

alert(`최소값은 ${min}입니다.`);

if (a <= b && b <= c) {
  alert(`최소값은 ${a}입니다.`);
} else if (b <= c && c <= a) {
  alert(`최소값은 ${b}입니다.`);
} else {
  alert(`최소값은 ${c}입니다.`);
}