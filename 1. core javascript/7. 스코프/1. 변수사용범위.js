var x = 99; // global scope: 전역변수 (프로그램 끝날때 사라짐)
var y = true;

function foo() {
  var x = "홍길동"; // local scope: 지역변수(함수가 호출될때 나타나고 함수끝날때 메모리에서 사라짐)
  console.log(`foo: ${x}`); //foo: 홍길동
  var y = "메롱";
  console.log(`foo: ${y}`); //foo: 메롱
  return x; // return 해야 밖에서 쓸 수 있음
}

var y = foo();
console.log(`x : ${x}`); //x : 99
console.log(`y : ${y}`); //y : 홍길동

console.log("=========================");

// 중첩 함수: 함수 안에 함수를 정의
function outer(m) {
  var n = "outer local n";
  var v = "outer local v";
  console.log(n);
  console.log(v);
  console.log(m);

  //헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n); // outer local n
    var m = 'inner local m';
    console.log(m); // inner local m
  }

  inner();
}

outer("outer param m");
