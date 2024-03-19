
var a = 5;
var b = '5';

console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

console.log('========================');

// == 비교는 결과 예측이 어려움
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

// === 3개 써야함
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 대소 비교
console.log('========================');

console.log('a' > 'A'); // 97 > 65 true

console.log('c' < 'a'); // 99 < 97 false

console.log('강' < '황'); // true

console.log('ace' < 'ade'); // 97 99      97  100 true

// 사전에서 뒤에 나올수록 크다


