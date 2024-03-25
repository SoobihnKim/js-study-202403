

true && true; // t
true && false; // f
false && true; // f
false && false; // f

true || true; // t
true || false; // t
false || true; // t
false || false; // f

// OR연산: 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || '안녕');

// AND연산: 첫번째 falsy를 반환
console.log('메롱' && '안녕');
console.log( 0 && '안녕');


if(조건) {
  console.log('blah');
}
// 위 아래 같음
조건 && console.log('blah');

/*
<h1>안녕하세요.</h1>
login && <h2>ooo님 환영합니다.</h2>

쿠폰당첨여부 && sendCoupon();
!쿠폰당첨여부 && sendMessage();

내 게시물 여부 && <button>삭제</button>

*/