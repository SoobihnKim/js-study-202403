
const food = '돈가스';
const userName = '스윙스';

console.log(`${food}의 왕 ${userName}`);

// 브라우저 전용함수 : nodejs 환경에서는 작동불가
// prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
// alert() : 브라우저에서 알림창을 띄우는 함수

// var yourName = prompt(`당신의 이름을 입력하세요!`);
// alert(`입력한 이름: ${yourName}`);

// var resultFlag = confirm('정말 삭제하시겠습니까?');
// console.log(`나의 대답: ${resultFlag}`);

var n1 = +prompt(`첫번째 수를 입력하세요!`); // + 붙이면 숫자로 변환됨
var n2 = +prompt(`두번째 수를 입력하세요!`);

alert(typeof n1);

alert(`두 수의 합: ${n1 + n2}`); 


