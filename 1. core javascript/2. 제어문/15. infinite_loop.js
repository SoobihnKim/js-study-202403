

// 몇 번인지 모를때 while
// while (true) {
//   console.log();  
// }

// 1~ 10사이의 랜덤정수
// random() * (y - x + 1) + x

while(true) {
  var rn = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if (rn === 7) break;
}
console.log('반복문 종료!');

// for 무한루프 (잘안씀)
// for(;;) {
//   var rn = Math.floor(Math.random() * 10) + 1;
//   console.log('hello');
//   if (rn === 7) break;
// }
// console.log('반복문 종료!');


