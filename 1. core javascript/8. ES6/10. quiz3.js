const traders = [
  {
    trader: {
      name: "김철수", 
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, 
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
];

// traders.filter(() => { // length가 6 이므로 hello 6번 찍힘
//   console.log('hello');
// })
// traders.filter((a, b) => {  // b => index
//   console.log(`${b} => ${a.trader.name}`);
// });

// filter, map, forEach 모두 반복문
// filter는 값이 true, false =>  조건문이 들어감 조건에 맞는 값이 배열로 결과나옴

// map은 리턴값을 그대로 결과나옴

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const result1 = traders.filter((t) => t.year === 2022).map((t) => t.trader);
console.log(result1);

const tradersIn2022 = traders
  .filter((transaction) => transaction.year === 2022)
  .map((filteredTrs) => filteredTrs.trader);

console.log(tradersIn2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
console.log("===================================");

const result2 = traders.map((t) => t.trader.city);
const newArray = [...new Set(result2)];
console.log(newArray);

const mappedCities = traders.map((trs) => trs.trader.city);
// console.log(mappedCities);

const cities = [...new Set(mappedCities)];
console.log(cities);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
console.log("===================================");

const result3 = traders
  .filter((t) => t.trader.city === "대전")
  .map((t) => t.trader);
result3.forEach((t) => console.log(t));

traders
  .filter((trs) => trs.trader.city === "대전")
  .map((filteredTrs) => filteredTrs.trader)
  .forEach((mappedTrader) => console.log(mappedTrader));

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
console.log("===================================");

const result4 = traders.map((t) => t.trader.name);
const newArr = [...new Set(result4)];
console.log(newArr);

const mappedNames = [...new Set(traders.map((trs) => trs.trader.name))];
console.log(mappedNames);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
console.log("==================================");

const result5 = traders
  .filter((t) => t.trader.city === "서울")
  .map((t) => t.value);
// console.log(result5);

let total = 0;
result5.forEach((t) => (total += t));
console.log(`거래총액: ${total}원`);

console.log("==============||===================");

const total2 = traders
  .filter((trs) => trs.trader.city === "서울")
  .reduce((total, trs) => total + trs.value, 0);
console.log(`거래총액: ${total2}원`);

/*
let total = 0;
traders
  .filter(trs => trs.trader.city === '서울')
  .map(filteredTrs => filteredTrs.value)
  .forEach(val => total += val);
  
console.log(`총액: ${total}`);
*/
/*
let total = 0;

const newArray = [];
for (const trs of traders) {
  if (trs.trader.city === '서울') {
    newArray.push(trs);
  }
}

for (const filteredTrs of newArray) {
  // console.log(filteredTrs.value);
  total += filteredTrs.value;
}
console.log(`총액: ${total}`);
*/

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
console.log("==================1================");

const totalValue = traders
  .filter((t) => t.trader.city === "대전" && t.year === 2023)
  .map((t) => t.value);
// console.log(totalValue);

let total2023 = 0;
totalValue.forEach((t) => (total2023 += t));
console.log(`거래총액: ${total2023}원`);

//2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
console.log("===================================");

const allNameBusan = traders
  .filter((t) => t.trader.city === "부산")
  .map((t) => t.trader.name);
console.log(allNameBusan);

//3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log("===================================");
let maxValue = traders[0];
// console.log(maxValue); //500000
for (const t of traders) {
  if (t.value > maxValue) {
    maxValue = t.value;
  }
}
// console.log('max:',maxValue);

// const maxValueTrader = traders.filter((t) => t.value === maxValue)
// .map(t => t.trader);
console.log(`가장 높은 거래액 정보 - 이름: ${maxValue.trader.name}, 
도시: ${maxValue.trader.city}, 거래액: ${maxValue.value} `);

//4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
console.log("===================================");

const totalCityValue = traders.reduce((count, t) => {
  if(t.trader.city in count) {
    count[t.trader.city] += t.value;
  } else {
    count[t.trader.city] = t.value;
  }
  return count;
}, {}); 
console.log(totalCityValue);


//5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요.
//결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
console.log("=================5=================");

const value70 = traders.filter(t => t.value >= 700000);
console.log(value70);
let t = {};
for (const t in value70) {
  if (t.year === 2022) {
    return t;
  } else if (t.year === 2023) {
    return t;
  }
}
console.log(`${t.year}: [${t}]`);

//6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
//결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
console.log("================6==================");

const countPerson = traders.reduce ((c, t) => {
  if(t.trader.name in c) {
    c[t.trader.name]++;
  } else {
    c[t.trader.name] = 1;
  }
  return c;
}, {});
console.log(countPerson);


const totalPersonValue = traders.reduce((person, t) => {
  if(t.trader.name in person) {
    person[t.trader.name] += t.value;
  } else {
    person[t.trader.name] = t.value;
  }
  return person;
}, {});
console.log(totalPersonValue);

// let tpv = console.log(Object.values(totalPersonValue));
// let cp = console.log(Object.values(countPerson));

// console.log(tpv / cp);
// console.log(`${totalPersonValue}/${countPerson}`);


//7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**
console.log("===================================");

//8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
console.log("===================================");

//9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
console.log("===================================");

const countCityValue = traders.reduce((count, t) => {
  if(t.trader.city in count) {
    count[t.trader.city] ++;
  } else {
    count[t.trader.city] = 1;
  }
  return count;
}, {}); 
console.log(countCityValue);

//10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요.
//각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
console.log("===================================");
