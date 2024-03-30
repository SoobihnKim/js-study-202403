
// 카운트 증가
// const increase = (() => {
//   let count = 0; 
//   return () => ++count;
// })();

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3


// 카운트 감소
// const decrease = (() => {
//   let count = 0; 
//   return () => --count;
// })();

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3
// console.log(increase()); // 4
// console.log(decrease()); // -1
// console.log(decrease()); // -2

// 카운트 증가, 감소 한번에 연결
const countClosure = () => {
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return {
    increase,
    decrease,
  };
};

//즉시 호출
// const { increase, decrease } = (() => {
//   let count = 0;
//   return {
//     increase: () => ++count,
//     decrease: () => --count,
//   }
// })();


const {increase, decrease} = countClosure();
// console.log(typeof counter);
console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
console.log(increase()); // 4
console.log(decrease()); // 3
console.log(decrease()); // 2
