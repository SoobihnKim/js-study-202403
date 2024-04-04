
// getDom.js 에서 $btn를 가져오기
import {$btn as $button} from './getDom.js'; // 불러온 변수

// event.js 에서 clickHandler를 가져오기
import {clickHandler} from "./event.js";
import haha from "./pow.js";

const pow = () => {};

const $btn = '123'; // 내가 만든 변수
console.log(`내가 만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

console.log(haha.pow(5));
pow();
console.log(haha.add(5, 3));

// event.js에서 만든 이벤트 핸들러 등록
$btn.addEventListener('click', clickHandler);