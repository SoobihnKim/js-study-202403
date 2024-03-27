
function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야한다면
// 파라미터에 집합 자료형(배열, 객체)을 전달한다

function addAll (numbers, others) {
  var total = 0;
  for(var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread문법
function addAllES6(first, second, ...numbers) { // ...붙이면 배열로 취급, spread는 하나만 붙일 수 있음
  console.log(numbers);
  var total = 0;
  for(var n of numbers) {
    total += n;
  }
  return total;
}


var r1 = addAll([5, 9, 2, 10, 20], [1, 2, 3]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30, 40, 50);
console.log(`r2: ${r2}`);

console.log('================================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
  // 변수는 데이터가 2회 이상 사용될 때 사용하는게 좋다
  // var addResult = n1 + n2;
  // var subResult = n1 - n2;
  // var multiResult = n1 * n2;
  // var divResult = n1 / n2;
  return {
    add: add2(n1, n2), 
    sub: n1 - n2, 
    multi: n1 * n2, 
    div: n1 / n2,
  };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈: ${r3.add}`);
console.log(`뺄셈: ${r3.sub}`);
console.log(`곱셈: ${r3.multi}`);
console.log(`나눗셈: ${r3.div}`);

var r4 = arithmeticOperate(5, 3).multi;
console.log(`r4: ${r4}`);

