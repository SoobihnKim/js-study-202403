
function min2(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

// function min2(n1, n2) {
//   return n1 > n2 ? n2 : n1;
// }

//result1에는 56이 리턴되어야 함.
var result1 = min2(134, 56);
console.log(`result1: ${result1}`);


// 셋중에 가장 작은 수 50이 result2에 저장되어야 함.
function min3(a, b, c) {
  if (a < b && b < c) {
    return a;
  } else if (b < c && c < a) {
    return b;
  } else {
    return c;
  }
}

// function min3(n1, n2, n3) {
//   var min = n1;
//   if (min > n2) min = n2;
//   if (min > n3) min = n3;
//   return min;
// }

var result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// function isEven(n) {
//   return n % 2 === 0;
// }


var result3 = isEven(3);
console.log(`result3: ${result3}`);



