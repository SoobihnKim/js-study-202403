
var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당(대입)

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = '자몽';
console.log(fruit);

var food = '볶음밥';
food = '돈가스';
console.log(food);

// 변수 이름 규칙
// var 7number; 숫자 앞에 오면 안됨(중간은 가능함)

// var user name; 띄어쓰기 공백 안됨
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber;  // camel case (js: O)

var apple;
var APPLE;
var Apple;
// 모두 다른 변수

var myPetName ! ; // 특수문자 불가
var $myPetName_; // 가능한 특수문자

// var for; 키워드(예약어) 사용 불가 
// if, for, while, let 등

// 식별자 이름은 구체적이고 명확하고 일관성있게 지을 것!

const $orange = '#ffa808';

// $orange = 'sdff'  상수 값은 변경할 수 없음
console.log($orange);
