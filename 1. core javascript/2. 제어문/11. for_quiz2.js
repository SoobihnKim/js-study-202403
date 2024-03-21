// 문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력
var targetNum = +prompt('정수 : ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수 : ${count}개`;
alert(result);