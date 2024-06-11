
// 화살표 함수와 this
const dog = {
  name: '뽀삐',
  regularFn: function() {
    console.log('regular: ', this); // 자기 자신 객체
  },
  arrowFn: () => {
    console.log('arrow: ', this); // window 객체

  }
};

dog.regularFn();
dog.arrowFn();

console.log('===========================================');
const cat = {
  name: '나비',
  introduce: function() {
    console.log(`introduce this: `, this); // { name: '나비', introduce: [Function: introduce] }

    // 화살표 함수의 this는 scope 체인 안의 this를 가리킴(상위 this / bind 사용 대신 많이 씀)
    setTimeout(() => {
      console.log('setTimeout this:', this); // { name: '나비', introduce: [Function: introduce] }
    }, 2000);
  }
};

cat.introduce();

// 실제 사용 예시
$modal.addEventListener('click', function(e) {
  console.log(this); // $modal

  $ok.addEventListener('click', function(e) {
    console.log(this); // $ok
  });
  
  $cancel.addEventListener('click', (e) => { // 화살표함수는 상위레벨인 modal
    console.log(this); // $modal
  });
});