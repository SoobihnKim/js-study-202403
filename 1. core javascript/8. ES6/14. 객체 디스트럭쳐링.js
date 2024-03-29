
const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '2020-01-30',
  birthDate: '2015-12-31'
};

// const name = employee.empName;
// const hire = employee.hireDate;

const {empName, hireDate} = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);

function foo({empName, age}) {
  // const {empName, age} = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

const age = 20;

const { age: empAge , birthDate} = employee; // 변수 이미 있을 경우 키 값 변경하기
console.log(empAge);

const divStyle = {
  'font=size': '18px',
  'background-color': 'red'
};

const {'font=size': fontsize,'background-color' : bgColor} = divStyle;
console.log(fontsize);
console.log(bgColor);

console.log('==============================');

const dog = {
  kind: '말티즈',
  name: '해피',
  age: 3,
  injection: false
};

const {kind, age: petAge, ...rest} = dog;
console.log(kind);
console.log(petAge);
console.log(rest); //{ name: '해피', injection: false }

// 객체 안전 복사
const copyDog = {...dog};
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age: 20,
  favorite: ['산책']
};

console.log(dog);
// console.log(copyDog);
console.log(copyDog2); 
//{
//   kind: '말티즈',
//   name: '해피',
//   age: 20,
//   injection: false,
//   favorite: [ '산책' ]
// }




// const trsCountByCity = traders.reduce((acc, { trader }) => {
//   const { city } = trader;
//   if (!acc[city]) {
//     acc[city] = 1;
//   } else {
//     acc[city]++;
//   }
//   return acc;
// }, {});
// console.log(trsCountByCity);

// console.log('==============================');

// const result = traders.reduce((acc, { trader, year }) => {
//   const { name } = trader;
//   // 연도별 거래자 거래 횟수 집계
//   const key = `${year}_${name}`;

//   if (!acc[key]) {
//     acc[key] = 1;
//   } else {
//     acc[key]++;
//   }
//   // 연도별 최대 거래 횟수 찾기
//   const yearMaxKey = `max_${year}`;
//   if (!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count) {
//     acc[yearMaxKey] = { name, count: acc[key] };
//   }
//   return acc;
// }, {});

