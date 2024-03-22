
// 재미있는 사칙연산 게임

// var secret1 = Math.floor(Math.random() * 10) + 1;
// var secret2 = Math.floor(Math.random() * 10) + 1;

alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요`);  

var n1 = Math.floor(Math.random() * 10) + 1;
var n2 = Math.floor(Math.random() * 10) + 1;

var n = n1 + n2;

while (true) {
  var answer = +prompt(`${n1} + ${n2} = ??`);

if (answer === n) {
  alert('정답입니다!');
  continue;
} else if (answer === 0) {
  alert(`게임을 종료합니다.`);
  break;
} else {
  alert(`틀렸습니다.`);
  continue;
  }
}
