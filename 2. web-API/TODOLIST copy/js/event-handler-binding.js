import insertTodoData from "./todo-insert.js";
import { removeTodoData } from "./todo-remove.js";
import toggleDone from "./todo-done.js";
import toggleModifyMode from "./todo-modfy.js";

const handlerBinding = () => {
  // 추가버튼 클릭 이벤트
  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault(); // form의 submit중단
    insertTodoData();
  });

  // 삭제버튼 클릭 이벤트
  document.querySelector(".todo-list").addEventListener("click", (e) => {
    // 클릭한 버튼이 포함된 li를 탐색
    const $targetLi = e.target.closest(".todo-list-item");
    // console.log($targetLi);
    // 데이터 아이디 추출
    const dataId = +$targetLi.dataset.id;

    if (e.target.matches(".remove span")) {
      // console.log('remove click');

      // 삭제 처리 진행
      // console.log($targetLi);

      // 화면에서 제거
      // document.querySelector('.todo-list').removeChild($targetLi);
      $targetLi.remove();

      // 배열에서 데이터 제거
      removeTodoData(dataId);
      //체크박스
    } else if (e.target.matches(".checkbox input[type=checkbox]")) {
      // 체크박스 클릭하면
      // 체크화면 렌더링 처리
      e.target.closest(".checkbox").classList.add("checked");
      // 체크 데이터 처리
      toggleDone(dataId);
    } else if (e.target.matches(".modify span")) {
      // console.log(e.target);
      toggleModifyMode(e.target);
    }
  });
};

export default handlerBinding;
