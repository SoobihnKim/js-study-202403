// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const ADD = 'ADD';
const SUB = 'SUB';
const MUL = 'MUL';
const DIV = 'DIV';

const $userInput = document.getElementById("input-number");

const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");

// result 요소노드
const $currentResult = document.getElementById("current-result");
// 계산 로그 요소노드
const $currentCalculation = document.getElementById("current-calculation");

// 로그 목록 요소 노드

// 계산 이력을 모아둘 배열
const logEntries = [];

// result에 그려질 숫자
let currentResult = 0;

//=============== 함수 정의 영역 =================//

const operateNumber = ({type, prevResult: firstNumber, enteredNumber: secondNumber}) => {
  let mark = '', result = 0;
  switch(type) {
      case ADD:
        result = firstNumber + secondNumber;
        mark = '+';
      break;
      case SUB:
        result = firstNumber - secondNumber;
        mark = '-';
      break;
      case MUL:
        result = firstNumber * secondNumber;
        mark = '*';
      break;
      case DIV:
        result = firstNumber/+ secondNumber;
        mark = '/';
      break;
  }
  return {mark, result};

};

// 로그엔트리 배열에 로그 쌓기
const accumulateLog = ({descriptionLog, currentResult}) => {

};

// 계산 기능 헬퍼 함수
const calculate = () => {
  
      // 더하기를 해야 함
      // 계산 전 값을 백업
      const prevResult = currentResult;
      // 1. 입력창에 입력한 숫자를 읽어와야 함.
      const enteredNumber = +$userInput.value;

      // 2. 결과에 누적
      const {mark, result} = operateNumber(type, prevResult, enteredNumber);
      currentResult = result;

      // 3. 화면에 렌더링
      $currentResult.textContent = currentResult;
      $userInput.value = "";

      // 계산 로그 생성
      const descriptionLog = `${prevResult} ${mark} ${enteredNumber}`;
      $currentCalculation.textContent = descriptionLog;

      // 로그 이력 쌓기
      accumulateLog();
     
};
