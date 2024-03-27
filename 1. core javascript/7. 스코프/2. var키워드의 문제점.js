

// 1. 변수의 중복선언을 암묵적으로 허용
// var x = 10;
let x = 10;

// ... 10만줄

// var x = 'ddd';
// let x = 'ddd'; let은 중복선언 불가능함
// console.log(x);

// 2. 블록 레벨 스코프를 지원하지 않음
let i = '메롱' ;

for (let i = 0; i < 5; i++) {
  console.log(`for-i : ${i}`);
}
//for-i : 0
// for-i : 1
// for-i : 2
// for-i : 3
// for-i : 4

console.log(`global-i : ${i}`); //global-i : 메롱

// 3. 호이스팅: 선언 위치와 관계없이 참조 가능
hobby = '댄스';

// .. code

let hobby;

console.log(hobby);