
import isValidate from './validate.js';
import {todos} from './global_var.js';


// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement("li");
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.classList.add("todo-list-item");
  $newTodoLi.dataset.id = id;
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
            <label class="checkbox">
              <input type="checkbox">
              <span class="text">${text}</span>
            </label>
            <div class="modify">
              <span class="lnr lnr-undo"></span>
            </div>
            <div class="remove">
              <span class="lnr lnr-cross-circle"></span>
            </div>
  `;
  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector(".todo-list");
  $todoListUl.appendChild($newTodoLi);
}


// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById("todo-text");
  const inputText = $todoText.value;

  // 혹시 입력을 안하셨나요?
  if(!isValidate($todoText)) return;


  // 새 할일의 아이디 값을 생성하는 함수
  const makeNewId = () => {
    // return todos[todos.length - 1].id + 1; // 데이터 하나도 없다면 문제생김 -1 안됨
    return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  };

  // 할 일 데이터 배열에 새로운 할일 데이터 추가하기

  // todos 배열에 새로운 할 일을 객체로 포장해서 추가해야함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };
  // console.log(newTodo);

  //2. 배열에 추가하기
  todos.push(newTodo);
  // console.log(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);

  $todoText.value = '';


}

export default insertTodoData;