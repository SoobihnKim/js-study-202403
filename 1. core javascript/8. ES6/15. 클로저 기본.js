// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a) {
  return function (n1, n2) {
    return n1 + n2;
  };
}

const x = Calculator();
console.log(typeof x); // function

const y = x(10, 20);
console.log(`y: ${y}`); // 30

console.log("=========================");

const z = Calculator()(6, 9);
console.log(`z : ${z}`); // 15

const operate = function () {
  return  (n1, n2) => n1 * n2;
};
const k = operate();
const m = k(3, 7);
console.log(m); // 21

console.log("=========================");

function bar() {

  function fas () {
    return 10;
  }

  return fas;
}

const h = bar()();
console.log(h); // 10

// 카운트를 증가시키는 함수
// let count = 0; // 전역변수

// const increase = function () {
//   return count++;
// };

// console.log(increase()); 
// console.log(increase()); 
// // count = 999; // 중간에 추가되면 값이 변경됨. 그래서 전역변수 안쓰는게 좋음 
// console.log(increase()); 
// console.log(`count: ${count}`); 

/*
const increase = () => {
  let count = 0;
  return ++count;
};

increase();
increase();
const count = increase();
console.log(`count: ${count}`); 
*/

// **해결책 전역변수 안쓰고 지역변수 유지시키는 방법
// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.

const increaseClosure = () => {
  let count = 0; // 지역변수

  const helper = () => ++count;

  return helper;
};

const increase = increaseClosure();

console.log(increase()); // 1
count = 999; 
console.log(increase()); // 2
console.log(increase()); // 3
