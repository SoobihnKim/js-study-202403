
// 가로길이, 세로길이
var width = +prompt('한 변 (1): ');
var height = +prompt('한 변 (2): ');


// 사각형을 저장할 변수
// var rectangle = '* * * * *\n* * * * *\n* * * * *\n';
var rectangle = '';

for (var i = 0; i < width; i++) {
  // 3번
  for (var j = 0; j < height; j++) {
    rectangle += '* ';
  }
  rectangle += "\n";
 }

 alert(rectangle);

/*
 * * * * *
 * * * * *
 * * * * *
 */


