
// 비동기함수 setTimeout
// 코드를 순서대로 진행시키는 것이 아닌
// 시간차로 진행시킬 수 있게 함.

console.log('오늘 할 일은 뭘까요?');

setTimeout(() => {
  console.log('오늘 집에서 쉴거에요.');
}, 1500); 

setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(`hello${i}`);
  }
}, 2000); // 2초 지연 시간 (밀리초단위: 1 / 1000 초)


setTimeout(() => {
  for (let i = 0; i < 4; i++) {
    console.log(`bye${i}`);
  }
}, 0); // 바로 진행


