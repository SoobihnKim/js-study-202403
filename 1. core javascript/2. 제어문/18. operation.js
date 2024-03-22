
// 재미있는 사칙연산 게임
/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/

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
