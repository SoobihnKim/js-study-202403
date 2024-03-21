

// 1 - 2 - 3 - 4 - 2 - 3 -4

var i = 1;              // 1. begin / 최초 1번 실행
while(i <= 5) {          // 2. end
  console.log('hello');  // 3. execute
  i++;                   // 4. step
}


//     1    ;    2   ;  4
for(var i = 1; i <= 5; i++) {
  console.log('hello'); // 3
}

// 1 ~ 10 누적합

var total = 0; // 반복문 바깥쪽에 있어야함 안에 들어가면 안됨
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

// 횟수 지정 반복문
for (var i = 0; i < 5; i++) {
  console.log('메롱');
}
