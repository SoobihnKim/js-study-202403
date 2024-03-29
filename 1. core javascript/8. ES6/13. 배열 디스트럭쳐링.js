
const userNames = ['김철수', '강감찬', '박영희'];

// userNames에서 각각의 요소들을 다시 변수에 넣고싶다.
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [kim, kang, park] = userNames;

console.log(`a: ${kim}, b: ${kang}, c: ${park}`);

const[kk, ,pp] = userNames;
console.log(`kk: ${kk}, pp: ${pp}`);

const example = ['', [], ()=>{}];

// const myFunc = example[2];
const [ , arr, myFunc] = example;
myFunc();

let first = 10, second = 20;
[first, second] = [second, first];
console.log(`first: ${first}, second: ${second}`);

// 배열 안에서 맨 앞 두개만 각각의 변수에 저장하고
// 나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 7 , 9, 11, 13];
// 원본 복사
// const numsCopy = numbers.slice();

// const one = numbers.shift();
// const three = numbers.shift();


const [one, three, ...numsCopy] = numbers;

console.log(one);
console.log(three);
console.log(numsCopy);

console.log('=====================');

// 스프레드를 통한 배열 간편 복사
const foods = ['감튀', '햄버거', '콜라'];
// const copyFoods = foods; // 이렇게하면안됨(복사본도 같이 변경됨)
// const copyFoods = foods.slice(); // 이렇게 복사해야함
// const copyFoods = foods.map(f => f);

const copyFoods = [... foods]; // 배열 복사하는 방법(slice와 같은방법)

foods[0] = '치킨너겟';
copyFoods.push('밀크쉐이크');

console.log(foods);
console.log(copyFoods);

console.log('=============================');

// const newFoods = ['육포', ... foods, '닭다리'];
// console.log(newFoods);

// a.concat(b) => [...a, ...b] (배열 두개 합칠때)
const newFoods = ['육포', ... foods, '닭다리', ...userNames];
console.log(newFoods);