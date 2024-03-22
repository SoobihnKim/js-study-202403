
for (var i = 1; i <= 50; i++) {
  console.log(i);
  if(i > 10) {
    break;
  }   
}

console.log('====================');

for(var i = 0; i < 3; i++) {           // i : 0, j : 0
  for (var j = 0; j < 2; j++){
    if (i === j) {
      break;                          // 가까운 반복문만 종료됨
    }
    console.log(`${i}, ${j}`);
  }
}