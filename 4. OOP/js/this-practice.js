
// 일반 함수에서 this
function foo() {
  // nodejs 에서는 this는 global 객체를 표현
  // 브라우저에서는 window라는 전역 객체를 표현
  console.log(this);
}

// foo();

// 객체에서의 this
const madeBy = 'KIA';
const model = 'K7';

const car = {
  madeBy: 'Hyundai',
  model: '그랜져',
  showInfo: function() {
    console.log(this);
    console.log(`제조사: ${this.madeBy}, 모델명: ${this.model}`); // 제조사: Hyundai, 모델명: 그랜져
    console.log(`제조사: ${madeBy}, 모델명: ${model}`); // 제조사: KIA, 모델명: K7
  }
};

// car.showInfo();

// 이벤트핸들러의 this - function으로 선언 시 이벤트를 건 요소
const $btn = document.getElementById('btn');

const buttonHandler = function(e) {
  console.log('버튼 클릭!');
  console.log(this);
  // $btn.style.background = 'red';
  this.style.background = 'red';
};

$btn.addEventListener('click', buttonHandler);