// =============================전역 변수 정의 영역========================//

// const todolist = {
//   input: null,

// };

// ==============================함수 정의 영역===========================//

// 1. 할 일 입력하면 리스트에 추가

function renderNewToDo({ id, text }) {
  const $toDoList = document.querySelector(".todo-list");
  const $newLi = document.querySelector("li");
  $newLi.classList.add("todo-list-item");
  $newLi.dataset.id = id;
  $newLi.innerHTML = `
<label class = "checkbox">
<input type = "checkbox">
<span class = "text">${text}</span>
</label>
<div class="modify"><span class="lnr lnr-undo"></span></div>
<div class="remove"><span class="lnr lnr-cross-circle"></span></div>
`;
  $toDoList.appendChild($newLi);
}

renderNewToDo();

// 할일 추가 기능 처리
function insertToDoData() {
  const $newInput = document.createElement("ul");
  $newInput.classList.add("todo-list");

  $newInput.appendChild($newInput);

}




// $form.addEventListener("submit", (e) => {
//   e.preventDefault(); // submit 기능 해제
//   if ($form.firstElementChild === "") {
//     return;
//   }
//   $form.submit();
// });

const $btn = document.getElementById("add");
console.log($btn);


// ==============================함수 실행 영역===========================//
