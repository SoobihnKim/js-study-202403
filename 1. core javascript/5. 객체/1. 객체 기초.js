
// 객체 생성
// 우리 집 강아지 정보 저장
var name = '뽀삐';
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈!');

// var dog = [
//   '뽀삐',
//   '진돗개',
//   3,
//   true,
//   ['산책', '간식'],
//   () => console.log('왈왈!'),
// ];

var dog = {
  name: '뽀삐',
  kind: '진돗개',
  age: 3,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈!')
};

console.log(dog.name);
console.log(dog.favorite);


// 우리 집 고양이 정보 저장
var cat = {
  name: '콩순이',
  kind: '코숏',
  age: 2,
  injection: true,
  favorite: ['낮잠', '방 어지르기'],
  hate: {}
  // 키에 숫자, 띄어쓰기 왠만하면 하지말기. 하려면 '' 안에 작성해야함
};

console.log(cat.name);

var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  },
  글내용: 'ㅇㄹㄴㅇ',
  작성일자: '2024-03-26'
};


console.log('==================================');

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

// 데이터 타입: 어떤 데이터가 할 수 있는 일을 정의
dog.age++ // 숫자이므로 가능
// dog.name++ // 문자이므로 불가능
!dog.injection // 논리타입이므로 가능
dog.favorite.push('꼬리흔들기'); // 배열이므로 가능
cat.favorite.splice(0, 1); // 배열이므로 가능

// slice 사본으로 진행하므로 원본 영향 안가서 그대로 나옴
dog.favorite.slice(0).splice(1, 1).reverse(); 
console.log(dog.favorite);

dog.favorite.splice(1,1);
dog.favorite.reverse();

console.log(dog.favorite);

// 객체를 참조하는 두번째 방법
console.log('================================');

var key = 'name';
console.log(dog.name);
console.log(dog['name']);
// console.log(dog[name]); // 불가능 => 키에 '' 있어야함 
console.log(dog[key]); // 변수이므로 ' ' 안됨

// 프로퍼티 수정(기존에 있는 key로 접근)
console.log('================================');

dog.age = 4;
cat.favorite[1] = '실뭉치';

console.log(dog);
console.log(cat);

//프로퍼티 동적 추가(기존에 없는 key로 접근)
console.log('================================');

cat.friend = '철수';

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;
console.log(cat);