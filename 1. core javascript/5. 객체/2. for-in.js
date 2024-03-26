
var phone = {
  company: '삼성',
  color: '펄 화이트',
  model: '갤럭시 S24 Ultra',
  price: 1200000
};

// 값이 아닌 키가 반복됨
for (var data in phone) {
  console.log(data);
  
  // console.log(typeof data); // string
  console.log(phone[data]);
};

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('model' in phone);

// phone.memory = 111;

var newkey = 'memory';
var newkey = 'memory';
if (!(newkey in phone)) {
  phone[newkey] = '32GB';
}

if(!('memory' in phone)) {
  phone.memory = '32GB';
}
console.log(phone);