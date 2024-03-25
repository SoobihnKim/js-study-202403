

var x = '30.5', y = '40.5';

var result = Number(x) +Number(y);

// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다.
// parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y);
var result3 = +x + +y;

console.log(result);
console.log(result2);
console.log(result3);

// 숫자, boolean을 문자로 바꿀때
var m = '' + 10 + 20;
console.log(m);

var f = '' + false;
console.log(f);

console.log('=======================');

// boolean 논리값으로 바꾸는 방법 앞에 !! 붙이기
console.log(Boolean('hello')); // true
console.log(Boolean(null)); // false
console.log(!!999); // true
console.log(!!undefined); // false

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
